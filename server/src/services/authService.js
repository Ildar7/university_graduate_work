import pool from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const loginUserService = async (login, password) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE login = $1', [login]);
        const user = result.rows[0];

        if (!user) {
            throw new Error('Пользователь не найден');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Неверный пароль');
        }

        const token = jwt.sign(
            { id: user.id, login: user.login },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return {
            token,
            first_name: user.first_name,
            last_name: user.last_name,
        };
    } catch (error) {
        throw error;
    }
};
