import { GroupsModel } from '../models/Groups.js';

export const getGroups = async (req, res) => {
    try {
        const formattedData = await GroupsModel.getGroups();
        res.json({ data: formattedData, pagination: null });
    } catch (error) {
        console.error('Ошибка при получении групп:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getGroupById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID группы должен быть положительным числом' });
        }
        const group = await GroupsModel.getGroupById(parsedId);
        res.json(group);
    } catch (error) {
        console.error('Ошибка при получении группы:', error);
        if (error.message.includes('не найдена')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createGroup = async (req, res) => {
    try {
        const data = req.body;
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: 'Тело запроса не может быть пустым' });
        }
        const groupId = await GroupsModel.createGroup(data);
        const group = await GroupsModel.getGroupById(groupId);
        res.status(201).json(group);
    } catch (error) {
        console.error('Ошибка при создании группы:', error);
        if (error.message.includes('Ошибки валидации')) {
            return res.status(400).json({ message: error.message });
        }
        if (error.code === '23505') {
            return res.status(400).json({ message: 'Группа с таким именем или кодом уже существует' });
        }
        if (error.code === '23503') {
            return res.status(400).json({ message: 'Недопустимое значение для languageofedu, specialty или education_bases' });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID группы должен быть положительным числом' });
        }
        const data = req.body;
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: 'Тело запроса не может быть пустым' });
        }
        await GroupsModel.updateGroup(parsedId, data);
        const group = await GroupsModel.getGroupById(parsedId);
        res.json(group);
    } catch (error) {
        console.error('Ошибка при обновлении группы:', error);
        if (error.message.includes('не найдена')) {
            return res.status(404).json({ message: error.message });
        }
        if (error.message.includes('Ошибки валидации')) {
            return res.status(400).json({ message: error.message });
        }
        if (error.code === '23505') {
            return res.status(400).json({ message: 'Группа с таким именем или кодом уже существует' });
        }
        if (error.code === '23503') {
            return res.status(400).json({ message: 'Недопустимое значение для languageofedu, specialty или education_bases' });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID группы должен быть положительным числом' });
        }
        await GroupsModel.deleteGroup(parsedId);
        res.status(204).send();
    } catch (error) {
        console.error('Ошибка при удалении группы:', error);
        if (error.message.includes('не найдена')) {
            return res.status(404).json({ message: error.message });
        }
        if (error.code === '23503') {
            return res.status(400).json({ message: 'Нельзя удалить группу, так как она связана с другими записями' });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const attachStudents = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID группы должен быть положительным числом' });
        }
        const { students } = req.body;
        if (!students || !Array.isArray(students) || students.length === 0) {
            return res.status(400).json({ message: 'Поле students должно быть непустым массивом' });
        }
        if (students.some(id => !Number.isInteger(id) || id < 1)) {
            return res.status(400).json({ message: 'Все ID студентов должны быть положительными целыми числами' });
        }
        const attachedStudentIds = await GroupsModel.attachStudentsToGroup(parsedId, students);
        res.json({ message: `Студенты с ID ${attachedStudentIds.join(', ')} успешно прикреплены к группе ${parsedId}` });
    } catch (error) {
        console.error('Ошибка при прикреплении студентов:', error);
        if (error.message.includes('не найдена') || error.message.includes('не найдены')) {
            return res.status(404).json({ message: error.message });
        }
        if (error.code === '23503') {
            return res.status(400).json({ message: 'Недопустимое значение для группы или студентов' });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const detachStudents = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID группы должен быть положительным числом' });
        }
        const { students } = req.body;
        if (!students || !Array.isArray(students) || students.length === 0) {
            return res.status(400).json({ message: 'Поле students должно быть непустым массивом' });
        }
        if (students.some(id => !Number.isInteger(id) || id < 1)) {
            return res.status(400).json({ message: 'Все ID студентов должны быть положительными целыми числами' });
        }
        const detachedStudentIds = await GroupsModel.detachStudentsFromGroup(parsedId, students);
        res.json({ message: `Студенты с ID ${detachedStudentIds.join(', ')} успешно откреплены от группы ${parsedId}` });
    } catch (error) {
        console.error('Ошибка при откреплении студентов:', error);
        if (error.message.includes('не найдена') || error.message.includes('не принадлежат')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
