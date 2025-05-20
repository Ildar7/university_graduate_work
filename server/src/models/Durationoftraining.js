import pool from '../config/db.js';

export const getDurationoftrainings = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;
    const dataQuery = `
    SELECT * FROM durationoftraining
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;
    const countQuery = 'SELECT COUNT(*) FROM durationoftraining';
    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);
    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getDurationoftrainingById = async (id) => {
    const query = 'SELECT * FROM durationoftraining WHERE id_durationoftraining = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
