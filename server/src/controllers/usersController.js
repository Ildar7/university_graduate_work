import pool from '../config/db.js';
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json({ data: result.rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createUser = async (req, res) => {
    const { login, password, email, first_name, last_name, patronymic } = req.body;
    if (!login || !password || !first_name) {
        return res.status(400).json({ message: 'Обязательные поля: login, password, first_name' });
    }
    try {
        const existingUser = await pool.query('SELECT * FROM users WHERE login = $1', [login]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'Пользователь с таким логином уже существует' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (login, password, email, first_name, last_name, patronymic) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [login, hashedPassword, email || null, first_name, last_name || null, patronymic || null]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, first_name, last_name, patronymic } = req.body;
    try {
        const result = await pool.query(
            'UPDATE users SET email = COALESCE($1, email), first_name = COALESCE($2, first_name), last_name = COALESCE($3, last_name), patronymic = COALESCE($4, patronymic) WHERE user_id = $5 RETURNING *',
            [email, first_name, last_name, patronymic, id]
        );
        if (result.rowCount === 0) {
            res.status(404).json({ message: 'Запись не найдена' });
            return;
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM users WHERE user_id = $1 RETURNING *', [id]);
        if (result.rowCount === 0) {
            res.status(404).json({ message: 'Запись не найдена' });
            return;
        }
        res.json({ message: 'Запись удалена' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
