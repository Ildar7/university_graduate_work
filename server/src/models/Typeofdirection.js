import pool from '../config/db.js';

export const getTypeofdirection = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;
    const dataQuery = `
        SELECT * FROM typeofdirection
        ORDER BY ${sort} ${order.toUpperCase()}
        LIMIT $1 OFFSET $2
    `;
    const countQuery = 'SELECT COUNT(*) FROM typeofdirection';
    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);
    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getTypeofdirectionById = async (id) => {
    const query = 'SELECT * FROM typeofdirection WHERE id_typeofdirection = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};

export const getNextTypeofdirectionId = async () => {
    const query = 'SELECT COALESCE(MAX(id_typeofdirection) + 1, 1) AS next_id FROM typeofdirection';
    const result = await pool.query(query);
    return parseInt(result.rows[0].next_id, 10);
};

export const createTypeofdirection = async (id, name) => {
    const query = 'INSERT INTO typeofdirection (id_typeofdirection, typeofdirection) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [id, name]);
    await pool.query("SELECT setval(pg_get_serial_sequence('typeofdirection', 'id_typeofdirection'), (SELECT MAX(id_typeofdirection) FROM typeofdirection))");
    return result.rows[0];
};

export const updateTypeofdirection = async (id, name) => {
    const query = 'UPDATE typeofdirection SET typeofdirection = $1 WHERE id_typeofdirection = $2 RETURNING *';
    const result = await pool.query(query, [name, id]);
    return result.rows[0] || null;
};

export const deleteTypeofdirection = async (id) => {
    const query = 'DELETE FROM typeofdirection WHERE id_typeofdirection = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
