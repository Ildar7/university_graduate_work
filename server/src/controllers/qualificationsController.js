import {
    getQualifications as getQualificationsModel,
    getQualificationById as getQualificationByIdModel,
    createQualification as createQualificationModel,
    updateQualification as updateQualificationModel,
    deleteQualification as deleteQualificationModel,
    getNextQualificationId as getNextQualificationIdModel
} from '../models/Qualification.js';

export const getQualifications = async (req, res) => {
    try {
        const { page = 1, limit = 50, sort = 'id_qual', order = 'asc' } = req.query;
        const validSortFields = ['id_qual', 'qualification', 'shifr_qual', 'specialty_id', 'sort'];
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
        const { data, total } = await getQualificationsModel({
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
        console.error('Ошибка при получении квалификаций:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getQualificationById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const item = await getQualificationByIdModel(parsedId);
        if (!item) {
            return res.status(404).json({ message: `Квалификация с ID ${parsedId} не найдена` });
        }
        res.json(item);
    } catch (error) {
        console.error('Ошибка при получении квалификации по ID:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createQualification = async (req, res) => {
    try {
        const { name, code, specialtiesId, sort } = req.body;
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
        if (specialtiesId !== undefined && (isNaN(parseInt(specialtiesId)) || parseInt(specialtiesId) < 1)) {
            return res.status(400).json({ message: 'Поле specialtiesId должно быть положительным числом или null' });
        }
        if (sort !== undefined && (isNaN(parseInt(sort)) || parseInt(sort) < 0)) {
            return res.status(400).json({ message: 'Поле sort должно быть неотрицательным числом' });
        }
        const trimmedName = name.trim();
        const trimmedCode = code.trim();
        const parsedSpecialtyId = specialtiesId ? parseInt(specialtiesId) : null;
        const parsedSort = sort !== undefined ? parseInt(sort) : null;
        const nextId = await getNextQualificationIdModel();
        const qualification = await createQualificationModel(nextId, trimmedName, trimmedCode, parsedSpecialtyId, parsedSort);
        res.status(201).json(qualification);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({
                message: `Квалификация '${req.body.name}' или код '${req.body.code}' уже существует`
            });
        }
        if (error.code === '23503') {
            return res.status(400).json({
                message: `Специальность с ID ${req.body.specialtiesId} не существует`
            });
        }
        console.error('Ошибка при создании квалификации:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateQualification = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, code, specialtiesId, sort } = req.body;
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
        if (specialtiesId !== undefined && (isNaN(parseInt(specialtiesId)) || parseInt(specialtiesId) < 1)) {
            return res.status(400).json({ message: 'Поле specialtiesId должно быть положительным числом или null' });
        }
        if (sort !== undefined && (isNaN(parseInt(sort)) || parseInt(sort) < 0)) {
            return res.status(400).json({ message: 'Поле sort должно быть неотрицательным числом' });
        }
        const trimmedName = name.trim();
        const trimmedCode = code.trim();
        const parsedSpecialtyId = specialtiesId ? parseInt(specialtiesId) : null;
        const parsedSort = sort !== undefined ? parseInt(sort) : null;
        const qualification = await updateQualificationModel(parsedId, trimmedName, trimmedCode, parsedSpecialtyId, parsedSort);
        if (!qualification) {
            return res.status(404).json({ message: `Квалификация с ID ${parsedId} не найдена` });
        }
        res.json(qualification);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            return res.status(409).json({
                message: `Квалификация '${req.body.name}' или код '${req.body.code}' уже существует`
            });
        }
        if (error.code === '23503') {
            return res.status(400).json({
                message: `Специальность с ID ${req.body.specialtiesId} не существует`
            });
        }
        console.error('Ошибка при обновлении квалификации:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteQualification = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID должен быть положительным числом' });
        }
        const deleted = await deleteQualificationModel(parsedId);
        if (!deleted) {
            return res.status(404).json({ message: `Квалификация с ID ${parsedId} не найдена` });
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        if (error.code === '23503') {
            return res.status(409).json({
                message: `Нельзя удалить квалификацию с ID ${req.params.id}, так как она используется в других таблицах`
            });
        }
        console.error('Ошибка при удалении квалификации:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
