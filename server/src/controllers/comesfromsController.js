import {
    getComesfrom as getComesfromModel,
    getComesfromById as getComesfromByIdModel,
    createComesfrom as createComesfromModel,
    updateComesfrom as updateComesfromModel,
    deleteComesfrom as deleteComesfromModel,
    getNextComesfromId as getNextComesfromIdModel
} from '../models/Comesfrom.js';

export const getComesfrom = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_comesfrom', order = 'asc' } = req.query;
        const validSortFields = ['id_comesfrom', 'comesfrom'];
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
        const { data, total } = await getComesfromModel({
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
        console.error('Ошибка при получении источников поступления:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getComesfromById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const item = await getComesfromByIdModel(parsedId);
        if (!item) {
            return res.status(404).json({ message: `Источник поступления с ID ${parsedId} не найден` });
        }
        res.json(item);
    } catch (error) {
        console.error('Ошибка при получении источника поступления по ID:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createComesfrom = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: 'Поле name обязательно и должно быть непустой строкой' });
        }
        const trimmedName = name.trim();
        const nextId = await getNextComesfromIdModel();
        const comesfrom = await createComesfromModel(nextId, trimmedName);
        res.status(201).json(comesfrom);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Источник поступления '${req.body.name}' уже существует` });
        }
        console.error('Ошибка при создании источника поступления:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateComesfrom = async (req, res) => {
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
        const comesfrom = await updateComesfromModel(parsedId, trimmedName);
        if (!comesfrom) {
            return res.status(404).json({ message: `Источник поступления с ID ${parsedId} не найден` });
        }
        res.json(comesfrom);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Источник поступления '${req.body.name}' уже существует` });
        }
        console.error('Ошибка при обновлении источника поступления:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteComesfrom = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const deleted = await deleteComesfromModel(parsedId);
        if (!deleted) {
            return res.status(404).json({ message: `Источник поступления с ID ${parsedId} не найден` });
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        if (error.code === '23503') {
            return res.status(409).json({
                message: `Нельзя удалить источник поступления с ID ${req.params.id}, так как он используется в других таблицах`
            });
        }
        console.error('Ошибка при удалении источника поступления:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
