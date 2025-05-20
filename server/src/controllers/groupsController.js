import pool from '../config/db.js';

export const getGroups = async (req, res) => {
    try {
        const query = `
      SELECT 
        g.*,
        l.id_languageofedu,
        l.languageofedu,
        s.id_spec,
        s.shifr_spec,
        s.speciality,
        s.level_of_education,
        eb.id_education_bases,
        eb.symbol_code AS eb_symbol_code,
        eb.original_name AS eb_original_name,
        eb.short_name AS eb_short_name,
        json_agg(
          json_build_object(
            'id_qual', q.id_qual,
            'shifr_qual', q.shifr_qual,
            'qualification', q.qualification,
            'specialty_id', q.specialty_id,
            'sort', q.sort,
            'groups_qualifications', json_build_object(
              'id', gq.id,
              'id_group', gq.id_group,
              'id_qual', gq.id_qual
            )
          )
        ) AS qualifications
      FROM groups g
      JOIN languageofedu l ON g.id_language = l.id_languageofedu
      JOIN specialty s ON g.id_specialty = s.id_spec
      JOIN education_bases eb ON g.id_education_base = eb.id_education_bases
      LEFT JOIN groups_qualifications gq ON g.id_group = gq.id_group
      LEFT JOIN qualification q ON gq.id_qual = q.id_qual
      GROUP BY g.id_group, l.id_languageofedu, l.languageofedu, s.id_spec, s.shifr_spec, s.speciality, s.level_of_education, eb.id_education_bases, eb.symbol_code, eb.original_name, eb.short_name
      ORDER BY g.id_group
    `;
        const result = await pool.query(query);

        const formattedData = result.rows.map(row => ({
            id_group: row.id_group,
            name: row.name,
            id_language: row.id_language,
            enrollment_year: row.enrollment_year,
            id_specialty: row.id_specialty,
            id_education_base: row.id_education_base,
            course: row.course,
            study_duration: row.study_duration,
            is_full_time: row.is_full_time,
            short_name: row.short_name,
            serial_number: row.serial_number,
            code: row.code,
            qualifications: row.qualifications.filter(q => q.id_qual !== null),
            language: {
                id_languageofedu: row.id_languageofedu,
                language: row.languageofedu,
                languageofedu: row.languageofedu,
                id_languages: row.id_languageofedu,
                symbol_code: row.languageofedu === 'Русский' ? 'RU' : 'KZ',
                name: row.languageofedu
            },
            specialty: {
                id_spec: row.id_spec,
                shifr_spec: row.shifr_spec,
                speciality: row.speciality,
                level_of_education: row.level_of_education
            },
            education_basis: {
                id_education_bases: row.id_education_bases,
                symbol_code: row.eb_symbol_code,
                original_name: row.eb_original_name,
                short_name: row.eb_short_name
            },
            studentsCount: 0
        }));

        res.json({ data: formattedData, pagination: null });
    } catch (error) {
        console.error('Ошибка при получении групп:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
