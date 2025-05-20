import pool from '../config/db.js';

export const getFromacceptedfinished = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;

    const dataQuery = `
    SELECT * FROM fromacceptedfinished
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;

    const countQuery = 'SELECT COUNT(*) FROM fromacceptedfinished';

    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);

    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getFromacceptedfinishedById = async (id) => {
    const query = 'SELECT * FROM fromacceptedfinished WHERE id_fromacceptedfinished = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};

export const getNextFromacceptedfinishedId = async () => {
    const query = 'SELECT COALESCE(MAX(id_fromacceptedfinished) + 1, 1) AS next_id FROM fromacceptedfinished';
    const result = await pool.query(query);
    return parseInt(result.rows[0].next_id, 10);
};

export const createFromacceptedfinished = async (id, name) => {
    const query = 'INSERT INTO fromacceptedfinished (id_fromacceptedfinished, fromacceptedfinished) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [id, name]);
    await pool.query("SELECT setval(pg_get_serial_sequence('fromacceptedfinished', 'id_fromacceptedfinished'), (SELECT MAX(id_fromacceptedfinished) FROM fromacceptedfinished))");
    return result.rows[0];
};

export const updateFromacceptedfinished = async (id, name) => {
    const query = 'UPDATE fromacceptedfinished SET fromacceptedfinished = $1 WHERE id_fromacceptedfinished = $2 RETURNING *';
    const result = await pool.query(query, [name, id]);
    return result.rows[0] || null;
};

export const deleteFromacceptedfinished = async (id) => {
    const query = 'DELETE FROM fromacceptedfinished WHERE id_fromacceptedfinished = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
