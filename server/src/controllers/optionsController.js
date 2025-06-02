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

export const updateOptions = async (req, res) => {
    try {
        const updates = req.body;
        if (!updates || Object.keys(updates).length === 0) {
            return res.status(400).json({ message: 'Не предоставлены данные для обновления' });
        }

        const updatePromises = Object.entries(updates).map(async ([optionId, newValue]) => {
            const id = parseInt(optionId, 10);
            if (isNaN(id)) {
                throw new Error(`Неверный option_id: ${optionId}`);
            }

            const existingOption = await OptionsModel.getOptionById(id);
            if (!existingOption) {
                throw new Error(`Опция с id ${id} не найдена`);
            }

            // Приводим значение к строке, так как в схеме option_value — строка
            const validatedValue = String(newValue);

            return OptionsModel.updateOption(id, validatedValue);
        });

        await Promise.all(updatePromises);
        const updatedOptions = await OptionsModel.getOptions();
        res.json(updatedOptions);
    } catch (error) {
        console.error('Ошибка при обновлении опций:', error);
        res.status(400).json({ message: error.message || 'Ошибка сервера' });
    }
};
