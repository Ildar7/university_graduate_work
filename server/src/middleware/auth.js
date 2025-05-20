import jwt from 'jsonwebtoken';
import {config} from 'dotenv';

config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const authenticateJWT = (req, res, next) => {
    // Получаем токен из заголовков
    const authHeader = req.headers['authorization'];
    const tokenHeader = req.headers['x-access-token'];

    // Проверяем, есть ли токен в одном из заголовков
    let token;
    if (authHeader && typeof authHeader === 'string') {
        token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
    } else if (tokenHeader && typeof tokenHeader === 'string') {
        token = tokenHeader;
    }

    if (!token) {
        res.status(401).json({ message: 'Нет токена авторизации' });
        return;
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            res.status(401).json({ message: 'Недействительный токен' });
            return;
        }
        // Добавляем user к req (типизация ниже)
        req.user = user;
        next();
    });
};
