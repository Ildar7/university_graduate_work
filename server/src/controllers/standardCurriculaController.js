import { StandardCurriculaModel } from '../models/StandardCurricula.js';

export const getStandardCurricula = async (req, res) => {
    try {
        const curricula = await StandardCurriculaModel.getStandardCurricula();
        res.json(curricula);
    } catch (error) {
        console.error('Ошибка при получении стандартных учебных планов:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getStandardCurriculumDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID учебного плана должен быть положительным числом' });
        }
        const curriculum = await StandardCurriculaModel.getStandardCurriculumDetail(parsedId);
        res.json(curriculum);
    } catch (error) {
        console.error('Ошибка при получении деталей учебного плана:', error);
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteStandardCurriculum = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID учебного плана должен быть положительным числом' });
        }
        await StandardCurriculaModel.deleteStandardCurriculum(parsedId);
        res.status(200).json({ message: `Учебный план с ID ${parsedId} удалён` });
    } catch (error) {
        console.error('Ошибка при удалении учебного плана:', error);
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
