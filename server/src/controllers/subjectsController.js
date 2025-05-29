import { SubjectsModel } from '../models/Subjects.js';

export const getSubjects = async (req, res) => {
    try {
        const subjects = await SubjectsModel.getSubjects();
        res.json({ data: subjects });
    } catch (error) {
        console.error('Ошибка при получении дисциплин:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getSubjectById = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const parsedId = parseInt(subjectId, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID дисциплины должен быть положительным числом' });
        }
        const subject = await SubjectsModel.getSubjectById(parsedId);
        res.json(subject);
    } catch (error) {
        console.error('Ошибка при получении дисциплины:', error);
        if (error.message.includes('не найдена')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createSubject = async (req, res) => {
    try {
        const data = req.body;
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: 'Тело запроса не может быть пустым' });
        }
        const subjectData = { ...data, subject_type: 'SUBJECT' };
        const subjectId = await SubjectsModel.createSubject(subjectData);
        const subject = await SubjectsModel.getSubjectById(subjectId);
        res.status(201).json(subject);
    } catch (error) {
        console.error('Ошибка при создании дисциплины:', error);
        if (error.message.includes('Ошибки валидации')) {
            return res.status(400).json({ message: error.message });
        }
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        if (error.code === '23503' || error.code === '23505') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateSubject = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const parsedId = parseInt(subjectId, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID дисциплины должен быть положительным числом' });
        }
        const data = req.body;
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: 'Тело запроса не может быть пустым' });
        }
        await SubjectsModel.updateSubject(parsedId, data);
        const subject = await SubjectsModel.getSubjectById(parsedId);
        res.json(subject);
    } catch (error) {
        console.error('Ошибка при обновлении дисциплины:', error);
        if (error.message.includes('Ошибки валидации')) {
            return res.status(400).json({ message: error.message });
        }
        if (error.message.includes('не найдена')) {
            return res.status(404).json({ message: error.message });
        }
        if (error.code === '23503') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteSubject = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const parsedId = parseInt(subjectId, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID дисциплины должен быть положительным числом' });
        }
        await SubjectsModel.deleteSubject(parsedId);
        res.status(204).send();
    } catch (error) {
        console.error('Ошибка при удалении дисциплины:', error);
        if (error.message.includes('не найдена')) {
            return res.status(404).json({ message: error.message });
        }
        if (error.code === '23503') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
