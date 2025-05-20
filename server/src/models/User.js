export const UserModel = {
    tableName: 'users',
    fields: {
        user_id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        login: {
            type: 'string',
            required: true,
            unique: true,
            maxLength: 50,
        },
        email: {
            type: 'string',
            nullable: true,
            maxLength: 100,
        },
        first_name: {
            type: 'string',
            required: true,
            maxLength: 50,
        },
        last_name: {
            type: 'string',
            required: true,
            maxLength: 50,
        },
        patronymic: {
            type: 'string',
            nullable: true,
            maxLength: 50,
        },
        password: {
            type: 'string',
            required: true,
            maxLength: 255,
        },
        created_at: {
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
        },
        updated_at: {
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
        },
    },
    validate: (data) => {
        const errors = [];
        if (!data.login) errors.push('Логин обязателен');
        if (data.login && data.login.length > 50) errors.push('Логин не должен превышать 50 символов');
        if (!data.first_name) errors.push('Имя обязательно');
        if (data.first_name && data.first_name.length > 50) errors.push('Имя не должно превышать 50 символов');
        if (!data.last_name) errors.push('Фамилия обязательна');
        if (data.last_name && data.last_name.length > 50) errors.push('Фамилия не должна превышать 50 символов');
        if (!data.password) errors.push('Пароль обязателен');
        if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Неверный формат email');
        if (data.email && data.email.length > 100) errors.push('Email не должен превышать 100 символов');
        if (data.patronymic && data.patronymic.length > 50) errors.push('Отчество не должно превышать 50 символов');
        return errors.length > 0 ? errors : null;
    },
};
