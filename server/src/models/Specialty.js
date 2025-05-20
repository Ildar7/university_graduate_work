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

export const getNextSpecialtyId = async () => {
    const query = 'SELECT COALESCE(MAX(id_spec) + 1, 1) AS next_id FROM specialty';
    const result = await pool.query(query);
    return parseInt(result.rows[0].next_id, 10);
};

export const createSpecialty = async (id, name, code) => {
    const query = 'INSERT INTO specialty (id_spec, speciality, shifr_spec) VALUES ($1, $2, $3) RETURNING *';
    const result = await pool.query(query, [id, name, code]);
    await pool.query("SELECT setval('specialty_id_spec_seq', (SELECT MAX(id_spec) FROM specialty))");
    return result.rows[0];
};

export const updateSpecialty = async (id, name, code) => {
    const query = 'UPDATE specialty SET speciality = $1, shifr_spec = $2 WHERE id_spec = $3 RETURNING *';
    const result = await pool.query(query, [name, code, id]);
    return result.rows[0] || null;
};

export const deleteSpecialty = async (id) => {
    const query = 'DELETE FROM specialty WHERE id_spec = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
