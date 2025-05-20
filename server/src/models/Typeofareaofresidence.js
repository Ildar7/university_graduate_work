import pool from '../config/db.js';

export const getTypeofareaofresidence = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;
    const dataQuery = `
        SELECT * FROM typeofareaofresidence
        ORDER BY ${sort} ${order.toUpperCase()}
        LIMIT $1 OFFSET $2
    `;
    const countQuery = 'SELECT COUNT(*) FROM typeofareaofresidence';
    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);
    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getTypeofareaofresidenceById = async (id) => {
    const query = 'SELECT * FROM typeofareaofresidence WHERE id_typeofareaofresidence = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};

export const getNextTypeofareaofresidenceId = async () => {
    const query = 'SELECT COALESCE(MAX(id_typeofareaofresidence) + 1, 1) AS next_id FROM typeofareaofresidence';
    const result = await pool.query(query);
    return parseInt(result.rows[0].next_id, 10);
};

export const createTypeofareaofresidence = async (id, title) => {
    const query = 'INSERT INTO typeofareaofresidence (id_typeofareaofresidence, typeofareaofresidence) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [id, title]);
    await pool.query("SELECT setval(pg_get_serial_sequence('typeofareaofresidence', 'id_typeofareaofresidence'), (SELECT MAX(id_typeofareaofresidence) FROM typeofareaofresidence))");
    return result.rows[0];
};

export const updateTypeofareaofresidence = async (id, title) => {
    const query = 'UPDATE typeofareaofresidence SET typeofareaofresidence = $1 WHERE id_typeofareaofresidence = $2 RETURNING *';
    const result = await pool.query(query, [title, id]);
    return result.rows[0] || null;
};

export const deleteTypeofareaofresidence = async (id) => {
    const query = 'DELETE FROM typeofareaofresidence WHERE id_typeofareaofresidence = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
