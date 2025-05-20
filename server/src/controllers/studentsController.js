// server/src/controllers/studentsController.js
import pool from '../config/db.js';

export const getStudents = async (req, res) => {
    const { page = '1', limit = '50', sort = 'students_id', order = 'asc', filter } = req.query;

    try {
        const offset = (Number(page) - 1) * Number(limit);

        let query = `
      SELECT 
        s.*,
        u.user_id AS user_user_id,
        u.login,
        u.email,
        u.first_name,
        u.last_name,
        u.patronymic,
        u.created_at AS user_created_at,
        u.updated_at AS user_updated_at,
        g.id_gender,
        g.gender AS gender_gender,
        n.id_nationality,
        n.nationality AS nationality_nationality,
        te.id_typeenrollment,
        te.typeenrollment,
        c.id_citizenship,
        c.citizenship,
        c.country_id AS citizenship_country_id,
        cf.id_comesfrom,
        cf.comesfrom,
        faf.id_fromacceptedfinished,
        faf.fromacceptedfinished,
        tar.id_typeofareaofresidence,
        tar.typeofareaofresidence,
        dt.id_durationoftraining,
        dt.durationoftraining,
        ct.id_courseoftraining,
        ct.courseoftraining,
        ct.coursevalue,
        le.id_languageofedu,
        le.languageofedu,
        tt.id_typeoftraining,
        tt.typeoftraining,
        sp.id_spec,
        sp.shifr_spec,
        sp.speciality,
        sp.level_of_education,
        q.id_qual,
        q.shifr_qual,
        q.qualification,
        q.specialty_id AS qualification_specialty_id,
        q.sort AS qualification_sort,
        nh.id_needhostel,
        nh.needhostel,
        wp.id_whopaying,
        wp.whopaying,
        fp.id_finimatpomosh,
        fp.finimatpomosh,
        gr.id_group,
        gr.name AS group_name,
        gr.id_language,
        gr.enrollment_year,
        gr.id_specialty,
        gr.id_education_base,
        gr.course,
        gr.study_duration,
        gr.is_full_time,
        gr.short_name,
        gr.serial_number,
        gr.code,
        kv.id_kvotum,
        kv.kvotum_name
      FROM students s
      JOIN users u ON s.user_id = u.user_id
      JOIN gender g ON s.student_gender = g.id_gender
      JOIN nationality n ON s.student_nationality = n.id_nationality
      JOIN typeenrollment te ON s.student_enrollment_type = te.id_typeenrollment
      JOIN citizenship c ON s.student_citizenship = c.id_citizenship
      JOIN comesfrom cf ON s.student_is_arrival_from = cf.id_comesfrom
      JOIN fromacceptedfinished faf ON s.student_is_finished_edu_type = faf.id_fromacceptedfinished
      JOIN typeofareaofresidence tar ON s.student_residence_type = tar.id_typeofareaofresidence
      JOIN durationoftraining dt ON s.student_study_duration = dt.id_durationoftraining
      JOIN courseoftraining ct ON s.student_study_course = ct.id_courseoftraining
      JOIN languageofedu le ON s.student_edu_lang = le.id_languageofedu
      JOIN typeoftraining tt ON s.student_edu_form = tt.id_typeoftraining
      JOIN specialty sp ON s.student_edu_speciality = sp.id_spec
      JOIN qualification q ON s.student_edu_classifier = q.id_qual
      JOIN needhostel nh ON s.student_is_need_hostel_type = nh.id_needhostel
      JOIN whopaying wp ON s.student_financing_source_type = wp.id_whopaying
      LEFT JOIN finimatpomosh fp ON s.student_material_assistance_type = fp.id_finimatpomosh
      LEFT JOIN kvotum kv ON s.student_quota = kv.id_kvotum
      JOIN groups gr ON s.id_group = gr.id_group
    `;

        const queryParams = [];
        if (filter) {
            let filters;
            try {
                filters = JSON.parse(filter);
            } catch (error) {
                return res.status(400).json({ message: 'Неверный формат фильтра' });
            }

            const validFilterFields = [
                'students_id',
                'user_id',
                'student_govid',
                'student_birth_date',
                'student_gender',
                'student_nationality',
                'student_citizenship',
                'student_phone_number',
                'student_study_duration',
                'student_study_course',
                'student_is_need_hostel_type',
                'student_financing_source_type',
                'student_material_assistance_type',
                'id_group',
                'student_is_study_in_productive_employment',
                'student_is_completed_training_at_competence_center',
                'student_is_study_in_worldskills',
                'student_is_involved_in_social_activities',
                'student_is_orphan',
                'student_is_without_parental_care',
                'student_is_disabled_person',
                'student_is_from_young_family',
                'student_is_has_access_to_exams',
            ];
            const whereClauses = [];
            Object.entries(filters).forEach(([key, value], index) => {
                if (!validFilterFields.includes(key.replace(/_from|_to/, ''))) {
                    return res.status(400).json({ message: `Недопустимое поле фильтрации: ${key}` });
                }
                if (key.includes('_from')) {
                    whereClauses.push(`s.${key.replace('_from', '')} >= $${index + 1}`);
                    queryParams.push(value);
                } else if (key.includes('_to')) {
                    whereClauses.push(`s.${key.replace('_to', '')} <= $${index + 1}`);
                    queryParams.push(value);
                } else if (Array.isArray(value)) {
                    whereClauses.push(`s.${key} = ANY($${index + 1})`);
                    queryParams.push(value);
                } else {
                    whereClauses.push(`s.${key} = $${index + 1}`);
                    queryParams.push(value);
                }
            });
            if (whereClauses.length > 0) {
                query += ` WHERE ${whereClauses.join(' AND ')}`;
            }
        }

        const validSortFields =
            ['students_id',
                'student_govid',
                'student_gender',
                'student_nationality',
                'student_edu_speciality',
                'student_edu_classifier',
                'student_study_duration',
                'student_study_course',
                'student_edu_form',
                'student_arrival_date',
                'student_enrollment_type',
                'student_is_arrival_from',
                'student_is_finished_edu_type',
                'student_edu_lang',
                'student_is_has_access_to_exams',
                'student_residence_type',
                'student_residential_address',
                'student_is_need_hostel_type',
                'student_is_live_at_hostel',
                'student_financing_source_type',
                'student_quota',
                'student_is_orphan',
                'student_is_without_parental_care',
                'student_is_disabled_person',
                'student_material_assistance_type',
                'student_is_from_young_family',
                'student_is_study_in_dual_system',
                'student_is_study_in_productive_employment',
                'student_is_completed_training_at_competence_center',
                'student_is_study_in_worldskills',
                'student_is_involved_in_social_activities',
                'student_birth_date',
                'id_group',
                'student_phone_number',
                'student_citizenship',
                'student_temporary_residence_add'];
        if (!validSortFields.includes(sort)) {
            return res.status(400).json({ message: 'Недопустимое поле сортировки' });
        }
        const validOrders = ['asc', 'desc'];
        if (!validOrders.includes(order.toLowerCase())) {
            return res.status(400).json({ message: 'Недопустимый порядок сортировки' });
        }

        query += ` ORDER BY ${sort === 'first_name' || sort === 'last_name' ? 'u' : 's'}.${sort} ${order.toUpperCase()}`;
        query += ` LIMIT $${queryParams.length + 1} OFFSET $${queryParams.length + 2}`;
        queryParams.push(Number(limit), offset);

        const result = await pool.query(query, queryParams);

        const formattedData = result.rows.map((row) => ({
            students_id: row.students_id,
            user_id: row.user_id,
            student_govid: row.student_govid,
            student_birth_date: row.student_birth_date,
            student_gender: row.student_gender,
            student_nationality: row.student_nationality,
            student_citizenship: row.student_citizenship,
            student_govid_issue_date: row.student_govid_issue_date,
            student_residential_address: row.student_residential_address,
            student_temporary_residence_address: row.student_temporary_residence_address,
            student_enrollment_type: row.student_enrollment_type,
            student_arrival_date: row.student_arrival_date,
            student_is_arrival_from: row.student_is_arrival_from,
            student_phone_number: row.student_phone_number,
            student_is_finished_edu_type: row.student_is_finished_edu_type,
            student_residence_type: row.student_residence_type,
            student_study_duration: row.student_study_duration,
            student_study_course: row.student_study_course,
            student_edu_lang: row.student_edu_lang,
            student_edu_form: row.student_edu_form,
            student_edu_speciality: row.student_edu_speciality,
            student_edu_classifier: row.student_edu_classifier,
            student_is_study_in_dual_system: row.student_is_study_in_dual_system,
            student_is_need_hostel_type: row.student_is_need_hostel_type,
            student_is_live_at_hostel: row.student_is_live_at_hostel,
            student_financing_source_type: row.student_financing_source_type,
            student_quota: row.student_quota,
            student_material_assistance_type: row.student_material_assistance_type,
            id_group: row.id_group,
            student_is_study_in_productive_employment: row.student_is_study_in_productive_employment,
            student_is_completed_training_at_competence_center: row.student_is_completed_training_at_competence_center,
            student_is_study_in_worldskills: row.student_is_study_in_worldskills,
            student_is_involved_in_social_activities: row.student_is_involved_in_social_activities,
            student_is_orphan: row.student_is_orphan,
            student_is_without_parental_care: row.student_is_without_parental_care,
            student_is_disabled_person: row.student_is_disabled_person,
            student_is_from_young_family: row.student_is_from_young_family,
            student_is_has_access_to_exams: row.student_is_has_access_to_exams,
            user: {
                user_id: row.user_user_id,
                login: row.login,
                email: row.email,
                first_name: row.first_name,
                last_name: row.last_name,
                patronymic: row.patronymic,
                created_at: row.user_created_at,
                updated_at: row.user_updated_at,
            },
            gender: {
                id_gender: row.id_gender,
                gender: row.gender_gender,
            },
            nationality: {
                id_nationality: row.id_nationality,
                nationality: row.nationality_nationality,
            },
            typeenrollment: {
                id_typeenrollment: row.id_typeenrollment,
                typeenrollment: row.typeenrollment,
            },
            citizenship: {
                id_citizenship: row.id_citizenship,
                citizenship: row.citizenship,
                country_id: row.citizenship_country_id,
            },
            comesfrom: {
                id_comesfrom: row.id_comesfrom,
                comesfrom: row.comesfrom,
            },
            fromacceptedfinished: {
                id_fromacceptedfinished: row.id_fromacceptedfinished,
                fromacceptedfinished: row.fromacceptedfinished,
            },
            typeofareaofresidence: {
                id_typeofareaofresidence: row.id_typeofareaofresidence,
                typeofareaofresidence: row.typeofareaofresidence,
            },
            durationoftraining: {
                id_durationoftraining: row.id_durationoftraining,
                durationoftraining: row.durationoftraining,
            },
            courseoftraining: {
                id_courseoftraining: row.id_courseoftraining,
                courseoftraining: row.courseoftraining,
                coursevalue: row.coursevalue,
            },
            languageofedu: {
                id_languageofedu: row.id_languageofedu,
                languageofedu: row.languageofedu,
            },
            typeoftraining: {
                id_typeoftraining: row.id_typeoftraining,
                typeoftraining: row.typeoftraining,
            },
            specialty: {
                id_spec: row.id_spec,
                shifr_spec: row.shifr_spec,
                speciality: row.speciality,
                level_of_education: row.level_of_education,
            },
            qualification: {
                id_qual: row.id_qual,
                shifr_qual: row.shifr_qual,
                qualification: row.qualification,
                specialty_id: row.qualification_specialty_id,
                sort: row.qualification_sort,
            },
            needhostel: {
                id_needhostel: row.id_needhostel,
                needhostel: row.needhostel,
            },
            whopaying: {
                id_whopaying: row.id_whopaying,
                whopaying: row.whopaying,
            },
            finimatpomosh: row.id_finimatpomosh
                ? {
                    id_finimatpomosh: row.id_finimatpomosh,
                    finimatpomosh: row.finimatpomosh,
                }
                : null,
            kvotum: row.id_kvotum
                ? {
                    id_kvotum: row.id_kvotum,
                    kvotum: row.kvotum_name,
                }
                : null,
            group: {
                id_group: row.id_group,
                name: row.group_name,
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
            },
        }));

        const countQuery = `SELECT COUNT(*) FROM students ${filter && query.includes('WHERE') ? 'WHERE ' + query.split('WHERE')[1].split('ORDER BY')[0] : ''}`;
        const countParams = queryParams.slice(0, queryParams.length - 2);
        const totalRecords = await pool.query(countQuery, countParams);
        const totalPages = Math.ceil(totalRecords.rows[0].count / Number(limit));

        res.json({
            data: formattedData,
            pagination: {
                total_records: Number(totalRecords.rows[0].count),
                current_page: Number(page),
                total_pages: totalPages,
                next_page: Number(page) < totalPages ? Number(page) + 1 : null,
                prev_page: Number(page) > 1 ? Number(page) - 1 : null,
            },
        });
    } catch (error) {
        console.error('Ошибка при получении студентов:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
};
