import {
    getTypeofareaofresidence as getTypeofareaofresidenceModel,
    getTypeofareaofresidenceById as getTypeofareaofresidenceByIdModel,
    createTypeofareaofresidence as createTypeofareaofresidenceModel,
    updateTypeofareaofresidence as updateTypeofareaofresidenceModel,
    deleteTypeofareaofresidence as deleteTypeofareaofresidenceModel,
    getNextTypeofareaofresidenceId as getNextTypeofareaofresidenceIdModel
} from '../models/Typeofareaofresidence.js';

export const getTypeofareaofresidence = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_typeofareaofresidence', order = 'asc' } = req.query;
        const validSortFields = ['id_typeofareaofresidence', 'typeofareaofresidence'];
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
        const { data, total } = await getTypeofareaofresidenceModel({
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
        console.error('Ошибка при получении типов местности:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getTypeofareaofresidenceById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const item = await getTypeofareaofresidenceByIdModel(parsedId);
        if (!item) {
            return res.status(404).json({ message: `Тип местности с ID ${parsedId} не найден` });
        }
        res.json(item);
    } catch (error) {
        console.error('Ошибка при получении типа местности по ID:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createTypeofareaofresidence = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title || typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({ message: 'Поле title обязательно и должно быть непустой строкой' });
        }
        const trimmedTitle = title.trim();
        const nextId = await getNextTypeofareaofresidenceIdModel();
        const typeofareaofresidence = await createTypeofareaofresidenceModel(nextId, trimmedTitle);
        res.status(201).json(typeofareaofresidence);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Тип местности '${req.body.title}' уже существует` });
        }
        console.error('Ошибка при создании типа местности:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateTypeofareaofresidence = async (req, res) => {
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
        const trimmedTitle = title.trim();
        const typeofareaofresidence = await updateTypeofareaofresidenceModel(parsedId, trimmedTitle);
        if (!typeofareaofresidence) {
            return res.status(404).json({ message: `Тип местности с ID ${parsedId} не найден` });
        }
        res.json(typeofareaofresidence);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Тип местности '${req.body.title}' уже существует` });
        }
        console.error('Ошибка при обновлении типа местности:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteTypeofareaofresidence = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const deleted = await deleteTypeofareaofresidenceModel(parsedId);
        if (!deleted) {
            return res.status(404).json({ message: `Тип местности с ID ${parsedId} не найден` });
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        if (error.code === '23503') {
            return res.status(409).json({
                message: `Нельзя удалить тип местности с ID ${req.params.id}, так как он используется в других таблицах`
            });
        }
        console.error('Ошибка при удалении типа местности:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
