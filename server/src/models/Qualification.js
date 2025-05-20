import pool from '../config/db.js';

export const getQualifications = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;
    const dataQuery = `
        SELECT * FROM qualification
        ORDER BY ${sort} ${order.toUpperCase()}
        LIMIT $1 OFFSET $2
    `;
    const countQuery = 'SELECT COUNT(*) FROM qualification';
    const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, [limit, offset]),
        pool.query(countQuery),
    ]);
    return {
        data: dataResult.rows,
        total: parseInt(countResult.rows[0].count, 10),
    };
};

export const getQualificationById = async (id) => {
    const query = 'SELECT * FROM qualification WHERE id_qual = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};

export const getNextQualificationId = async () => {
    const query = 'SELECT COALESCE(MAX(id_qual) + 1, 1) AS next_id FROM qualification';
    const result = await pool.query(query);
    return parseInt(result.rows[0].next_id, 10);
};

export const createQualification = async (id, name, code, specialtyId, sort) => {
    const query = `
        INSERT INTO qualification (id_qual, qualification, shifr_qual, specialty_id, sort)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `;
    const values = [id, name, code, specialtyId, sort !== null ? sort : 100];
    const result = await pool.query(query, values);
    await pool.query("SELECT setval('qualification_id_qual_seq', (SELECT MAX(id_qual) FROM qualification))");
    return result.rows[0];
};

export const updateQualification = async (id, name, code, specialtyId, sort) => {
    const query = `
        UPDATE qualification
        SET qualification = $1, shifr_qual = $2, specialty_id = $3, sort = $4
        WHERE id_qual = $5
        RETURNING *
    `;
    const values = [name, code, specialtyId, sort !== null ? sort : 100, id];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
};

export const deleteQualification = async (id) => {
    const query = 'DELETE FROM qualification WHERE id_qual = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
};
