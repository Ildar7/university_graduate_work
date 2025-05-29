import { EducationalModulesModel } from '../models/EducationalModules.js';

export const getEducationalModules = async (req, res) => {
    try {
        const modules = await EducationalModulesModel.getEducationalModules();
        res.json(modules);
    } catch (error) {
        console.error('Ошибка при получении образовательных модулей:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getEducationalUnits = async (req, res) => {
    try {
        const units = await EducationalModulesModel.getEducationalUnits();
        res.json(units);
    } catch (error) {
        console.error('Ошибка при получении образовательных юнитов:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getEducationalModuleById = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId) || parsedId < 1) {
            return res.status(400).json({ message: 'ID модуля должен быть положительным числом' });
        }
        const module = await EducationalModulesModel.getEducationalModuleById(parsedId);
        res.json(module);
    } catch (error) {
        console.error('Ошибка при получении модуля:', error);
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const getEducationalUnitById = async (req, res) => {
    try {
        const { moduleId, unitId } = req.params;
        const parsedModuleId = parseInt(moduleId, 10);
        const parsedUnitId = parseInt(unitId, 10);
        if (isNaN(parsedModuleId) || parsedModuleId < 1) {
            return res.status(400).json({ message: 'ID модуля должен быть положительным числом' });
        }
        if (isNaN(parsedUnitId) || parsedUnitId < 1) {
            return res.status(400).json({ message: 'ID юнита должен быть положительным числом' });
        }
        const unit = await EducationalModulesModel.getEducationalUnitById(parsedUnitId, parsedModuleId);
        res.json(unit);
    } catch (error) {
        console.error('Ошибка при получении юнита:', error);
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const createEducationalUnit = async (req, res) => {
    try {
        const { moduleId } = req.params;
        const parsedModuleId = parseInt(moduleId, 10);
        if (isNaN(parsedModuleId) || parsedModuleId < 1) {
            return res.status(400).json({ message: 'ID модуля должен быть положительным числом' });
        }
        const data = req.body;
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: 'Тело запроса не может быть пустым' });
        }
        if (data.module_id && data.module_id !== parsedModuleId) {
            return res.status(400).json({ message: 'module_id в теле запроса должен совпадать с moduleId в URL' });
        }
        const unitData = { ...data, module_id: parsedModuleId };
        const unitId = await EducationalModulesModel.createEducationalUnit(unitData);
        const unit = await EducationalModulesModel.getEducationalUnitById(unitId, parsedModuleId);
        res.status(201).json(unit);
    } catch (error) {
        console.error('Ошибка при создании юнита:', error);
        if (error.message.includes('Ошибки валидации')) {
            return res.status(400).json({ message: error.message });
        }
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        if (error.code === '23503') {
            return res.status(400).json({ message: 'Недопустимое значение для module_id' });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const updateEducationalUnit = async (req, res) => {
    try {
        const { moduleId, unitId } = req.params;
        const parsedModuleId = parseInt(moduleId, 10);
        const parsedUnitId = parseInt(unitId, 10);
        if (isNaN(parsedModuleId) || parsedModuleId < 1) {
            return res.status(400).json({ message: 'ID модуля должен быть положительным числом' });
        }
        if (isNaN(parsedUnitId) || parsedUnitId < 1) {
            return res.status(400).json({ message: 'ID юнита должен быть положительным числом' });
        }
        const data = req.body;
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: 'Тело запроса не может быть пустым' });
        }
        if (data.module_id && data.module_id !== parsedModuleId) {
            return res.status(400).json({ message: 'module_id в теле запроса должен совпадать с moduleId в URL' });
        }
        if (data.unit_id && data.unit_id !== parsedUnitId) {
            return res.status(400).json({ message: 'unit_id в теле запроса должен совпадать с unitId в URL' });
        }
        const unitData = { ...data, module_id: parsedModuleId };
        await EducationalModulesModel.updateEducationalUnit(parsedUnitId, parsedModuleId, unitData);
        const unit = await EducationalModulesModel.getEducationalUnitById(parsedUnitId, parsedModuleId);
        res.json(unit);
    } catch (error) {
        console.error('Ошибка при обновлении юнита:', error);
        if (error.message.includes('Ошибки валидации')) {
            return res.status(400).json({ message: error.message });
        }
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        if (error.code === '23503') {
            return res.status(400).json({ message: 'Недопустимое значение для module_id' });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};

export const deleteEducationalUnit = async (req, res) => {
    try {
        const { moduleId, unitId } = req.params;
        const parsedModuleId = parseInt(moduleId, 10);
        const parsedUnitId = parseInt(unitId, 10);
        if (isNaN(parsedModuleId) || parsedModuleId < 1) {
            return res.status(400).json({ message: 'ID модуля должен быть положительным числом' });
        }
        if (isNaN(parsedUnitId) || parsedUnitId < 1) {
            return res.status(400).json({ message: 'ID юнита должен быть положительным числом' });
        }
        await EducationalModulesModel.deleteEducationalUnit(parsedUnitId, parsedModuleId);
        res.status(204).send();
    } catch (error) {
        console.error('Ошибка при удалении юнита:', error);
        if (error.message.includes('не найден')) {
            return res.status(404).json({ message: error.message });
        }
        if (error.code === '23503') {
            return res.status(400).json({ message: 'Нельзя удалить юнит, так как он связан с другими записями' });
        }
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
