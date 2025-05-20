import {
    getSpecialties as getSpecialtiesModel,
    getSpecialtyById as getSpecialtyByIdModel,
    createSpecialty as createSpecialtyModel,
    updateSpecialty as updateSpecialtyModel,
    deleteSpecialty as deleteSpecialtyModel,
    getNextSpecialtyId as getNextSpecialtyIdModel
} from '../models/Specialty.js';

export const getSpecialties = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_spec', order = 'asc' } = req.query;
        const validSortFields = ['id_spec', 'speciality'];
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
        console.error('Ошибка при получении специальностей:', error);
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
            return res.status(404).json({ message: `Специальность с ID ${parsedId} не найдена` });
        }
        res.json(item);
    } catch (error) {
        console.error('Ошибка при получении специальности по ID:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createSpecialty = async (req, res) => {
    try {
        const { name, code } = req.body;
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: 'Поле name обязательно и должно быть непустой строкой' });
        }
        if (!code || typeof code !== 'string' || code.trim() === '') {
            return res.status(400).json({ message: 'Поле code обязательно и должно быть непустой строкой' });
        }
        if (name.trim().length > 255) {
            return res.status(400).json({ message: 'Поле name не должно превышать 255 символов' });
        }
        if (code.trim().length > 20) {
            return res.status(400).json({ message: 'Поле code не должно превышать 20 символов' });
        }
        const trimmedName = name.trim();
        const trimmedCode = code.trim();
        const nextId = await getNextSpecialtyIdModel();
        const specialty = await createSpecialtyModel(nextId, trimmedName, trimmedCode);
        res.status(201).json(specialty);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({
                message: `Специальность '${req.body.name}' или код '${req.body.code}' уже существует`
            });
        }
        console.error('Ошибка при создании специальности:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateSpecialty = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, code } = req.body;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ message: 'Поле name обязательно и должно быть непустой строкой' });
        }
        if (!code || typeof code !== 'string' || code.trim() === '') {
            return res.status(400).json({ message: 'Поле code обязательно и должно быть непустой строкой' });
        }
        if (name.trim().length > 255) {
            return res.status(400).json({ message: 'Поле name не должно превышать 255 символов' });
        }
        if (code.trim().length > 20) {
            return res.status(400).json({ message: 'Поле code не должно превышать 20 символов' });
        }
        const trimmedName = name.trim();
        const trimmedCode = code.trim();
        const specialty = await updateSpecialtyModel(parsedId, trimmedName, trimmedCode);
        if (!specialty) {
            return res.status(404).json({ message: `Специальность с ID ${parsedId} не найдена` });
        }
        res.json(specialty);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({
                message: `Специальность '${req.body.name}' или код '${req.body.code}' уже существует`
            });
        }
        console.error('Ошибка при обновлении специальности:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteSpecialty = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const deleted = await deleteSpecialtyModel(parsedId);
        if (!deleted) {
            return res.status(404).json({ message: `Специальность с ID ${parsedId} не найдена` });
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        if (error.code === '23503') {
            return res.status(409).json({
                message: `Нельзя удалить специальность с ID ${req.params.id}, так как она используется в других таблицах`
            });
        }
        console.error('Ошибка при удалении специальности:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
