import {
    getTypeoftrainings as getTypeoftrainingsModel,
    getTypeoftrainingById as getTypeoftrainingByIdModel,
    createTypeoftraining as createTypeoftrainingModel,
    updateTypeoftraining as updateTypeoftrainingModel,
    deleteTypeoftraining as deleteTypeoftrainingModel,
    getNextTypeoftrainingId as getNextTypeoftrainingIdModel
} from '../models/Typeoftraining.js';

export const getTypeoftrainings = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_typeoftraining', order = 'asc' } = req.query;
        const validSortFields = ['id_typeoftraining', 'typeoftraining'];
        const validOrderValues = ['asc', 'desc'];
        if (!validSortFields.includes(sort)) {
            return res.status(400).json({ message: `Недопустимое поле сортировки: ${sort}` });
        }
        if (!validOrderValues.includes(order.toLowerCase())) {
            return res.status(400).json({ message: `Недопустимый порядок сортировки: ${order}` });
        }
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        if (isNaN(pageNum) || pageNum < 1) {
            return res.status(400).json({ message: 'Номер страницы должен быть положительным числом' });
        }
        if (isNaN(limitNum) || limitNum < 1) {
            return res.status(400).json({ message: 'Лимит должен быть положительным числом' });
        }
        const { data, total } = await getTypeoftrainingsModel({
            page: pageNum,
            limit: limitNum,
            sort,
            order: order.toLowerCase(),
        });
        const pagination = {
            current_page: pageNum,
            per_page: limitNum,
            total_records: total,
            total_pages: Math.ceil(total / limitNum),
        };
        res.json({ data, pagination });
    } catch (error) {
        console.error('Ошибка при получении форм обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getTypeoftrainingById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const item = await getTypeoftrainingByIdModel(parsedId);
        if (!item) {
            return res.status(404).json({ message: `Форма обучения с ID ${parsedId} не найдена` });
        }
        res.json(item);
    } catch (error) {
        console.error('Ошибка при получении формы обучения по ID:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createTypeoftraining = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title || typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({ message: 'Поле title обязательно и должно быть непустой строкой' });
        }
        if (title.trim().length > 255) {
            return res.status(400).json({ message: 'Поле title не должно превышать 255 символов' });
        }
        const trimmedTitle = title.trim();
        const nextId = await getNextTypeoftrainingIdModel();
        const typeoftraining = await createTypeoftrainingModel(nextId, trimmedTitle);
        res.status(201).json(typeoftraining);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Форма обучения '${req.body.title}' уже существует` });
        }
        console.error('Ошибка при создании формы обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateTypeoftraining = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        if (!title || typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({ message: 'Поле title обязательно и должно быть непустой строкой' });
        }
        if (title.trim().length > 255) {
            return res.status(400).json({ message: 'Поле title не должно превышать 255 символов' });
        }
        const trimmedTitle = title.trim();
        const typeoftraining = await updateTypeoftrainingModel(parsedId, trimmedTitle);
        if (!typeoftraining) {
            return res.status(404).json({ message: `Форма обучения с ID ${parsedId} не найдена` });
        }
        res.json(typeoftraining);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Форма обучения '${req.body.title}' уже существует` });
        }
        console.error('Ошибка при обновлении формы обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteTypeoftraining = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const deleted = await deleteTypeoftrainingModel(parsedId);
        if (!deleted) {
            return res.status(404).json({ message: `Форма обучения с ID ${parsedId} не найдена` });
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        if (error.code === '23503') {
            return res.status(409).json({
                message: `Нельзя удалить форму обучения с ID ${req.params.id}, так как она используется в других таблицах`
            });
        }
        console.error('Ошибка при удалении формы обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
