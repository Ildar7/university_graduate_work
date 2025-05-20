import {
    getLanguageofedus as getLanguageofedusModel,
    getLanguageofeduById as getLanguageofeduByIdModel,
    createLanguageofedu as createLanguageofeduModel,
    deleteLanguageofedu as deleteLanguageofeduModel,
    updateLanguageofedu as updateLanguageofeduModel,
    getNextLanguageofeduId as getNextLanguageofeduIdModel
} from '../models/Languageofedus.js';

export const getLanguageofedus = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_languageofedu', order = 'asc' } = req.query;

        const validSortFields = ['id_languageofedu', 'languageofedu'];
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

        const { data, total } = await getLanguageofedusModel({
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
        console.error('Ошибка при получении языков обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getLanguageofeduById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const item = await getLanguageofeduByIdModel(parsedId);
        if (!item) {
            return res.status(404).json({ message: `Запись с ID ${parsedId} не найдена` });
        }
        res.json(item);
    } catch (error) {
        console.error(`Ошибка при получении языка обучения по ID:`, error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createLanguageofedu = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: 'Поле name обязательно и должно быть непустой строкой' });
        }
        const trimmedName = name.trim();
        const nextId = await getNextLanguageofeduIdModel();
        const language = await createLanguageofeduModel(nextId, trimmedName);
        res.status(201).json(language);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Язык обучения '${req.body.name}' уже существует` });
        }
        console.error('Ошибка при создании языка обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateLanguageofedu = async (req, res) => {
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
        const language = await updateLanguageofeduModel(parsedId, trimmedName);
        if (!language) {
            return res.status(404).json({ message: `Язык обучения с ID ${parsedId} не найден` });
        }
        res.json(language);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({ message: `Язык обучения '${req.body.name}' уже существует` });
        }
        console.error('Ошибка при обновлении языка обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteLanguageofedu = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const deleted = await deleteLanguageofeduModel(parsedId);
        if (!deleted) {
            return res.status(404).json({ message: `Язык обучения с ID ${parsedId} не найден` });
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        if (error.code === '23503') {
            return res.status(409).json({
                message: `Нельзя удалить язык обучения с ID ${req.params.id}, так как он используется в других таблицах`
            });
        }
        console.error('Ошибка при удалении языка обучения:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
