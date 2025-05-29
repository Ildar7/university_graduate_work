import { TrainingScheduleModel } from '../models/TrainingSchedule.js';

export const getAllAvailable = async (req, res) => {
    try {
        const schedules = await TrainingScheduleModel.getAllAvailable();
        res.json(schedules);
    } catch (error) {
        console.error('Ошибка при получении расписания:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
