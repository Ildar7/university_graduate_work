import pool from '../config/db.js';

export const getWhopaying = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;

    // Запрос для получения данных с пагинацией и сортировкой
    const dataQuery = `
    SELECT * FROM whopaying
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;

    // Запрос для подсчета общего количества записей
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
