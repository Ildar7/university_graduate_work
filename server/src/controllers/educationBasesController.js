import { EducationBasesModel } from '../models/EducationBases.js';

export const getAll = async (req, res) => {
    try {
        const bases = await EducationBasesModel.getAll();
        res.json(bases);
    } catch (error) {
        console.error('Ошибка при получении баз образования:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
