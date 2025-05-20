import { Pool } from 'pg';
import { config } from 'dotenv';

config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.on('error', (err, client) => {
    console.error('Ошибка подключения к базе данных:', err.stack);
    process.exit(-1);
});

export default pool;
