import bcrypt from 'bcrypt';
import pool from './config/db.js';

const seedUser = async () => {
    const login = 'admin';
    const password = 'somepasswd';
    const first_name = 'Ильдар';
    const last_name = 'Валиев';

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
        'INSERT INTO users (login, password, first_name, last_name) VALUES ($1, $2, $3, $4)',
        [login, hashedPassword, first_name, last_name]
    );
    console.log('Тестовый пользователь добавлен');
    process.exit();
};

seedUser().catch(err => console.error(err));
