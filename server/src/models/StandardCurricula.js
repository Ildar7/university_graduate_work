import pool from '../config/db.js';

export const StandardCurriculaModel = {
    tableName: 'standard_curricula',
    fields: {
        standard_curriculum_id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        speciality_id: {
            type: 'integer',
            required: true,
            foreignKey: 'specialty(id_spec)',
        },
        date_of_order: {
            type: 'date',
        },
        sort: {
            type: 'integer',
            required: true,
        },
        file_id: {
            type: 'integer',
        },
    },
    async getStandardCurricula() {
        const query = `
            SELECT 
                sc.standard_curriculum_id,
                sc.speciality_id,
                sc.date_of_order,
                sc.sort,
                sc.file_id,
                json_build_object(
                    'id_spec', s.id_spec,
                    'shifr_spec', s.shifr_spec,
                    'speciality', s.speciality,
                    'level_of_education', s.level_of_education
                ) AS specialty
            FROM standard_curricula sc
            JOIN specialty s ON sc.speciality_id = s.id_spec
            ORDER BY sc.sort, sc.standard_curriculum_id
        `;
        const result = await pool.query(query);
        return result.rows;
    },
    async getStandardCurriculumDetail(id) {
        const query = `
            SELECT 
                sc.standard_curriculum_id,
                sc.speciality_id,
                sc.date_of_order::TEXT,
                sc.sort,
                sc.file_id::TEXT,
                json_build_object(
                    'id_spec', s.id_spec,
                    'shifr_spec', s.shifr_spec,
                    'speciality', s.speciality,
                    'level_of_education', s.level_of_education
                ) AS specialty,
                (
                    SELECT json_agg(
                        json_build_object(
                            'standard_curriculum_qualification_id', scq.standard_curriculum_qualification_id,
                            'standard_curriculum_id', scq.standard_curriculum_id,
                            'qualification_id', scq.qualification_id,
                            'sort', scq.sort,
                            'compulsory_education_basic_credits_from', scq.compulsory_education_basic_credits_from,
                            'compulsory_education_basic_credits_to', scq.compulsory_education_basic_credits_to,
                            'compulsory_education_general_credits_from', scq.compulsory_education_general_credits_from,
                            'compulsory_education_general_credits_to', scq.compulsory_education_general_credits_to,
                            'extracurricular_activities_hours_per_week', scq.extracurricular_activities_hours_per_week,
                            'consultations_hours_per_academic_year', scq.consultations_hours_per_academic_year,
                            'qualification', json_build_object(
                                'id_qual', q.id_qual,
                                'shifr_qual', q.shifr_qual,
                                'qualification', q.qualification,
                                'specialty_id', q.specialty_id,
                                'sort', q.sort
                            ),
                            'total', json_build_object(
                                'basicEducationFrom', json_build_object(
                                    'credits', scq.basic_education_credits_from,
                                    'hours', scq.basic_education_hours_from
                                ),
                                'basicEducationTo', json_build_object(
                                    'credits', scq.basic_education_credits_to,
                                    'hours', scq.basic_education_hours_to
                                ),
                                'generalEducationFrom', json_build_object(
                                    'credits', scq.general_education_credits_from,
                                    'hours', scq.general_education_hours_from
                                ),
                                'generalEducationTo', json_build_object(
                                    'credits', scq.general_education_credits_to,
                                    'hours', scq.general_education_hours_to
                                )
                            ),
                            'modules', (
                                SELECT json_agg(
                                    json_build_object(
                                        'standard_curriculum_module_id', scm2.standard_curriculum_module_id,
                                        'standard_curriculum_id', scm2.standard_curriculum_id,
                                        'standard_curriculum_qualification_id', scm2.standard_curriculum_qualification_id,
                                        'educational_module_id', scm2.educational_module_id,
                                        'sort', scm2.sort,
                                        'has_in_basic_education', scm2.has_in_basic_education,
                                        'has_in_general_education', scm2.has_in_general_education,
                                        'educational_module', json_build_object(
                                            'module_id', em2.module_id,
                                            'name', em2.name,
                                            'short_name', em2.short_name,
                                            'basic_education', em2.basic_education,
                                            'sort', em2.sort,
                                            'study_time_in_credits', em2.study_time_in_credits
                                        ),
                                        'subjects', (
                                            SELECT json_agg(
                                                json_build_object(
                                                    'subject_id', s2.subject_id,
                                                    'name', s2.name,
                                                    'module_id', s2.module_id,
                                                    'unit_id', s2.unit_id::TEXT,
                                                    'restrictions', json_build_object(
                                                        'restriction_id', scr.restriction_id,
                                                        'subject_id', scr.subject_id,
                                                        'exams_semestrs_from', scr.exams_semestrs_from,
                                                        'exams_semestrs_to', scr.exams_semestrs_to,
                                                        'tests_semestrs_from', scr.tests_semestrs_from,
                                                        'tests_semestrs_to', scr.tests_semestrs_to,
                                                        'study_time_hours_min', scr.study_time_hours_min,
                                                        'study_time_hours_max', scr.study_time_hours_max,
                                                        'study_time_theory_hours', scr.study_time_theory_hours,
                                                        'study_time_practice_hours', scr.study_time_practice_hours,
                                                        'study_time_course_project_hours', scr.study_time_course_project_hours,
                                                        'semesters_from', scr.semesters_from,
                                                        'semesters_to', scr.semesters_to,
                                                        'count_of_tests', scr.count_of_tests
                                                    )
                                                )
                                            ) FROM subjects s2
                                            LEFT JOIN standard_curricula_subjects_restrictions scr
                                            ON s2.subject_id = scr.subject_id
                                            AND scr.standard_curriculum_module_id = scm2.standard_curriculum_module_id
                                            WHERE s2.module_id = em2.module_id
                                        ),
                                        'units', (
                                            SELECT json_agg(
                                                json_build_object(
                                                    'educational_modules_unit', json_build_object(
                                                        'unit_id', eu.unit_id,
                                                        'module_id', eu.module_id,
                                                        'name', eu.name,
                                                        'sort', eu.sort
                                                    ),
                                                    'educational_modules_unit_id', eu.unit_id,
                                                    'has_in_basic_education', scmu.has_in_basic_education,
                                                    'has_in_general_education', scmu.has_in_general_education,
                                                    'name', eu.name,
                                                    'sort', eu.sort,
                                                    'standard_curriculum_module_id', scmu.standard_curriculum_module_id,
                                                    'standard_curriculum_modules_unit_id', scmu.standard_curriculum_modules_unit_id,
                                                    'subjects', (
                                                        SELECT json_agg(
                                                            json_build_object(
                                                                'subject_id', s3.subject_id,
                                                                'name', s3.name,
                                                                'module_id', s3.module_id,
                                                                'unit_id', s3.unit_id::TEXT,
                                                                'restrictions', json_build_object(
                                                                    'restriction_id', scr2.restriction_id,
                                                                    'subject_id', scr2.subject_id,
                                                                    'exams_semestrs_from', scr2.exams_semestrs_from,
                                                                    'exams_semestrs_to', scr2.exams_semestrs_to,
                                                                    'tests_semestrs_from', scr2.tests_semestrs_from,
                                                                    'tests_semestrs_to', scr2.tests_semestrs_to,
                                                                    'study_time_hours_min', scr2.study_time_hours_min,
                                                                    'study_time_hours_max', scr2.study_time_hours_max,
                                                                    'study_time_theory_hours', scr2.study_time_theory_hours,
                                                                    'study_time_practice_hours', scr2.study_time_practice_hours,
                                                                    'study_time_course_project_hours', scr2.study_time_course_project_hours,
                                                                    'semesters_from', scr2.semesters_from,
                                                                    'semesters_to', scr2.semesters_to,
                                                                    'count_of_tests', scr2.count_of_tests
                                                                )
                                                            )
                                                        ) FROM subjects s3
                                                        LEFT JOIN standard_curricula_subjects_restrictions scr2
                                                        ON s3.subject_id = scr2.subject_id
                                                        AND scr2.standard_curriculum_module_id = scm2.standard_curriculum_module_id
                                                        WHERE s3.unit_id = eu.unit_id
                                                    )
                                                )
                                            ) FROM standard_curricula_modules_units scmu
                                            JOIN educational_units eu ON scmu.educational_modules_unit_id = eu.unit_id
                                            WHERE scmu.standard_curriculum_module_id = scm2.standard_curriculum_module_id
                                        )
                                    )
                                ) FROM standard_curricula_modules scm2
                                JOIN educational_modules em2 ON scm2.educational_module_id = em2.module_id
                                WHERE scm2.standard_curriculum_qualification_id = scq.standard_curriculum_qualification_id
                            )
                        )
                    ) FROM standard_curricula_qualifications scq
                    JOIN qualification q ON scq.qualification_id = q.id_qual
                    WHERE scq.standard_curriculum_id = sc.standard_curriculum_id
                ) AS qualifications,
                (
                    SELECT json_agg(
                        json_build_object(
                            'standard_curriculum_module_id', scm.standard_curriculum_module_id,
                            'standard_curriculum_id', scm.standard_curriculum_id,
                            'standard_curriculum_qualification_id', scm.standard_curriculum_qualification_id,
                            'educational_module_id', scm.educational_module_id,
                            'sort', scm.sort,
                            'has_in_basic_education', scm.has_in_basic_education,
                            'has_in_general_education', scm.has_in_general_education,
                            'educational_module', json_build_object(
                                'module_id', em.module_id,
                                'name', em.name,
                                'short_name', em.short_name,
                                'basic_education', em.basic_education,
                                'sort', em.sort,
                                'study_time_in_credits', em.study_time_in_credits,
                                'units', (
                                    SELECT json_agg(
                                        json_build_object(
                                            'unit_id', eu2.unit_id,
                                            'module_id', eu2.module_id,
                                            'name', eu2.name,
                                            'sort', eu2.sort
                                        )
                                    ) FROM educational_units eu2
                                    WHERE eu2.module_id = em.module_id
                                )
                            ),
                            'subjects', (
                                SELECT json_agg(
                                    json_build_object(
                                        'subject_id', s.subject_id,
                                        'name', s.name,
                                        'module_id', s.module_id,
                                        'unit_id', s.unit_id::TEXT,
                                        'restrictions', json_build_object(
                                            'restriction_id', scr.restriction_id,
                                            'subject_id', scr.subject_id,
                                            'exams_semestrs_from', scr.exams_semestrs_from,
                                            'exams_semestrs_to', scr.exams_semestrs_to,
                                            'tests_semestrs_from', scr.tests_semestrs_from,
                                            'tests_semestrs_to', scr.tests_semestrs_to,
                                            'study_time_hours_min', scr.study_time_hours_min,
                                            'study_time_hours_max', scr.study_time_hours_max,
                                            'study_time_theory_hours', scr.study_time_theory_hours,
                                            'study_time_practice_hours', scr.study_time_practice_hours,
                                            'study_time_course_project_hours', scr.study_time_course_project_hours,
                                            'semesters_from', scr.semesters_from,
                                            'semesters_to', scr.semesters_to,
                                            'count_of_tests', scr.count_of_tests
                                        )
                                    )
                                ) FROM subjects s
                                LEFT JOIN standard_curricula_subjects_restrictions scr
                                ON s.subject_id = scr.subject_id
                                AND scr.standard_curriculum_module_id = scm.standard_curriculum_module_id
                                WHERE s.module_id = em.module_id
                            ),
                            'units', (
                                SELECT json_agg(
                                    json_build_object(
                                        'educational_modules_unit', json_build_object(
                                            'unit_id', eu.unit_id,
                                            'module_id', eu.module_id,
                                            'name', eu.name,
                                            'sort', eu.sort
                                        ),
                                        'educational_modules_unit_id', eu.unit_id,
                                        'has_in_basic_education', scmu.has_in_basic_education,
                                        'has_in_general_education', scmu.has_in_general_education,
                                        'name', eu.name,
                                        'sort', eu.sort,
                                        'standard_curriculum_module_id', scmu.standard_curriculum_module_id,
                                        'standard_curriculum_modules_unit_id', scmu.standard_curriculum_modules_unit_id,
                                        'subjects', (
                                            SELECT json_agg(
                                                json_build_object(
                                                    'subject_id', s2.subject_id,
                                                    'name', s2.name,
                                                    'module_id', s2.module_id,
                                                    'unit_id', s2.unit_id::TEXT,
                                                    'restrictions', json_build_object(
                                                        'restriction_id', scr2.restriction_id,
                                                        'subject_id', scr2.subject_id,
                                                        'exams_semestrs_from', scr2.exams_semestrs_from,
                                                        'exams_semestrs_to', scr2.exams_semestrs_to,
                                                        'tests_semestrs_from', scr2.tests_semestrs_from,
                                                        'tests_semestrs_to', scr2.tests_semestrs_to,
                                                        'study_time_hours_min', scr2.study_time_hours_min,
                                                        'study_time_hours_max', scr2.study_time_hours_max,
                                                        'study_time_theory_hours', scr2.study_time_theory_hours,
                                                        'study_time_practice_hours', scr2.study_time_practice_hours,
                                                        'study_time_course_project_hours', scr2.study_time_course_project_hours,
                                                        'semesters_from', scr2.semesters_from,
                                                        'semesters_to', scr2.semesters_to,
                                                        'count_of_tests', scr2.count_of_tests
                                                    )
                                                )
                                            ) FROM subjects s2
                                            LEFT JOIN standard_curricula_subjects_restrictions scr2
                                            ON s2.subject_id = scr2.subject_id
                                            AND scr2.standard_curriculum_module_id = scm.standard_curriculum_module_id
                                            WHERE s2.unit_id = eu.unit_id
                                        )
                                    )
                                ) FROM standard_curricula_modules_units scmu
                                JOIN educational_units eu ON scmu.educational_modules_unit_id = eu.unit_id
                                WHERE scmu.standard_curriculum_module_id = scm.standard_curriculum_module_id
                            )
                        )
                    ) FROM standard_curricula_modules scm
                    JOIN educational_modules em ON scm.educational_module_id = em.module_id
                    WHERE scm.standard_curriculum_id = sc.standard_curriculum_id
                ) AS modules
            FROM standard_curricula sc
            JOIN specialty s ON sc.speciality_id = s.id_spec
            WHERE sc.standard_curriculum_id = $1
        `;
        const result = await pool.query(query, [id]);
        if (result.rows.length === 0) {
            throw new Error(`Учебный план с ID ${id} не найден`);
        }
        return result.rows[0];
    },
    async deleteStandardCurriculum(id) {
        const query = `
            DELETE FROM public.standard_curricula
            WHERE standard_curriculum_id = $1
            RETURNING *;
        `;
        const result = await pool.query(query, [id]);
        if (result.rowCount === 0) {
            throw new Error(`Учебный план с ID ${id} не найден`);
        }
        return result.rows[0];
    },
};
