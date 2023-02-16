import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';

import UserModel from '../models/UserModel.js'
import RoleModel from '../models/RoleModel.js'
import TokenService from './TokenService.js';
import MailService from './MailService.js';
import { UserDto } from '../dtos/UserDTO.js'
import { ApiError } from '../exceptions/apiError.js';

class UserService {
  async registration(email, password, name) {
    //Проверка на уникальность email
    const isUnique = await UserModel.findOne({email});
    if(isUnique) {
        throw ApiError.BadRequest(`Пользователь c email: ${email} уже существует`)
    }

    //Шифровка пароля
    const passwordHash = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();
    
    const userRole = await RoleModel.findOne({value: "USER"});
    const user = await UserModel.create({
        email,
        passwordHash,
        name,
        activationLink,
        roles: [userRole.value]
    });

    const userDto = new UserDto(user);

    //шифруем email, id, isActivated, role
    const tokens = TokenService.generateTokens({ ...userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    await MailService.sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`);

    return { ...tokens, userDto }
  }

  async login(email, password) {
    const user = await UserModel.findOne({email});
    if(!user) throw ApiError.BadRequest('Пользователь не был найден');
    
    const isPassEquals = await bcrypt.compare(password, user.passwordHash);
    if(!isPassEquals) throw ApiError.BadRequest('Неверный логин или пароль');

    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({...userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, userDto };
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({activationLink});
    if(!user) throw ApiError.BadRequest('Неккоректная ссылка активации');
    if(user.isActivated) throw ApiError.BadRequest('Ваш аккаунт уже активирован');

    user.isActivated = true;
    await user.save();
  }

  async logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if(!refreshToken) throw ApiError.UnauthorizedError();
    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);

    if(!userData || !tokenFromDb) throw ApiError.UnauthorizedError();

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = await TokenService.generateTokens({...userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, userDto };
  }
}

export default new UserService();