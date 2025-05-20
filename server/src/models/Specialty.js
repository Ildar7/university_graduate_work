import pool from '../config/db.js';

export const getSpecialties = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;
    const dataQuery = `
    SELECT * FROM specialty
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;
    const countQuery = 'SELECT COUNT(*) FROM specialty';
    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);
    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getSpecialtyById = async (id) => {
    const query = 'SELECT * FROM specialty WHERE id_spec = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
