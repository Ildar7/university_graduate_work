import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import studentsRoutes from './routes/studentsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import languageofeduRoutes from './routes/languageofeduRoutes.js';
import whopayingRoutes from './routes/whopayingRoutes.js';
import typeenrollmentRoutes from './routes/typeenrollmentRoutes.js';
import fromacceptedfinishedRoutes from './routes/fromacceptedfinishedRoutes.js';
import comesfromRoutes from './routes/comesfromRoutes.js';
import typeofareaofresidenceRoutes from './routes/typeofareaofresidenceRoutes.js';
import typeofdirectionRoutes from './routes/typeofdirectionRoutes.js';
import specialtyRoutes from './routes/specialtyRoutes.js';
import qualificationRoutes from './routes/qualificationRoutes.js';
import typeoftrainingRoutes from './routes/typeoftrainingRoutes.js';
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
app.use('/api', whopayingRoutes);
app.use('/api', typeenrollmentRoutes);
app.use('/api', fromacceptedfinishedRoutes);
app.use('/api', comesfromRoutes);
app.use('/api', typeofareaofresidenceRoutes);
app.use('/api', typeofdirectionRoutes);
app.use('/api', specialtyRoutes);
app.use('/api', qualificationRoutes);
app.use('/api', typeoftrainingRoutes);
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
