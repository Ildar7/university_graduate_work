import {
    getFromacceptedfinished as getFromacceptedfinishedModel,
    getFromacceptedfinishedById as getFromacceptedfinishedByIdModel,
    createFromacceptedfinished as createFromacceptedfinishedModel,
    deleteFromacceptedfinished as deleteFromacceptedfinishedModel,
    updateFromacceptedfinished as updateFromacceptedfinishedModel,
    getNextFromacceptedfinishedId as getNextFromacceptedfinishedIdModel
} from '../models/Fromacceptedfinished.js';

export const getFromacceptedfinished = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_fromacceptedfinished', order = 'asc' } = req.query;

        const validSortFields = ['id_fromacceptedfinished', 'fromacceptedfinished'];
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

        const { data, total } = await getFromacceptedfinishedModel({
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
        console.error('Ошибка при получении типов зачисления:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getFromacceptedfinishedById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const item = await getFromacceptedfinishedByIdModel(parsedId);
        if (!item) {
            return res.status(404).json({ message: `Запись с ID ${parsedId} не найдена` });
        }
        res.json(item);
    } catch (error) {
        console.error(`Ошибка при получении типа зачисления по ID:`, error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createFromacceptedfinished = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: 'Поле name обязательно и должно быть непустой строкой' });
        }
        const trimmedName = name.trim();
        const nextId = await getNextFromacceptedfinishedIdModel();
        const fromacceptedfinished = await createFromacceptedfinishedModel(nextId, trimmedName);
        res.status(201).json(fromacceptedfinished);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Тип завершенного образования '${req.body.name}' уже существует` });
        }
        console.error('Ошибка при создании типа завершенного образования:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateFromacceptedfinished = async (req, res) => {
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
        const fromacceptedfinished = await updateFromacceptedfinishedModel(parsedId, trimmedName);
        if (!fromacceptedfinished) {
            return res.status(404).json({ message: `Тип завершенного образования с ID ${parsedId} не найден` });
        }
        res.json(fromacceptedfinished);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Тип завершенного образования '${req.body.name}' уже существует` });
        }
        console.error('Ошибка при обновлении типа завершенного образования:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteFromacceptedfinished = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const deleted = await deleteFromacceptedfinishedModel(parsedId);
        if (!deleted) {
            return res.status(404).json({ message: `Тип завершенного образования с ID ${parsedId} не найден` });
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        if (error.code === '23503') {
            return res.status(409).json({
                message: `Нельзя удалить тип завершенного образования с ID ${req.params.id}, так как он используется в других таблицах`
            });
        }
        console.error('Ошибка при удалении типа завершенного образования:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
