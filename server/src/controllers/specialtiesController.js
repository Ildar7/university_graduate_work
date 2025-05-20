import { getSpecialties as getSpecialtiesModel, getSpecialtyById as getSpecialtyByIdModel } from '../models/Specialty.js';

export const getSpecialties = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_spec', order = 'asc' } = req.query;
        const validSortFields = ['id_spec'];
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
        const { data, total } = await getSpecialtiesModel({
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
        console.error(`Ошибка при получении специальностей:`, error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getSpecialtyById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const item = await getSpecialtyByIdModel(parsedId);
        if (!item) {
            return res.status(404).json({ message: `Запись с ID ${parsedId} не найдена` });
        }
        res.json(item);
    } catch (error) {
        console.error(`Ошибка при получении специальности по ID:`, error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
