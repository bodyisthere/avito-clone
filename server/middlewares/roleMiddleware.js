import { ApiError } from "../exceptions/apiError.js";
import TokenService from "../service/TokenService.js";

export function roleMiddleware(req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    
    if(!authorizationHeader) return next(ApiError.UnauthorizedError());
    
    const accessToken = authorizationHeader;
    if(!accessToken) return next(ApiError.UnauthorizedError());
    
    const userData = TokenService.validateAccessToken(accessToken);
    if(!userData) return next(ApiError.UnauthorizedError());
    
    if(!userData.roles.includes("ADMIN")) return next(ApiError.NoAccess());
    next();
  } catch (e) {
    console.log(e);
    return next(ApiError.NoAccess());
  }
};