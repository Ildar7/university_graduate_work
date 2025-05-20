import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import studentsRoutes from './routes/studentsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import languageofeduRoutes from './routes/languageofeduRoutes.js';
import authRoutes from './routes/authRoutes.js';
import collegeRoutes from './routes/collegeRoutes.js';

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', studentsRoutes);
app.use('/api', usersRoutes);
app.use('/api', languageofeduRoutes);
app.use('/api', collegeRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Маршрут не найден' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Ошибка сервера' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
