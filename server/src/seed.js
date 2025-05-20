import bcrypt from 'bcrypt';
import pool from './config/db';

const seedUser = async () => {
    const login = 'admin';
    const password = 'somepa$$wd'; // Пароль в открытом виде
    const first_name = 'Иван';
    const last_name = 'Иванов';

    const hashedPassword = await bcrypt.hash(password, 10); // Хешируем пароль

    await pool.query(
        'INSERT INTO users (login, password, first_name, last_name) VALUES ($1, $2, $3, $4)',
        [login, hashedPassword, first_name, last_name]
    );
    console.log('Тестовый пользователь добавлен');
    process.exit();
};

seedUser().catch(err => console.error(err));
