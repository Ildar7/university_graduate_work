import pool from '../config/db.js';

export const getWhopaying = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;

    const dataQuery = `
    SELECT * FROM whopaying
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;

    const countQuery = 'SELECT COUNT(*) FROM whopaying';

    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);

    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getWhopayingById = async (id) => {
    const query = 'SELECT * FROM whopaying WHERE id_whopaying = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};

export const getNextWhopayingId = async () => {
    const query = 'SELECT COALESCE(MAX(id_whopaying) + 1, 1) AS next_id FROM whopaying';
    const result = await pool.query(query);
    return parseInt(result.rows[0].next_id, 10);
};

export const createWhopaying = async (id, source) => {
    const query = 'INSERT INTO whopaying (id_whopaying, whopaying) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [id, source]);
    await pool.query("SELECT setval(pg_get_serial_sequence('whopaying', 'id_whopaying'), (SELECT MAX(id_whopaying) FROM whopaying))");
    return result.rows[0];
};

export const updateWhopaying = async (id, source) => {
    const query = 'UPDATE whopaying SET whopaying = $1 WHERE id_whopaying = $2 RETURNING *';
    const result = await pool.query(query, [source, id]);
    return result.rows[0] || null;
};

export const deleteWhopaying = async (id) => {
    const query = 'DELETE FROM whopaying WHERE id_whopaying = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
