import pool from '../config/db.js';

export const getComesfrom = async ({ page, limit, sort, order }) => {
    const offset = (page - 1) * limit;

    // Запрос для получения данных с пагинацией и сортировкой
    const dataQuery = `
    SELECT * FROM comesfrom
    ORDER BY ${sort} ${order.toUpperCase()}
    LIMIT $1 OFFSET $2
  `;

    // Запрос для подсчета общего количества записей
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
