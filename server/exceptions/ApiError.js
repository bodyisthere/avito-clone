export class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static NoAccess() {
        return new ApiError(403, 'Для доступа к данной операции нужно иметь роль ADMIN')
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }
}