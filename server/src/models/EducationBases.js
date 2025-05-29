import pool from '../config/db.js';

export const EducationBasesModel = {
    tableName: 'education_bases',
    fields: {
        id_education_bases: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        symbol_code: {
            type: 'string',
            required: true,
        },
        original_name: {
            type: 'string',
            required: true,
        },
        short_name: {
            type: 'string',
            required: true,
        },
    },
    async getAll() {
        const query = `
            SELECT 
                id_education_bases,
                symbol_code,
                original_name,
                short_name
            FROM education_bases
            ORDER BY id_education_bases
        `;
        const result = await pool.query(query);
        return result.rows;
    },
};
