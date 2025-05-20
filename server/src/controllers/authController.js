import { loginUserService } from '../services/authService.js';

export const loginUser = async (req, res) => {
    const { login, password } = req.body;

    if (!login || !password) {
        return res.status(400).json({ message: 'Логин и пароль обязательны' });
    }

    try {
        const userData = await loginUserService(login, password);
        res.json(userData);
    } catch (error) {
        console.error('Ошибка авторизации:', error.message);
        if (error.message === 'Пользователь не найден' || error.message === 'Неверный пароль') {
            return res.status(401).json({ message: 'Неверный логин или пароль' });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
