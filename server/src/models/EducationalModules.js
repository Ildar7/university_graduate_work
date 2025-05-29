import pool from '../config/db.js';

export const EducationalModulesModel = {
    tableName: 'educational_units',
    fields: {
        unit_id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        module_id: {
            type: 'integer',
            required: true,
            foreignKey: 'educational_modules(module_id)',
        },
        name: {
            type: 'string',
            required: true,
            maxLength: 255,
        },
        sort: {
            type: 'integer',
            required: true,
        },
    },
    validate: (data) => {
        const errors = [];
        if (!data.name) errors.push('Поле name обязательно');
        if (data.name && data.name.length > 255) errors.push('Поле name не должно превышать 255 символов');
        if (!data.module_id) errors.push('Поле module_id обязательно');
        if (data.module_id && isNaN(data.module_id)) errors.push('module_id должен быть числом');
        if (data.sort === undefined) errors.push('Поле sort обязательно');
        if (data.sort !== undefined && (isNaN(data.sort) || data.sort < 0)) errors.push('sort должен быть неотрицательным числом');
        return errors.length > 0 ? errors : null;
    },
    async getEducationalModules() {
        const query = `
            SELECT 
                module_id,
                name,
                short_name,
                basic_education,
                sort,
                study_time_in_credits,
                module_code
            FROM educational_modules
            ORDER BY sort, module_id
        `;
        const result = await pool.query(query);
        return result.rows;
    },
    async getEducationalUnits() {
        const query = `
            SELECT 
                u.unit_id,
                u.module_id,
                u.name,
                u.sort,
                json_build_object(
                    'module_id', m.module_id,
                    'name', m.name,
                    'short_name', m.short_name,
                    'basic_education', m.basic_education,
                    'sort', m.sort,
                    'study_time_in_credits', m.study_time_in_credits,
                    'module_code', m.module_code
                ) AS educational_module
            FROM educational_units u
            JOIN educational_modules m ON u.module_id = m.module_id
            ORDER BY u.sort, u.unit_id
        `;
        const result = await pool.query(query);
        return result.rows;
    },
    async getEducationalModuleById(id) {
        const query = `
            SELECT 
                module_id,
                name,
                short_name,
                basic_education,
                sort,
                study_time_in_credits,
                module_code
            FROM educational_modules
            WHERE module_id = $1
        `;
        const result = await pool.query(query, [id]);
        if (result.rows.length === 0) {
            throw new Error(`Модуль с ID ${id} не найден`);
        }
        return result.rows[0];
    },
    async getEducationalUnitById(unitId, moduleId) {
        const query = `
            SELECT 
                u.unit_id,
                u.module_id,
                u.name,
                u.sort,
                json_build_object(
                    'module_id', m.module_id,
                    'name', m.name,
                    'short_name', m.short_name,
                    'basic_education', m.basic_education,
                    'sort', m.sort,
                    'study_time_in_credits', m.study_time_in_credits,
                    'module_code', m.module_code
                ) AS educational_module
            FROM educational_units u
            JOIN educational_modules m ON u.module_id = m.module_id
            WHERE u.unit_id = $1 AND u.module_id = $2
        `;
        const result = await pool.query(query, [unitId, moduleId]);
        if (result.rows.length === 0) {
            throw new Error(`Юнит с ID ${unitId} не найден в модуле с ID ${moduleId}`);
        }
        return result.rows[0];
    },
    async createEducationalUnit(data) {
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

            const query = `
                INSERT INTO educational_units (module_id, name, sort)
                VALUES ($1, $2, $3)
                RETURNING unit_id
            `;
            const result = await client.query(query, [data.module_id, data.name, data.sort]);
            const unitId = result.rows[0].unit_id;

            await client.query('COMMIT');
            return unitId;
        } catch (error) {
            await client.query('ROLLBACK');
            if (error.code === '23505') {
                throw new Error('Конфликт уникальности: юнит с таким ID уже существует');
            }
            throw error;
        } finally {
            client.release();
        }
    },
    async updateEducationalUnit(unitId, moduleId, data) {
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

            // Проверяем существование юнита и его принадлежность модулю
            const unitCheck = await client.query(
                'SELECT unit_id FROM educational_units WHERE unit_id = $1 AND module_id = $2',
                [unitId, moduleId]
            );
            if (unitCheck.rows.length === 0) {
                throw new Error(`Юнит с ID ${unitId} не найден в модуле с ID ${moduleId}`);
            }

            const fields = ['module_id', 'name', 'sort'].filter(key => data[key] !== undefined);
            const setClause = fields.map((key, i) => `${key} = $${i + 1}`).join(', ');
            const values = fields.map(key => data[key]);
            values.push(unitId);

            const query = `
                UPDATE educational_units
                SET ${setClause}
                WHERE unit_id = $${fields.length + 1}
                RETURNING unit_id
            `;
            const result = await client.query(query, values);
            if (result.rowCount === 0) {
                throw new Error(`Юнит с ID ${unitId} не найден`);
            }

            await client.query('COMMIT');
            return unitId;
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },
    async deleteEducationalUnit(unitId, moduleId) {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const result = await client.query(
                'DELETE FROM educational_units WHERE unit_id = $1 AND module_id = $2 RETURNING unit_id',
                [unitId, moduleId]
            );
            if (result.rowCount === 0) {
                throw new Error(`Юнит с ID ${unitId} не найден в модуле с ID ${moduleId}`);
            }

            await client.query('COMMIT');
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },
};
