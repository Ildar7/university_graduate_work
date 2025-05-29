import pool from '../config/db.js';

export const WorkingCurriculumModel = {
    tableName: 'working_curriculum',
    fields: {
        working_curriculum_id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        standard_curriculum_id: {
            type: 'integer',
            required: true,
            foreignKey: 'standard_curricula(standard_curriculum_id)',
        },
        education_base_id: {
            type: 'integer',
            required: true,
            foreignKey: 'education_bases(id_education_bases)',
        },
        is_full_time_education: {
            type: 'boolean',
            required: true,
        },
        approval_date: {
            type: 'date',
            required: true,
        },
        version: {
            type: 'integer',
            required: true,
        },
        academic_year_from: {
            type: 'integer',
            required: true,
        },
        title: {
            type: 'string',
            required: true,
        },
        is_active: {
            type: 'boolean',
            required: true,
        },
        academic_year_to: {
            type: 'integer',
            required: true,
        },
    },
    async getAllPaginated(page, limit, sort, order, academicYearFrom) {
        const offset = (page - 1) * limit;
        let query = `
            SELECT 
                wc.working_curriculum_id,
                wc.standard_curriculum_id,
                wc.education_base_id,
                wc.is_full_time_education,
                wc.approval_date,
                wc.version,
                wc.academic_year_from,
                wc.title,
                wc.is_active,
                wc.academic_year_to,
                json_build_object(
                    'standard_curriculum_id', sc.standard_curriculum_id,
                    'speciality_id', sc.speciality_id,
                    'date_of_order', sc.date_of_order,
                    'sort', sc.sort,
                    'file_id', sc.file_id,
                    'specialty', json_build_object(
                        'id_spec', s.id_spec,
                        'shifr_spec', s.shifr_spec,
                        'speciality', s.speciality,
                        'level_of_education', s.level_of_education
                    )
                ) AS standard_curricula,
                json_build_object(
                    'id_education_bases', eb.id_education_bases,
                    'symbol_code', eb.symbol_code,
                    'original_name', eb.original_name,
                    'short_name', eb.short_name
                ) AS education_basis
            FROM working_curriculum wc
            JOIN standard_curricula sc ON wc.standard_curriculum_id = sc.standard_curriculum_id
            JOIN specialty s ON sc.speciality_id = s.id_spec
            JOIN education_bases eb ON wc.education_base_id = eb.id_education_bases
        `;
        const values = [limit, offset];
        if (academicYearFrom !== undefined) {
            query += `
                WHERE wc.academic_year_from = $${values.length + 1}
            `;
            values.push(academicYearFrom);
        }
        query += `
            ORDER BY wc.${sort} ${order}
            LIMIT $1 OFFSET $2
        `;
        const baseCountQuery = `
            SELECT COUNT(*) AS total_records
            FROM working_curriculum
        `;
        const modifiedCountQuery = academicYearFrom !== undefined
            ? baseCountQuery + ` WHERE academic_year_from = $1`
            : baseCountQuery;
        const countValues = academicYearFrom !== undefined ? [academicYearFrom] : [];

        const result = await pool.query(query, values);
        const countResult = await pool.query(modifiedCountQuery, countValues);
        const totalRecords = parseInt(countResult.rows[0].total_records, 10);
        const totalPages = Math.ceil(totalRecords / limit);
        return {
            data: result.rows,
            pagination: {
                total_records: totalRecords,
                current_page: page,
                total_pages: totalPages,
                next_page: page < totalPages ? page + 1 : null,
                prev_page: page > 1 ? page - 1 : null,
            },
        };
    },
    async create(data) {
        const academic_year_to = data.academic_year_from + 1;
        const query = `
            INSERT INTO public.working_curriculum (
                standard_curriculum_id,
                education_base_id,
                is_full_time_education,
                approval_date,
                version,
                academic_year_from,
                title,
                is_active,
                academic_year_to
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *
        `;
        const values = [
            data.standard_curriculum_id,
            data.education_base_id,
            data.is_full_time_education,
            data.approval_date,
            data.version,
            data.academic_year_from,
            data.title,
            data.is_active,
            academic_year_to,
        ];
        const result = await pool.query(query, values);
        return result.rows[0];
    },
    async getById(id) {
        const query = `
            SELECT 
                wc.working_curriculum_id,
                wc.standard_curriculum_id,
                wc.education_base_id,
                wc.is_full_time_education,
                wc.approval_date,
                wc.version,
                wc.academic_year_from,
                wc.title,
                wc.is_active,
                wc.academic_year_to,
                json_build_object(
                    'standard_curriculum_id', sc.standard_curriculum_id,
                    'speciality_id', sc.speciality_id,
                    'date_of_order', sc.date_of_order,
                    'sort', sc.sort,
                    'file_id', sc.file_id,
                    'specialty', json_build_object(
                        'id_spec', s.id_spec,
                        'shifr_spec', s.shifr_spec,
                        'speciality', s.speciality,
                        'level_of_education', s.level_of_education
                    )
                ) AS standard_curricula,
                json_build_object(
                    'id_education_bases', eb.id_education_bases,
                    'symbol_code', eb.symbol_code,
                    'original_name', eb.original_name,
                    'short_name', eb.short_name
                ) AS education_basis
            FROM working_curriculum wc
            JOIN standard_curricula sc ON wc.standard_curriculum_id = sc.standard_curriculum_id
            JOIN specialty s ON sc.speciality_id = s.id_spec
            JOIN education_bases eb ON wc.education_base_id = eb.id_education_bases
            WHERE wc.working_curriculum_id = $1
        `;
        const result = await pool.query(query, [id]);
        if (result.rows.length === 0) {
            throw new Error(`Рабочий учебный план с ID ${id} не найден`);
        }
        return result.rows[0];
    },
    async update(id, data) {
        const academic_year_to = data.academic_year_from ? data.academic_year_from + 1 : undefined;
        const fieldsToUpdate = {
            standard_curriculum_id: data.standard_curriculum_id,
            education_base_id: data.education_base_id,
            is_full_time_education: data.is_full_time_education,
            approval_date: data.approval_date,
            version: data.version,
            academic_year_from: data.academic_year_from,
            title: data.title,
            is_active: data.is_active,
            academic_year_to: academic_year_to,
        };
        const updates = [];
        const values = [];
        let index = 1;

        for (const [key, value] of Object.entries(fieldsToUpdate)) {
            if (value !== undefined) {
                updates.push(`${key} = $${index}`);
                values.push(value);
                index++;
            }
        }

        if (updates.length === 0) {
            throw new Error('Нет данных для обновления');
        }

        values.push(id);
        const query = `
            UPDATE public.working_curriculum
            SET ${updates.join(', ')}
            WHERE working_curriculum_id = $${index}
            RETURNING *
        `;
        const result = await pool.query(query, values);
        if (result.rowCount === 0) {
            throw new Error(`Рабочий учебный план с ID ${id} не найден`);
        }
        return result.rows[0];
    },
    async delete(id) {
        const query = `
            DELETE FROM public.working_curriculum
            WHERE working_curriculum_id = $1
            RETURNING *
        `;
        const result = await pool.query(query, [id]);
        if (result.rowCount === 0) {
            throw new Error(`Рабочий учебный план с ID ${id} не найден`);
        }
        return result.rows[0];
    },
};
