import pool from '../config/db.js';

export const SubjectScheduleModel = {
    tableName: 'subject_schedule',
    fields: {
        year: {
            type: 'integer',
            primaryKey: true,
        },
    },
    async getAvailableYears() {
        const query = `
            SELECT year
            FROM subject_schedule
            ORDER BY year
        `;
        const result = await pool.query(query);
        return result.rows.map(row => row.year);
    },
};
