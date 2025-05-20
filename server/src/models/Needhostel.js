import pool from '../config/db.js';

export const getNeedhostels = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;

    const dataQuery = `
    SELECT * FROM needhostel
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;

    const countQuery = 'SELECT COUNT(*) FROM needhostel';

    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);

    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getNeedhostelById = async (id) => {
    const query = 'SELECT * FROM needhostel WHERE id_needhostel = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
