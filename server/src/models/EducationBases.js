import pool from '../config/db.js';

export const getEducationBases = async () => {
    const result = await pool.query('SELECT * FROM education_bases ORDER BY id_education_bases');
    return result.rows;
};
