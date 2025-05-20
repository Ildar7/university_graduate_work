import pool from '../config/db.js';

export const getTypeenrollment = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;

    const dataQuery = `
    SELECT * FROM typeenrollment
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;

    const countQuery = 'SELECT COUNT(*) FROM typeenrollment';

    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);

    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getTypeenrollmentById = async (id) => {
    const query = 'SELECT * FROM typeenrollment WHERE id_typeenrollment = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
