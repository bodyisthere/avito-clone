import { ApiError } from "../exceptions/apiError.js";

export function errorMiddleware(err, req, res, next) {
    if(err.status) {
        return res.status(err.status).json({ message: err.message, errors: err.errors})
    }

    console.log(err)
    return res.status(500).json({ message: 'Непредвиденная ошибка' })
}