import { getComesfrom as getComesfromModel, getComesfromById as getComesfromByIdModel } from '../models/Comesfrom.js';

export const getComesfrom = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_comesfrom', order = 'asc' } = req.query;

        // Валидация параметров
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
        console.error('Ошибка при получении типов зачисления:', error);
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
            return res.status(404).json({ message: `Источник прибытия с ID ${parsedId} не найден` });
        }
        res.json(item);
    } catch (error) {
        console.error('Ошибка при получении источника прибытия по ID:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
