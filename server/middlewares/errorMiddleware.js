import { ApiError } from "../exceptions/apiError.js";

export function errorMiddleware(err, req, res, next) {
    console.log(err);
    
    if(err.status) {
        return res.status(err.status).json({ message: err.message, errors: err.errors})
    }

    return res.status(500).json({ message: 'Непредвиденная ошибка' })
}