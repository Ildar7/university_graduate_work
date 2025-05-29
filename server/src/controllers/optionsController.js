import { OptionsModel } from '../models/Options.js';

export const getOptions = async (req, res) => {
    try {
        const options = await OptionsModel.getOptions();
        res.json(options);
    } catch (error) {
        console.error('Ошибка при получении опций:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
