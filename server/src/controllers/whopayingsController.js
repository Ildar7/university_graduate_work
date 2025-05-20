import {
    getWhopaying as getWhopayingModel,
    getWhopayingById as getWhopayingByIdModel,
    createWhopaying as createWhopayingModel,
    updateWhopaying as updateWhopayingModel,
    deleteWhopaying as deleteWhopayingModel,
    getNextWhopayingId as getNextWhopayingIdModel
} from '../models/Whopaying.js';

export const getWhopaying = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_whopaying', order = 'asc' } = req.query;

        const validSortFields = ['id_whopaying', 'whopaying'];
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

        const { data, total } = await getWhopayingModel({
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
        console.error('Ошибка при получении источников финансирования:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getWhopayingById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const item = await getWhopayingByIdModel(parsedId);
        if (!item) {
            return res.status(404).json({ message: `Запись с ID ${parsedId} не найдена` });
        }
        res.json(item);
    } catch (error) {
        console.error(`Ошибка при получении по ID:`, error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createWhopaying = async (req, res) => {
    try {
        const { source } = req.body;
        if (!source || typeof source !== 'string' || source.trim() === '') {
            return res.status(400).json({ message: 'Поле source обязательно и должно быть непустой строкой' });
        }
        const trimmedSource = source.trim();
        const nextId = await getNextWhopayingIdModel();
        const whopaying = await createWhopayingModel(nextId, trimmedSource);
        res.status(201).json(whopaying);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Источник финансирования '${req.body.source}' уже существует` });
        }
        console.error('Ошибка при создании источника финансирования:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateWhopaying = async (req, res) => {
    try {
        const { id } = req.params;
        const { source } = req.body;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        if (!source || typeof source !== 'string' || source.trim() === '') {
            return res.status(400).json({ message: 'Поле source обязательно и должно быть непустой строкой' });
        }
        const trimmedSource = source.trim();
        const whopaying = await updateWhopayingModel(parsedId, trimmedSource);
        if (!whopaying) {
            return res.status(404).json({ message: `Источник финансирования с ID ${parsedId} не найден` });
        }
        res.json(whopaying);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Источник финансирования '${req.body.source}' уже существует` });
        }
        console.error('Ошибка при обновлении источника финансирования:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteWhopaying = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const deleted = await deleteWhopayingModel(parsedId);
        if (!deleted) {
            return res.status(404).json({ message: `Источник финансирования с ID ${parsedId} не найден` });
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        if (error.code === '23503') {
            return res.status(409).json({
                message: `Нельзя удалить источник финансирования с ID ${req.params.id}, так как он используется в других таблицах`
            });
        }
        console.error('Ошибка при удалении источника финансирования:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
