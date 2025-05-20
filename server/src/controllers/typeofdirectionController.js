import {
    getTypeofdirection as getTypeofdirectionsModel,
    getTypeofdirectionById as getTypeofdirectionByIdModel,
    createTypeofdirection as createTypeofdirectionModel,
    updateTypeofdirection as updateTypeofdirectionModel,
    deleteTypeofdirection as deleteTypeofdirectionModel,
    getNextTypeofdirectionId as getNextTypeofdirectionIdModel
} from '../models/Typeofdirection.js';

export const getTypeofdirection = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_typeofdirection', order = 'asc' } = req.query;
        const validSortFields = ['id_typeofdirection', 'typeofdirection'];
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
        const { data, total } = await getTypeofdirectionsModel({
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
        console.error('Ошибка при получении направлений обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getTypeofdirectionById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const item = await getTypeofdirectionByIdModel(parsedId);
        if (!item) {
            return res.status(404).json({ message: `Направление обучения с ID ${parsedId} не найдено` });
        }
        res.json(item);
    } catch (error) {
        console.error('Ошибка при получении направления обучения по ID:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createTypeofdirection = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: 'Поле name обязательно и должно быть непустой строкой' });
        }
        const trimmedName = name.trim();
        const nextId = await getNextTypeofdirectionIdModel();
        const typeofdirection = await createTypeofdirectionModel(nextId, trimmedName);
        res.status(201).json(typeofdirection);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Направление обучения '${req.body.name}' уже существует` });
        }
        console.error('Ошибка при создании направления обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateTypeofdirection = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: 'Поле name обязательно и должно быть непустой строкой' });
        }
        const trimmedName = name.trim();
        const typeofdirection = await updateTypeofdirectionModel(parsedId, trimmedName);
        if (!typeofdirection) {
            return res.status(404).json({ message: `Направление обучения с ID ${parsedId} не найдено` });
        }
        res.json(typeofdirection);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Направление обучения '${req.body.name}' уже существует` });
        }
        console.error('Ошибка при обновлении направления обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteTypeofdirection = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const deleted = await deleteTypeofdirectionModel(parsedId);
        if (!deleted) {
            return res.status(404).json({ message: `Направление обучения с ID ${parsedId} не найдено` });
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        if (error.code === '23503') {
            return res.status(409).json({
                message: `Нельзя удалить направление обучения с ID ${req.params.id}, так как оно используется в других таблицах`
            });
        }
        console.error('Ошибка при удалении направления обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
