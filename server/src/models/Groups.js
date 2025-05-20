export const GroupsModel = {
    tableName: 'groups',
    fields: {
        id_group: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: 'string',
            required: true,
            maxLength: 50,
        },
        id_language: {
            type: 'integer',
            nullable: true,
            foreignKey: 'languageofedu(id_languageofedu)',
        },
        enrollment_year: {
            type: 'integer',
            required: true,
        },
        id_specialty: {
            type: 'integer',
            nullable: true,
            foreignKey: 'specialty(id_spec)',
        },
        id_education_base: {
            type: 'integer',
            nullable: true,
        },
        course: {
            type: 'integer',
            required: true,
        },
        study_duration: {
            type: 'integer',
            required: true,
        },
        is_full_time: {
            type: 'boolean',
            required: true,
        },
        short_name: {
            type: 'string',
            nullable: true,
            maxLength: 10,
        },
        serial_number: {
            type: 'integer',
            nullable: true,
        },
        code: {
            type: 'string',
            nullable: true,
            maxLength: 20,
        },
    },
    validate: (data) => {
        const errors = [];
        if (!data.name) errors.push('Поле name обязательно');
        if (data.name && data.name.length > 50) errors.push('Поле name не должно превышать 50 символов');
        if (!data.enrollment_year) errors.push('Поле enrollment_year обязательно');
        if (data.enrollment_year && isNaN(data.enrollment_year)) errors.push('enrollment_year должен быть числом');
        if (data.id_language && isNaN(data.id_language)) errors.push('id_language должен быть числом');
        if (data.id_specialty && isNaN(data.id_specialty)) errors.push('id_specialty должен быть числом');
        if (data.id_education_base && isNaN(data.id_education_base)) errors.push('id_education_base должен быть числом');
        if (!data.course) errors.push('Поле course обязательно');
        if (data.course && isNaN(data.course)) errors.push('course должен быть числом');
        if (!data.study_duration) errors.push('Поле study_duration обязательно');
        if (data.study_duration && isNaN(data.study_duration)) errors.push('study_duration должен быть числом');
        if (data.is_full_time === undefined) errors.push('Поле is_full_time обязательно');
        if (data.is_full_time !== undefined && typeof data.is_full_time !== 'boolean') errors.push('is_full_time должен быть булевым');
        if (data.short_name && data.short_name.length > 10) errors.push('Поле short_name не должно превышать 10 символов');
        if (data.serial_number && isNaN(data.serial_number)) errors.push('serial_number должен быть числом');
        if (data.code && data.code.length > 20) errors.push('Поле code не должно превышать 20 символов');
        return errors.length > 0 ? errors : null;
    },
};
