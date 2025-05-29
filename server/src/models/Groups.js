// server/src/models/GroupsModel.js
import pool from '../config/db.js';

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
    async createGroup(data) {
        const { qualifications, ...groupData } = data;
        const errors = this.validate(groupData);
        if (errors) {
            throw new Error(`Ошибки валидации: ${errors.join('; ')}`);
        }

        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const fields = Object.keys(groupData).filter(key => groupData[key] !== undefined);
            const values = fields.map(key => groupData[key]);
            const placeholders = fields.map((_, i) => `$${i + 1}`).join(', ');
            const query = `
                INSERT INTO groups (${fields.join(', ')})
                VALUES (${placeholders})
                RETURNING id_group
            `;
            const result = await client.query(query, values);
            const groupId = result.rows[0].id_group;

            if (qualifications && Array.isArray(qualifications) && qualifications.length > 0) {
                const qualValues = qualifications.map(id => `(${groupId}, ${id})`).join(', ');
                await client.query(`
                    INSERT INTO groups_qualifications (id_group, id_qual)
                    VALUES ${qualValues}
                `);
            }

            await client.query('COMMIT');
            return groupId;
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },
    async getGroups() {
        const query = `
            SELECT 
                g.*,
                l.id_languageofedu,
                l.languageofedu,
                s.id_spec,
                s.shifr_spec,
                s.speciality,
                s.level_of_education,
                eb.id_education_bases,
                eb.symbol_code AS eb_symbol_code,
                eb.original_name AS eb_original_name,
                eb.short_name AS eb_short_name,
                json_agg(
                    json_build_object(
                        'id_qual', q.id_qual,
                        'shifr_qual', q.shifr_qual,
                        'qualification', q.qualification,
                        'specialty_id', q.specialty_id,
                        'sort', q.sort,
                        'groups_qualifications', json_build_object(
                            'id', gq.id,
                            'id_group', gq.id_group,
                            'id_qual', gq.id_qual
                        )
                    )
                ) AS qualifications
            FROM groups g
            LEFT JOIN languageofedu l ON g.id_language = l.id_languageofedu
            LEFT JOIN specialty s ON g.id_specialty = s.id_spec
            LEFT JOIN education_bases eb ON g.id_education_base = eb.id_education_bases
            LEFT JOIN groups_qualifications gq ON g.id_group = gq.id_group
            LEFT JOIN qualification q ON gq.id_qual = q.id_qual
            GROUP BY g.id_group, l.id_languageofedu, l.languageofedu, s.id_spec, s.shifr_spec, s.speciality, s.level_of_education, eb.id_education_bases, eb.symbol_code, eb.original_name, eb.short_name
            ORDER BY g.id_group
        `;
        const result = await pool.query(query);
        return result.rows.map(row => ({
            id_group: row.id_group,
            name: row.name,
            id_language: row.id_language,
            enrollment_year: row.enrollment_year,
            id_specialty: row.id_specialty,
            id_education_base: row.id_education_base,
            course: row.course,
            study_duration: row.study_duration,
            is_full_time: row.is_full_time,
            short_name: row.short_name,
            serial_number: row.serial_number,
            code: row.code,
            qualifications: row.qualifications.filter(q => q.id_qual !== null),
            language: row.id_languageofedu ? {
                id_languageofedu: row.id_languageofedu,
                language: row.languageofedu,
                languageofedu: row.languageofedu,
                id_languages: row.id_languageofedu,
                symbol_code: row.languageofedu === 'Русский' ? 'RU' : 'KZ',
                name: row.languageofedu
            } : null,
            specialty: row.id_spec ? {
                id_spec: row.id_spec,
                shifr_spec: row.shifr_spec,
                speciality: row.speciality,
                level_of_education: row.level_of_education
            } : null,
            education_basis: row.id_education_bases ? {
                id_education_bases: row.id_education_bases,
                symbol_code: row.eb_symbol_code,
                original_name: row.eb_original_name,
                short_name: row.eb_short_name
            } : null,
            studentsCount: 0
        }));
    },
    async getGroupById(id) {
        const query = `
            SELECT 
                g.*,
                l.id_languageofedu,
                l.languageofedu,
                s.id_spec,
                s.shifr_spec,
                s.speciality,
                s.level_of_education,
                eb.id_education_bases,
                eb.symbol_code AS eb_symbol_code,
                eb.original_name AS eb_original_name,
                eb.short_name AS eb_short_name,
                json_agg(
                    json_build_object(
                        'id_qual', q.id_qual,
                        'shifr_qual', q.shifr_qual,
                        'qualification', q.qualification,
                        'specialty_id', q.specialty_id,
                        'sort', q.sort,
                        'groups_qualifications', json_build_object(
                            'id', gq.id,
                            'id_group', gq.id_group,
                            'id_qual', gq.id_qual
                        )
                    )
                ) AS qualifications
            FROM groups g
            LEFT JOIN languageofedu l ON g.id_language = l.id_languageofedu
            LEFT JOIN specialty s ON g.id_specialty = s.id_spec
            LEFT JOIN education_bases eb ON g.id_education_base = eb.id_education_bases
            LEFT JOIN groups_qualifications gq ON g.id_group = gq.id_group
            LEFT JOIN qualification q ON gq.id_qual = q.id_qual
            WHERE g.id_group = $1
            GROUP BY g.id_group, l.id_languageofedu, l.languageofedu, s.id_spec, s.shifr_spec, s.speciality, s.level_of_education, eb.id_education_bases, eb.symbol_code, eb.original_name, eb.short_name
        `;
        const result = await pool.query(query, [id]);
        if (result.rows.length === 0) {
            throw new Error(`Группа с ID ${id} не найдена`);
        }
        const row = result.rows[0];
        return {
            id_group: row.id_group,
            name: row.name,
            id_language: row.id_language,
            enrollment_year: row.enrollment_year,
            id_specialty: row.id_specialty,
            id_education_base: row.id_education_base,
            course: row.course,
            study_duration: row.study_duration,
            is_full_time: row.is_full_time,
            short_name: row.short_name,
            serial_number: row.serial_number,
            code: row.code,
            qualifications: row.qualifications.filter(q => q.id_qual !== null),
            language: row.id_languageofedu ? {
                id_languageofedu: row.id_languageofedu,
                language: row.languageofedu,
                languageofedu: row.languageofedu,
                id_languages: row.id_languageofedu,
                symbol_code: row.languageofedu === 'Русский' ? 'RU' : 'KZ',
                name: row.languageofedu
            } : null,
            specialty: row.id_spec ? {
                id_spec: row.id_spec,
                shifr_spec: row.shifr_spec,
                speciality: row.speciality,
                level_of_education: row.level_of_education
            } : null,
            education_basis: row.id_education_bases ? {
                id_education_bases: row.id_education_bases,
                symbol_code: row.eb_symbol_code,
                original_name: row.eb_original_name,
                short_name: row.eb_short_name
            } : null,
            studentsCount: 0
        };
    },
    async updateGroup(id, data) {
        const { qualifications, ...groupData } = data;
        const errors = this.validate({ ...groupData, is_full_time: groupData.is_full_time !== undefined ? groupData.is_full_time : true });
        if (errors) {
            throw new Error(`Ошибки валидации: ${errors.join('; ')}`);
        }

        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const fields = Object.keys(groupData).filter(key => groupData[key] !== undefined);
            if (fields.length > 0) {
                const setClause = fields.map((key, i) => `${key} = $${i + 1}`).join(', ');
                const values = fields.map(key => groupData[key]);
                values.push(id);
                const query = `
                    UPDATE groups
                    SET ${setClause}
                    WHERE id_group = $${fields.length + 1}
                    RETURNING id_group
                `;
                const result = await client.query(query, values);
                if (result.rowCount === 0) {
                    throw new Error(`Группа с ID ${id} не найдена`);
                }
            }

            if (qualifications && Array.isArray(qualifications)) {
                await client.query('DELETE FROM groups_qualifications WHERE id_group = $1', [id]);
                if (qualifications.length > 0) {
                    const qualValues = qualifications.map(id_qual => `(${id}, ${id_qual})`).join(', ');
                    await client.query(`
                        INSERT INTO groups_qualifications (id_group, id_qual)
                        VALUES ${qualValues}
                    `);
                }
            }

            await client.query('COMMIT');
            return id;
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },
    async deleteGroup(id) {
        const result = await pool.query('DELETE FROM groups WHERE id_group = $1 RETURNING id_group', [id]);
        if (result.rowCount === 0) {
            throw new Error(`Группа с ID ${id} не найдена`);
        }
    },
    async attachStudentsToGroup(groupId, studentIds) {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const groupResult = await client.query('SELECT id_group FROM groups WHERE id_group = $1', [groupId]);
            if (groupResult.rows.length === 0) {
                throw new Error(`Группа с ID ${groupId} не найдена`);
            }

            const studentCheck = await client.query(
                'SELECT students_id FROM students WHERE students_id = ANY($1)',
                [studentIds]
            );
            const foundStudentIds = studentCheck.rows.map(row => row.students_id);
            const missingStudents = studentIds.filter(id => !foundStudentIds.includes(id));
            if (missingStudents.length > 0) {
                throw new Error(`Студенты с ID ${missingStudents.join(', ')} не найдены`);
            }

            const values = studentIds.map((_, i) => `($${i + 1}, $${i + 2})`).join(', ');
            const query = `
                UPDATE students
                SET id_group = $1
                WHERE students_id = ANY($2)
                RETURNING students_id
            `;
            const result = await client.query(query, [groupId, studentIds]);

            await client.query('COMMIT');
            return result.rows.map(row => row.students_id);
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },
    async detachStudentsFromGroup(groupId, studentIds) {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');

            const groupResult = await client.query('SELECT id_group FROM groups WHERE id_group = $1', [groupId]);
            if (groupResult.rows.length === 0) {
                throw new Error(`Группа с ID ${groupId} не найдена`);
            }

            const studentCheck = await client.query(
                'SELECT students_id FROM students WHERE students_id = ANY($1) AND id_group = $2',
                [studentIds, groupId]
            );
            const foundStudentIds = studentCheck.rows.map(row => row.students_id);
            const notInGroup = studentIds.filter(id => !foundStudentIds.includes(id));
            if (notInGroup.length > 0) {
                throw new Error(`Студенты с ID ${notInGroup.join(', ')} не принадлежат группе ${groupId}`);
            }

            const query = `
                UPDATE students
                SET id_group = NULL
                WHERE students_id = ANY($1) AND id_group = $2
                RETURNING students_id
            `;
            const result = await client.query(query, [studentIds, groupId]);

            await client.query('COMMIT');
            return result.rows.map(row => row.students_id);
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },
};
