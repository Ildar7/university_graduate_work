import pool from '../config/db.js';

export const TrainingScheduleModel = {
    tableName: 'training_schedule',
    fields: {
        training_schedule_id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        academic_year_from: {
            type: 'integer',
            required: true,
        },
        groups_count: {
            type: 'integer',
            required: true,
        },
    },
    async getAllAvailable() {
        const query = `
            SELECT 
                academic_year_from,
                groups_count
            FROM training_schedule
            ORDER BY academic_year_from
        `;
        const result = await pool.query(query);
        return result.rows;
    },
};
