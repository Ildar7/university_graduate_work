import { SubjectScheduleModel } from '../models/SubjectSchedule.js';

export const getAvailableYears = async (req, res) => {
    try {
        const years = await SubjectScheduleModel.getAvailableYears();
        res.json(years);
    } catch (error) {
        console.error('Ошибка при получении доступных лет:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
