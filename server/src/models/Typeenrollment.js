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

export const getNextTypeenrollmentId = async () => {
    const query = 'SELECT COALESCE(MAX(id_typeenrollment) + 1, 1) AS next_id FROM typeenrollment';
    const result = await pool.query(query);
    return parseInt(result.rows[0].next_id, 10);
};

export const createTypeenrollment = async (id, title) => {
    const query = 'INSERT INTO typeenrollment (id_typeenrollment, typeenrollment) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [id, title]);
    await pool.query("SELECT setval(pg_get_serial_sequence('typeenrollment', 'id_typeenrollment'), (SELECT MAX(id_typeenrollment) FROM typeenrollment))");
    return result.rows[0];
};

export const updateTypeenrollment = async (id, title) => {
    const query = 'UPDATE typeenrollment SET typeenrollment = $1 WHERE id_typeenrollment = $2 RETURNING *';
    const result = await pool.query(query, [title, id]);
    return result.rows[0] || null;
};

export const deleteTypeenrollment = async (id) => {
    const query = 'DELETE FROM typeenrollment WHERE id_typeenrollment = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
