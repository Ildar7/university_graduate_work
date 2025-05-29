import { WorkingCurriculumModel } from '../models/WorkingCurriculum.js';

export const getAllPaginated = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const sort = req.query.sort || 'working_curriculum_id';
        const order = req.query.order || 'asc';
        const academicYearFrom = req.query.academicYearFrom ? parseInt(req.query.academicYearFrom) : undefined;
        const result = await WorkingCurriculumModel.getAllPaginated(page, limit, sort, order, academicYearFrom);
        res.json(result);
    } catch (error) {
        console.error('Ошибка при получении рабочих учебных планов:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const create = async (req, res) => {
    try {
        const data = req.body;
        if (!data.academic_year_from || !data.approval_date || data.is_active === undefined || data.is_full_time_education === undefined || !data.education_base_id || !data.standard_curriculum_id || !data.title || !data.version) {
            return res.status(400).json({ message: 'Все поля обязательны' });
        }
        const newCurriculum = await WorkingCurriculumModel.create(data);
        res.status(201).json(newCurriculum);
    } catch (error) {
        console.error('Ошибка при создании рабочего учебного плана:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const curriculum = await WorkingCurriculumModel.getById(parsedId);
        res.json(curriculum);
    } catch (error) {
        console.error('Ошибка при получении рабочего учебного плана:', error);
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const data = req.body;
        if (Object.keys(data).length === 0) {
            return res.status(400).json({ message: 'Нет данных для обновления' });
        }
        const updatedCurriculum = await WorkingCurriculumModel.update(parsedId, data);
        res.json(updatedCurriculum);
    } catch (error) {
        console.error('Ошибка при обновлении рабочего учебного плана:', error);
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteCurriculum = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        await WorkingCurriculumModel.delete(parsedId);
        res.json({ message: `Рабочий учебный план с ID ${parsedId} удалён` });
    } catch (error) {
        console.error('Ошибка при удалении рабочего учебного плана:', error);
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
