import pool from '../config/db.js';

export const getGender = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;
    const dataQuery = `
    SELECT * FROM gender
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;
    const countQuery = 'SELECT COUNT(*) FROM gender';
    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);
    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getGenderById = async (id) => {
    const query = 'SELECT * FROM gender WHERE id_gender = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
