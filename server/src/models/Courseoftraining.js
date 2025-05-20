import pool from '../config/db.js';

export const getCourseoftrainings = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;
    const dataQuery = `
    SELECT * FROM courseoftraining
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;
    const countQuery = 'SELECT COUNT(*) FROM courseoftraining';
    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);
    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getCourseoftrainingById = async (id) => {
    const query = 'SELECT * FROM courseoftraining WHERE id_courseoftraining = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
