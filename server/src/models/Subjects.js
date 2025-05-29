import pool from '../config/db.js';

export const SubjectsModel = {
    tableName: 'subjects',
    fields: {
        subject_id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: 'string',
            required: true,
            maxLength: 255,
        },
        subject_type: {
            type: 'string',
            required: true,
            maxLength: 20,
        },
        module_id: {
            type: 'integer',
            required: true,
            foreignKey: 'educational_modules(module_id)',
        },
        unit_id: {
            type: 'integer',
            foreignKey: 'educational_units(unit_id)',
        },
    },
    validate: (data) => {
        const errors = [];
        if (!data.name) errors.push('Поле name обязательно');
        if (data.name && data.name.length > 255) errors.push('Поле name не должно превышать 255 символов');
        if (!data.module_id) errors.push('Поле module_id обязательно');
        if (data.module_id && isNaN(data.module_id)) errors.push('module_id должен быть числом');
        if (data.unit_id !== null && data.unit_id !== undefined && isNaN(data.unit_id)) errors.push('unit_id должен быть числом или null');
        return errors.length > 0 ? errors : null;
    },
    async getSubjects() {
        const query = `
            SELECT 
                s.subject_id,
                s.name,
                s.subject_type,
                s.module_id,
                s.unit_id,
                json_build_object(
                    'module_id', m.module_id,
                    'name', m.name,
                    'short_name', m.short_name,
                    'basic_education', m.basic_education,
                    'study_time_in_credits', m.study_time_in_credits,
                    'module_code', m.module_code
                ) AS educational_module,
                CASE
                    WHEN s.unit_id IS NOT NULL THEN
                        json_build_object(
                            'unit_id', u.unit_id,
                            'module_id', u.module_id,
                            'name', u.name,
                            'sort', u.sort
                        )
                    ELSE NULL
                END AS educational_modules_unit,
                'Дисциплина' AS subject_type_name
            FROM subjects s
            JOIN educational_modules m ON s.module_id = m.module_id
            LEFT JOIN educational_units u ON s.unit_id = u.unit_id
            ORDER BY s.subject_id
        `;
        const result = await pool.query(query);
        return result.rows;
    },
    async getSubjectById(subjectId) {
        const query = `
            SELECT 
                s.subject_id,
                s.name,
                s.subject_type,
                s.module_id,
                s.unit_id,
                json_build_object(
                    'module_id', m.module_id,
                    'name', m.name,
                    'short_name', m.short_name,
                    'basic_education', m.basic_education,
                    'study_time_in_credits', m.study_time_in_credits,
                    'module_code', m.module_code
                ) AS educational_module,
                CASE
                    WHEN s.unit_id IS NOT NULL THEN
                        json_build_object(
                            'unit_id', u.unit_id,
                            'module_id', u.module_id,
                            'name', u.name,
                            'sort', u.sort
                        )
                    ELSE NULL
                END AS educational_modules_unit,
                'Дисциплина' AS subject_type_name
            FROM subjects s
            JOIN educational_modules m ON s.module_id = m.module_id
            LEFT JOIN educational_units u ON s.unit_id = u.unit_id
            WHERE s.subject_id = $1
        `;
        const result = await pool.query(query, [subjectId]);
        if (result.rows.length === 0) {
            throw new Error(`Дисциплина с ID ${subjectId} не найдена`);
        }
        return result.rows[0];
    },
    async createSubject(data) {
        const errors = this.validate(data);
        if (errors) {
            throw new Error(`Ошибки валидации: ${errors.join('; ')}`);
        }

        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            // Проверяем существование module_id
            const moduleCheck = await client.query('SELECT module_id FROM educational_modules WHERE module_id = $1', [data.module_id]);
            if (moduleCheck.rows.length === 0) {
                throw new Error(`Модуль с ID ${data.module_id} не найден`);
            }

            // Проверяем существование unit_id, если указан
            if (data.unit_id !== null && data.unit_id !== undefined) {
                const unitCheck = await client.query('SELECT unit_id FROM educational_units WHERE unit_id = $1', [data.unit_id]);
                if (unitCheck.rows.length === 0) {
                    throw new Error(`Юнит с ID ${data.unit_id} не найден`);
                }
            }

            const query = `
                INSERT INTO subjects (name, subject_type, module_id, unit_id)
                VALUES ($1, $2, $3, $4)
                RETURNING subject_id
            `;
            const result = await client.query(query, [data.name, 'SUBJECT', data.module_id, data.unit_id || null]);
            const subjectId = result.rows[0].subject_id;

            await client.query('COMMIT');
            return subjectId;
        } catch (error) {
            await client.query('ROLLBACK');
            if (error.code === '23505') {
                throw new Error('Конфликт уникальности: дисциплина с таким ID уже существует');
            }
            if (error.code === '23503') {
                throw new Error('Недопустимое значение для module_id или unit_id');
            }
            throw error;
        } finally {
            client.release();
        }
    },
    async updateSubject(subjectId, data) {
        const errors = this.validate(data);
        if (errors) {
            throw new Error(`Ошибки валидации: ${errors.join('; ')}`);
        }

        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            // Проверяем существование module_id
            const moduleCheck = await client.query('SELECT module_id FROM educational_modules WHERE module_id = $1', [data.module_id]);
            if (moduleCheck.rows.length === 0) {
                throw new Error(`Модуль с ID ${data.module_id} не найден`);
            }

            // Проверяем существование unit_id, если указан
            if (data.unit_id !== null && data.unit_id !== undefined) {
                const unitCheck = await client.query('SELECT unit_id FROM educational_units WHERE unit_id = $1', [data.unit_id]);
                if (unitCheck.rows.length === 0) {
                    throw new Error(`Юнит с ID ${data.unit_id} не найден`);
                }
            }

            // Проверяем существование дисциплины
            const subjectCheck = await client.query('SELECT subject_id FROM subjects WHERE subject_id = $1', [subjectId]);
            if (subjectCheck.rows.length === 0) {
                throw new Error(`Дисциплина с ID ${subjectId} не найдена`);
            }

            const fields = ['name', 'module_id', 'unit_id'].filter(key => data[key] !== undefined);
            const setClause = fields.map((key, i) => `${key} = $${i + 1}`).join(', ');
            const values = fields.map(key => key === 'unit_id' ? (data[key] || null) : data[key]);
            values.push(subjectId);

            const query = `
                UPDATE subjects
                SET ${setClause}
                WHERE subject_id = $${fields.length + 1}
                RETURNING subject_id
            `;
            const result = await client.query(query, values);
            if (result.rowCount === 0) {
                throw new Error(`Дисциплина с ID ${subjectId} не найдена`);
            }

            await client.query('COMMIT');
            return subjectId;
        } catch (error) {
            await client.query('ROLLBACK');
            if (error.code === '23503') {
                throw new Error('Недопустимое значение для module_id или unit_id');
            }
            throw error;
        } finally {
            client.release();
        }
    },
    async deleteSubject(subjectId) {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const result = await client.query(
                'DELETE FROM subjects WHERE subject_id = $1 RETURNING subject_id',
                [subjectId]
            );
            if (result.rowCount === 0) {
                throw new Error(`Дисциплина с ID ${subjectId} не найдена`);
            }

            await client.query('COMMIT');
        } catch (error) {
            await client.query('ROLLBACK');
            if (error.code === '23503') {
                throw new Error('Нельзя удалить дисциплину, так как она связана с другими записями');
            }
            throw error;
        } finally {
            client.release();
        }
    },
};
