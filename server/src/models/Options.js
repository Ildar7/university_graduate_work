import pool from '../config/db.js';

export const OptionsModel = {
    tableName: 'options',
    fields: {
        option_id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        option_name: {
            type: 'string',
            required: true,
        },
        option_type: {
            type: 'string',
            required: true,
        },
        option_value: {
            type: 'string',
            required: true,
        },
        option_group: {
            type: 'string',
            required: true,
        },
        option_key: {
            type: 'string',
            required: true,
            unique: true,
        },
    },
    async getOptions() {
        const query = `
            SELECT 
                option_id,
                option_name,
                option_type,
                option_value,
                option_group,
                option_key
            FROM options
            ORDER BY option_id
        `;
        const result = await pool.query(query);
        return result.rows;
    },

    async getOptionById(optionId) {
        const query = `
            SELECT 
                option_id,
                option_name,
                option_type,
                option_value,
                option_group,
                option_key
            FROM options
            WHERE option_id = $1
        `;
        const result = await pool.query(query, [optionId]);
        return result.rows[0];
    },

    async updateOption(optionId, newValue) {
        const query = `
            UPDATE options
            SET option_value = $1
            WHERE option_id = $2
            RETURNING *
        `;
        const result = await pool.query(query, [newValue, optionId]);
        return result.rows[0];
    },
};
