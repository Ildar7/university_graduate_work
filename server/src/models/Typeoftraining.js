import pool from '../config/db.js';

export const getTypeoftrainings = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;
    const dataQuery = `
        SELECT * FROM typeoftraining
        ORDER BY ${sort} ${order.toUpperCase()}
        LIMIT $1 OFFSET $2
    `;
    const countQuery = 'SELECT COUNT(*) FROM typeoftraining';
    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);
    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getTypeoftrainingById = async (id) => {
    const query = 'SELECT * FROM typeoftraining WHERE id_typeoftraining = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};

export const getNextTypeoftrainingId = async () => {
    const query = 'SELECT COALESCE(MAX(id_typeoftraining) + 1, 1) AS next_id FROM typeoftraining';
    const result = await pool.query(query);
    return parseInt(result.rows[0].next_id, 10);
};

export const createTypeoftraining = async (id, title) => {
    const query = 'INSERT INTO typeoftraining (id_typeoftraining, typeoftraining) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [id, title]);
    await pool.query("SELECT setval('typeoftraining_id_typeoftraining_seq', (SELECT MAX(id_typeoftraining) FROM typeoftraining))");
    return result.rows[0];
};

export const updateTypeoftraining = async (id, title) => {
    const query = 'UPDATE typeoftraining SET typeoftraining = $1 WHERE id_typeoftraining = $2 RETURNING *';
    const result = await pool.query(query, [title, id]);
    return result.rows[0] || null;
};

export const deleteTypeoftraining = async (id) => {
    const query = 'DELETE FROM typeoftraining WHERE id_typeoftraining = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
