import pool from '../config/db.js';

export const getLanguageofedus = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;

    const dataQuery = `
    SELECT * FROM languageofedu
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;

    const countQuery = 'SELECT COUNT(*) FROM languageofedu';

    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);

    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getLanguageofeduById = async (id) => {
    const query = 'SELECT * FROM languageofedu WHERE id_languageofedu = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};

export const createLanguageofedu = async (name) => {
    const query = 'INSERT INTO languageofedu (languageofedu) VALUES ($1) RETURNING *';
    const result = await pool.query(query, [name]);
    return result.rows[0];
};

export const updateLanguageofedu = async (id, name) => {
    const query = 'UPDATE languageofedu SET languageofedu = $1 WHERE id_languageofedu = $2 RETURNING *';
    const result = await pool.query(query, [name, id]);
    return result.rows[0] || null;
};

export const deleteLanguageofedu = async (id) => {
    const query = 'DELETE FROM languageofedu WHERE id_languageofedu = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
