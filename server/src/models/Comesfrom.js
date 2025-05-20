import pool from '../config/db.js';

export const getComesfrom = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;

    const dataQuery = `
    SELECT * FROM comesfrom
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;

    const countQuery = 'SELECT COUNT(*) FROM comesfrom';

    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);

    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getComesfromById = async (id) => {
    const query = 'SELECT * FROM comesfrom WHERE id_comesfrom = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};

export const getNextComesfromId = async () => {
    const query = 'SELECT COALESCE(MAX(id_comesfrom) + 1, 1) AS next_id FROM comesfrom';
    const result = await pool.query(query);
    return parseInt(result.rows[0].next_id, 10);
};

export const createComesfrom = async (id, name) => {
    const query = 'INSERT INTO comesfrom (id_comesfrom, comesfrom) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [id, name]);
    // Обновляем последовательность
    await pool.query("SELECT setval(pg_get_serial_sequence('comesfrom', 'id_comesfrom'), (SELECT MAX(id_comesfrom) FROM comesfrom))");
    return result.rows[0];
};

export const updateComesfrom = async (id, name) => {
    const query = 'UPDATE comesfrom SET comesfrom = $1 WHERE id_comesfrom = $2 RETURNING *';
    const result = await pool.query(query, [name, id]);
    return result.rows[0] || null;
};

export const deleteComesfrom = async (id) => {
    const query = 'DELETE FROM comesfrom WHERE id_comesfrom = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
