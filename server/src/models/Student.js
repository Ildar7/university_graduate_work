import pool from '../config/db.js';
import bcrypt from 'bcrypt';

export const StudentModel = {
    tableName: 'students',
    fields: {
        students_id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: 'integer',
            required: true,
            foreignKey: 'users(user_id)',
        },
        student_govid: {
            type: 'string',
            nullable: true,
            maxLength: 50,
        },
        student_birth_date: {
            type: 'date',
            nullable: true,
        },
        student_gender: {
            type: 'integer',
            nullable: true,
            foreignKey: 'gender(id_gender)',
        },
        student_nationality: {
            type: 'integer',
            nullable: true,
            foreignKey: 'nationality(id_nationality)',
        },
        student_citizenship: {
            type: 'integer',
            nullable: true,
            foreignKey: 'citizenship(id_citizenship)',
        },
        student_govid_issue_date: {
            type: 'date',
            nullable: true,
        },
        student_residential_address: {
            type: 'string',
            nullable: true,
            maxLength: 255,
        },
        student_temporary_residence_address: {
            type: 'string',
            nullable: true,
            maxLength: 255,
        },
        student_enrollment_type: {
            type: 'integer',
            nullable: true,
            foreignKey: 'typeenrollment(id_typeenrollment)',
        },
        student_arrival_date: {
            type: 'date',
            nullable: true,
        },
        student_is_arrival_from: {
            type: 'integer',
            nullable: true,
            foreignKey: 'comesfrom(id_comesfrom)',
        },
        student_phone_number: {
            type: 'string',
            nullable: true,
            maxLength: 20,
        },
        student_is_finished_edu_type: {
            type: 'integer',
            nullable: true,
            foreignKey: 'fromacceptedfinished(id_fromacceptedfinished)',
        },
        student_residence_type: {
            type: 'integer',
            nullable: true,
            foreignKey: 'typeofareaofresidence(id_typeofareaofresidence)',
        },
        student_study_duration: {
            type: 'integer',
            nullable: true,
            foreignKey: 'durationoftraining(id_durationoftraining)',
        },
        student_study_course: {
            type: 'integer',
            nullable: true,
            foreignKey: 'courseoftraining(id_courseoftraining)',
        },
        student_edu_lang: {
            type: 'integer',
            nullable: true,
            foreignKey: 'languageofedu(id_languageofedu)',
        },
        student_edu_form: {
            type: 'integer',
            nullable: true,
            foreignKey: 'typeoftraining(id_typeoftraining)',
        },
        student_edu_speciality: {
            type: 'integer',
            nullable: true,
            foreignKey: 'specialty(id_spec)',
        },
        student_edu_classifier: {
            type: 'integer',
            nullable: true,
            foreignKey: 'qualification(id_qual)',
        },
        student_is_study_in_dual_system: {
            type: 'boolean',
            nullable: true,
        },
        student_is_need_hostel_type: {
            type: 'integer',
            nullable: true,
            foreignKey: 'needhostel(id_needhostel)',
        },
        student_is_live_at_hostel: {
            type: 'boolean',
            nullable: true,
        },
        student_financing_source_type: {
            type: 'integer',
            nullable: true,
            foreignKey: 'whopaying(id_whopaying)',
        },
        student_quota: {
            type: 'integer',
            nullable: true,
            foreignKey: 'kvotum(id_kvotum)',
        },
        student_material_assistance_type: {
            type: 'integer',
            nullable: true,
            foreignKey: 'finimatpomosh(id_finimatpomosh)',
        },
        id_group: {
            type: 'integer',
            nullable: true,
            foreignKey: 'groups(id_group)',
        },
        created_at: {
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
        },
        student_is_study_in_productive_employment: {
            type: 'boolean',
            nullable: true,
        },
        student_is_completed_training_at_competence_center: {
            type: 'boolean',
            nullable: true,
        },
        student_is_study_in_worldskills: {
            type: 'boolean',
            nullable: true,
        },
        student_is_involved_in_social: {
            type: 'boolean',
            nullable: true,
        },
        student_is_orphan: {
            type: 'boolean',
            nullable: true,
        },
        student_is_without_parental_care: {
            type: 'boolean',
            nullable: true,
        },
        student_is_disabled_person: {
            type: 'boolean',
            nullable: true,
        },
        student_is_from_young_family: {
            type: 'boolean',
            nullable: true,
        },
        student_is_has_access_to_exams: {
            type: 'boolean',
            nullable: true,
        },
    },
    validate: (data) => {
        const errors = [];
        if (data.user_id && isNaN(data.user_id)) errors.push('user_id должен быть числом');
        if (data.student_govid && data.student_govid.length > 50) errors.push('student_govid не должен превышать 50 символов');
        if (data.student_birth_date && isNaN(Date.parse(data.student_birth_date))) errors.push('student_birth_date должен быть валидной датой');
        if (data.student_gender && isNaN(data.student_gender)) errors.push('student_gender должен быть числом');
        if (data.student_nationality && isNaN(data.student_nationality)) errors.push('student_nationality должен быть числом');
        if (data.student_citizenship && isNaN(data.student_citizenship)) errors.push('student_citizenship должен быть числом');
        if (data.student_govid_issue_date && isNaN(Date.parse(data.student_govid_issue_date))) errors.push('student_govid_issue_date должен быть валидной датой');
        if (data.student_residential_address && data.student_residential_address.length > 255) errors.push('student_residential_address не должен превышать 255 символов');
        if (data.student_temporary_residence_address && data.student_temporary_residence_address.length > 255) errors.push('student_temporary_residence_address не должен превышать 255 символов');
        if (data.student_enrollment_type && isNaN(data.student_enrollment_type)) errors.push('student_enrollment_type должен быть числом');
        if (data.student_arrival_date && isNaN(Date.parse(data.student_arrival_date))) errors.push('student_arrival_date должен быть валидной датой');
        if (data.student_is_arrival_from && isNaN(data.student_is_arrival_from)) errors.push('student_is_arrival_from должен быть числом');
        if (data.student_phone_number && data.student_phone_number.length > 20) errors.push('student_phone_number не должен превышать 20 символов');
        if (data.student_is_finished_edu_type && isNaN(data.student_is_finished_edu_type)) errors.push('student_is_finished_edu_type должен быть числом');
        if (data.student_residence_type && isNaN(data.student_residence_type)) errors.push('student_residence_type должен быть числом');
        if (data.student_study_duration && isNaN(data.student_study_duration)) errors.push('student_study_duration должен быть числом');
        if (data.student_study_course && isNaN(data.student_study_course)) errors.push('student_study_course должен быть числом');
        if (data.student_edu_lang && isNaN(data.student_edu_lang)) errors.push('student_edu_lang должен быть числом');
        if (data.student_edu_form && isNaN(data.student_edu_form)) errors.push('student_edu_form должен быть числом');
        if (data.student_edu_speciality && isNaN(data.student_edu_speciality)) errors.push('student_edu_speciality должен быть числом');
        if (data.student_edu_classifier && isNaN(data.student_edu_classifier)) errors.push('student_edu_classifier должен быть числом');
        if (data.student_is_study_in_dual_system !== undefined && typeof data.student_is_study_in_dual_system !== 'boolean') errors.push('student_is_study_in_dual_system должен быть булевым');
        if (data.student_is_need_hostel_type && isNaN(data.student_is_need_hostel_type)) errors.push('student_is_need_hostel_type должен быть числом');
        if (data.student_is_live_at_hostel !== undefined && typeof data.student_is_live_at_hostel !== 'boolean') errors.push('student_is_live_at_hostel должен быть булевым');
        if (data.student_financing_source_type && isNaN(data.student_financing_source_type)) errors.push('student_financing_source_type должен быть числом');
        if (data.student_quota && isNaN(data.student_quota)) errors.push('student_quota должен быть числом');
        if (data.student_material_assistance_type && isNaN(data.student_material_assistance_type)) errors.push('student_material_assistance_type должен быть числом');
        if (data.id_group && isNaN(data.id_group)) errors.push('id_group должен быть числом');
        if (data.student_is_study_in_productive_employment !== undefined && typeof data.student_is_study_in_productive_employment !== 'boolean') errors.push('student_is_study_in_productive_employment должен быть булевым');
        if (data.student_is_completed_training_at_competence_center !== undefined && typeof data.student_is_completed_training_at_competence_center !== 'boolean') errors.push('student_is_completed_training_at_competence_center должен быть булевым');
        if (data.student_is_study_in_worldskills !== undefined && typeof data.student_is_study_in_worldskills !== 'boolean') errors.push('student_is_study_in_worldskills должен быть булевым');
        if (data.student_is_involved_in_social_activities !== undefined && typeof data.student_is_involved_in_social_activities !== 'boolean') errors.push('student_is_involved_in_social_activities должен быть булевым');
        if (data.student_is_orphan !== undefined && typeof data.student_is_orphan !== 'boolean') errors.push('student_is_orphan должен быть булевым');
        if (data.student_is_without_parental_care !== undefined && typeof data.student_is_without_parental_care !== 'boolean') errors.push('student_is_without_parental_care должен быть булевым');
        if (data.student_is_disabled_person !== undefined && typeof data.student_is_disabled_person !== 'boolean') errors.push('student_is_disabled_person должен быть булевым');
        if (data.student_is_from_young_family !== undefined && typeof data.student_is_from_young_family !== 'boolean') errors.push('student_is_from_young_family должен быть булевым');
        if (data.student_is_has_access_to_exams !== undefined && typeof data.student_is_has_access_to_exams !== 'boolean') errors.push('student_is_has_access_to_exams должен быть булевым');
        return errors.length > 0 ? errors : null;
    },
};

export const getStudentById = async (id) => {
    const query = `
        SELECT 
            s.students_id,
            s.user_id,
            s.student_govid,
            s.student_birth_date,
            s.student_reason_for_missing_govid_type,
            s.student_gender,
            s.student_citizenship,
            s.student_nationality,
            s.student_govid_serial,
            s.student_govid_issue_date,
            s.student_residential_address,
            s.student_temporary_residence_address,
            s.student_enrollment_type,
            s.student_arrival_date,
            s.student_is_arrival_from,
            s.student_phone_number,
            s.student_is_finished_edu_type,
            s.student_residence_type,
            s.student_study_duration,
            s.student_study_course,
            s.student_edu_lang,
            s.student_edu_form,
            s.student_edu_speciality,
            s.student_edu_classifier,
            s.student_is_study_in_dual_system,
            s.student_is_need_hostel_type,
            s.student_is_live_at_hostel,
            s.student_financing_source_type,
            s.student_quota,
            s.student_is_involved_in_social_activities,
            s.student_is_orphan,
            s.student_is_without_parental_care,
            s.student_is_disabled_person,
            s.student_material_assistance_type,
            s.student_is_from_young_family,
            s.student_is_has_access_to_exams,
            s.student_is_study_in_productive_employment,
            s.student_is_completed_training_at_competence_center,
            s.student_is_study_in_worldskills,
            s.id_group,
            u.user_id AS user_user_id,
            u.login,
            u.email AS "Email",
            u.first_name,
            u.last_name,
            u.patronymic,
            u.created_at AS user_created_at,
            u.updated_at AS user_updated_at,
            g.id_gender,
            g.gender,
            n.id_nationality,
            n.nationality,
            te.id_typeenrollment,
            te.typeenrollment,
            c.id_citizenship,
            c.citizenship,
            c.country_id,
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
            l.id_languageofedu AS language_id_languageofedu,
            l.languageofedu AS language_languageofedu,
            l.id_languageofedu AS language_id_languages,
            l.languageofedu AS language_name,
            tt.id_typeoftraining,
            tt.typeoftraining,
            sp.id_spec,
            sp.shifr_spec,
            sp.speciality,
            sp.level_of_education,
            q.id_qual,
            q.shifr_qual,
            q.qualification,
            q.specialty_id,
            q.sort,
            nh.id_needhostel,
            nh.needhostel,
            wp.id_whopaying,
            wp.whopaying,
            k.id_kvotum,
            k.kvotum_name,
            fp.id_finimatpomosh,
            fp.finimatpomosh,
            grp.id_group AS group_id_group,
            grp.name AS group_name,
            grp.id_language AS group_id_language,
            grp.enrollment_year,
            grp.id_specialty AS group_id_specialty,
            grp.id_education_base,
            grp.course AS group_course,
            grp.study_duration AS group_study_duration,
            grp.is_full_time,
            grp.short_name,
            grp.serial_number,
            grp.code AS group_code
        FROM students s
        LEFT JOIN users u ON s.user_id = u.user_id
        LEFT JOIN gender g ON s.student_gender = g.id_gender
        LEFT JOIN nationality n ON s.student_nationality = n.id_nationality
        LEFT JOIN typeenrollment te ON s.student_enrollment_type = te.id_typeenrollment
        LEFT JOIN citizenship c ON s.student_citizenship = c.id_citizenship
        LEFT JOIN comesfrom cf ON s.student_is_arrival_from = cf.id_comesfrom
        LEFT JOIN fromacceptedfinished faf ON s.student_is_finished_edu_type = faf.id_fromacceptedfinished
        LEFT JOIN typeofareaofresidence tar ON s.student_residence_type = tar.id_typeofareaofresidence
        LEFT JOIN durationoftraining dt ON s.student_study_duration = dt.id_durationoftraining
        LEFT JOIN courseoftraining ct ON s.student_study_course = ct.id_courseoftraining
        LEFT JOIN languageofedu l ON s.student_edu_lang = l.id_languageofedu
        LEFT JOIN typeoftraining tt ON s.student_edu_form = tt.id_typeoftraining
        LEFT JOIN specialty sp ON s.student_edu_speciality = sp.id_spec
        LEFT JOIN qualification q ON s.student_edu_classifier = q.id_qual
        LEFT JOIN needhostel nh ON s.student_is_need_hostel_type = nh.id_needhostel
        LEFT JOIN whopaying wp ON s.student_financing_source_type = wp.id_whopaying
        LEFT JOIN kvotum k ON s.student_quota = k.id_kvotum
        LEFT JOIN finimatpomosh fp ON s.student_material_assistance_type = fp.id_finimatpomosh
        LEFT JOIN groups grp ON s.id_group = grp.id_group
        WHERE s.students_id = $1
    `;
    const result = await pool.query(query, [id]);
    if (!result.rows[0]) return null;

    const row = result.rows[0];
    return {
        user_id: row.user_id,
        students_id: row.students_id,
        student_govid: row.student_govid,
        student_birth_date: row.student_birth_date,
        student_reason_for_missing_govid_type: row.student_reason_for_missing_govid_type,
        student_gender: row.student_gender,
        student_citizenship: row.student_citizenship,
        student_nationality: row.student_nationality,
        student_govid_serial: row.student_govid_serial,
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
        student_is_involved_in_social_activities: row.student_is_involved_in_social_activities,
        student_is_orphan: row.student_is_orphan,
        student_is_without_parental_care: row.student_is_without_parental_care,
        student_is_disabled_person: row.student_is_disabled_person,
        student_material_assistance_type: row.student_material_assistance_type,
        student_is_from_young_family: row.student_is_from_young_family,
        student_is_has_access_to_exams: row.student_is_has_access_to_exams,
        student_is_study_in_productive_employment: row.student_is_study_in_productive_employment,
        student_is_completed_training_at_competence_center: row.student_is_completed_training_at_competence_center,
        student_is_study_in_worldskills: row.student_is_study_in_worldskills,
        id_group: row.id_group,
        user: row.user_user_id ? {
            user_id: row.user_user_id,
            login: row.login,
            Email: row.Email,
            first_name: row.first_name,
            last_name: row.last_name,
            patronymic: row.patronymic,
            createdAt: row.user_created_at,
            updatedAt: row.user_updated_at
        } : null,
        gender: row.id_gender ? {
            id_gender: row.id_gender,
            gender: row.gender
        } : null,
        nationality: row.id_nationality ? {
            id_nationality: row.id_nationality,
            nationality: row.nationality
        } : null,
        typeenrollment: row.id_typeenrollment ? {
            id_typeenrollment: row.id_typeenrollment,
            typeenrollment: row.typeenrollment
        } : null,
        citizenship: row.id_citizenship ? {
            id_citizenship: row.id_citizenship,
            citizenship: row.citizenship,
            country_id: row.country_id
        } : null,
        comesfrom: row.id_comesfrom ? {
            id_comesfrom: row.id_comesfrom,
            comesfrom: row.comesfrom
        } : null,
        fromacceptedfinished: row.id_fromacceptedfinished ? {
            id_fromacceptedfinished: row.id_fromacceptedfinished,
            fromacceptedfinished: row.fromacceptedfinished
        } : null,
        typeofareaofresidence: row.id_typeofareaofresidence ? {
            id_typeofareaofresidence: row.id_typeofareaofresidence,
            typeofareaofresidence: row.typeofareaofresidence
        } : null,
        durationoftraining: row.id_durationoftraining ? {
            id_durationoftraining: row.id_durationoftraining,
            durationoftraining: row.durationoftraining
        } : null,
        courseoftraining: row.id_courseoftraining ? {
            id_courseoftraining: row.id_courseoftraining,
            courseoftraining: row.courseoftraining,
            coursevalue: row.coursevalue
        } : null,
        language: row.language_id_languageofedu ? {
            id_languageofedu: row.language_id_languageofedu,
            language: row.language_languageofedu,
            languageofedu: row.language_languageofedu,
            id_languages: row.language_id_languages,
            name: row.language_name
        } : null,
        typeoftraining: row.id_typeoftraining ? {
            id_typeoftraining: row.id_typeoftraining,
            typeoftraining: row.typeoftraining
        } : null,
        specialty: row.id_spec ? {
            id_spec: row.id_spec,
            shifr_spec: row.shifr_spec,
            speciality: row.speciality,
            level_of_education: row.level_of_education
        } : null,
        qualification: row.id_qual ? {
            id_qual: row.id_qual,
            shifr_qual: row.shifr_qual,
            qualification: row.qualification,
            specialty_id: row.specialty_id,
            sort: row.sort
        } : null,
        needhostel: row.id_needhostel ? {
            id_needhostel: row.id_needhostel,
            needhostel: row.needhostel
        } : null,
        whopaying: row.id_whopaying ? {
            id_whopaying: row.id_whopaying,
            whopaying: row.whopaying
        } : null,
        kvotum: row.id_kvotum ? {
            id_kvotum: row.id_kvotum,
            kvotum: row.kvotum_name
        } : null,
        finimatpomosh: row.id_finimatpomosh ? {
            id_finimatpomosh: row.id_finimatpomosh,
            finimatpomosh: row.finimatpomosh
        } : null,
        group: row.group_id_group ? {
            id_group: row.group_id_group,
            name: row.group_name,
            id_language: row.group_id_language,
            enrollment_year: row.enrollment_year,
            id_specialty: row.group_id_specialty,
            id_education_base: row.id_education_base,
            course: row.group_course,
            study_duration: row.group_study_duration,
            is_full_time: row.is_full_time,
            short_name: row.short_name,
            serial_number: row.serial_number,
            code: row.group_code
        } : null,
        languageofedu: row.language_id_languageofedu ? {
            id_languageofedu: row.language_id_languageofedu,
            language: row.language_languageofedu,
            languageofedu: row.language_languageofedu,
            id_languages: row.language_id_languages,
            name: row.language_name
        } : null
    };
};

export const createStudent = async (data) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const userData = {
            login: data.login,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            patronymic: data.patronymic,
        };
        if (!userData.login || !userData.email || !data.password) {
            throw new Error('login, email и password обязательны');
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
            throw new Error('Неверный формат email');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const userQuery = `
            INSERT INTO users (login, password, email, first_name, last_name, patronymic, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            RETURNING user_id
        `;
        const userValues = [
            userData.login,
            hashedPassword,
            userData.email,
            userData.first_name,
            userData.last_name,
            userData.patronymic,
        ];
        const userResult = await client.query(userQuery, userValues);
        const userId = userResult.rows[0].user_id;

        const studentData = {
            user_id: userId,
            student_govid: data.govid,
            student_birth_date: data.birth_date,
            student_reason_for_missing_govid_type: data.reason_for_missing_govid_id,
            student_gender: data.gender_id,
            student_citizenship: data.citizenship_id,
            student_nationality: data.nationality_id,
            student_govid_issue_date: data.govid_issue_date,
            student_residential_address: data.residential_address,
            student_temporary_residence_address: data.temporary_residence_address,
            student_enrollment_type: data.enrollment_type_id,
            student_arrival_date: data.arrival_date,
            student_is_arrival_from: data.is_arrival_from_id,
            student_phone_number: data.phone_number,
            student_is_finished_edu_type: data.is_finished_edu_type_id,
            student_residence_type: data.residence_type_id,
            student_study_duration: data.study_duration_id,
            student_study_course: data.study_course_id,
            student_edu_lang: data.edu_lang_id,
            student_edu_form: data.edu_form_id,
            student_edu_speciality: data.edu_speciality_id,
            student_edu_classifier: data.edu_classifier_id,
            student_is_study_in_dual_system: data.is_study_in_dual_system,
            student_is_need_hostel_type: data.is_need_hostel_type_id,
            student_is_live_at_hostel: data.is_live_at_hostel,
            student_financing_source_type: data.financing_source_type_id,
            student_quota: data.quota_id,
            student_is_involved_in_social_activities: data.is_involved_in_social_activities,
            student_is_orphan: data.is_orphan,
            student_is_without_parental_care: data.is_without_parental_care,
            student_is_disabled_person: data.is_disabled_person,
            student_material_assistance_type: data.material_assistance_type_id,
            student_is_from_young_family: data.is_from_young_family,
            student_is_has_access_to_exams: data.is_from_young_family, // Предполагается, что это ошибка в JSON, исправлено на is_has_access_to_exams
            student_is_study_in_productive_employment: data.is_study_in_productive_employment,
            student_is_completed_training_at_competence_center: data.is_completed_training_at_competence_center,
            student_is_study_in_worldskills: data.is_study_in_worldskills,
        };
        const validationErrors = StudentModel.validate(studentData);
        if (validationErrors) {
            throw new Error(`Ошибки валидации: ${validationErrors.join(', ')}`);
        }

        const foreignKeys = [
            { table: 'gender', column: 'id_gender', value: studentData.student_gender },
            { table: 'nationality', column: 'id_nationality', value: studentData.student_nationality },
            { table: 'citizenship', column: 'id_citizenship', value: studentData.student_citizenship },
            { table: 'typeenrollment', column: 'id_typeenrollment', value: studentData.student_enrollment_type },
            { table: 'comesfrom', column: 'id_comesfrom', value: studentData.student_is_arrival_from },
            { table: 'fromacceptedfinished', column: 'id_fromacceptedfinished', value: studentData.student_is_finished_edu_type },
            { table: 'typeofareaofresidence', column: 'id_typeofareaofresidence', value: studentData.student_residence_type },
            { table: 'durationoftraining', column: 'id_durationoftraining', value: studentData.student_study_duration },
            { table: 'courseoftraining', column: 'id_courseoftraining', value: studentData.student_study_course },
            { table: 'languageofedu', column: 'id_languageofedu', value: studentData.student_edu_lang },
            { table: 'typeoftraining', column: 'id_typeoftraining', value: studentData.student_edu_form },
            { table: 'specialty', column: 'id_spec', value: studentData.student_edu_speciality },
            { table: 'qualification', column: 'id_qual', value: studentData.student_edu_classifier },
            { table: 'needhostel', column: 'id_needhostel', value: studentData.student_is_need_hostel_type },
            { table: 'whopaying', column: 'id_whopaying', value: studentData.student_financing_source_type },
            { table: 'kvotum', column: 'id_kvotum', value: studentData.student_quota },
            { table: 'finimatpomosh', column: 'id_finimatpomosh', value: studentData.student_material_assistance_type },
        ];
        for (const fk of foreignKeys) {
            if (fk.value !== null && fk.value !== undefined) {
                const checkQuery = `SELECT 1 FROM ${fk.table} WHERE ${fk.column} = $1`;
                const checkResult = await client.query(checkQuery, [fk.value]);
                if (checkResult.rows.length === 0) {
                    throw new Error(`Недопустимое значение ${fk.column} = ${fk.value} в таблице ${fk.table}`);
                }
            }
        }

        const studentQuery = `
            INSERT INTO students (
                user_id, student_govid, student_birth_date, student_reason_for_missing_govid_type,
                student_gender, student_citizenship, student_nationality, student_govid_issue_date,
                student_residential_address, student_temporary_residence_address, student_enrollment_type,
                student_arrival_date, student_is_arrival_from, student_phone_number, student_is_finished_edu_type,
                student_residence_type, student_study_duration, student_study_course, student_edu_lang,
                student_edu_form, student_edu_speciality, student_edu_classifier, student_is_study_in_dual_system,
                student_is_need_hostel_type, student_is_live_at_hostel, student_financing_source_type, student_quota,
                student_is_involved_in_social_activities, student_is_orphan, student_is_without_parental_care,
                student_is_disabled_person, student_material_assistance_type, student_is_from_young_family,
                student_is_has_access_to_exams, student_is_study_in_productive_employment,
                student_is_completed_training_at_competence_center, student_is_study_in_worldskills
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18,
                $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37
            ) RETURNING students_id
        `;
        const studentValues = [
            studentData.user_id,
            studentData.student_govid,
            studentData.student_birth_date,
            studentData.student_reason_for_missing_govid_type,
            studentData.student_gender,
            studentData.student_citizenship,
            studentData.student_nationality,
            studentData.student_govid_issue_date,
            studentData.student_residential_address,
            studentData.student_temporary_residence_address,
            studentData.student_enrollment_type,
            studentData.student_arrival_date,
            studentData.student_is_arrival_from,
            studentData.student_phone_number,
            studentData.student_is_finished_edu_type,
            studentData.student_residence_type,
            studentData.student_study_duration,
            studentData.student_study_course,
            studentData.student_edu_lang,
            studentData.student_edu_form,
            studentData.student_edu_speciality,
            studentData.student_edu_classifier,
            studentData.student_is_study_in_dual_system,
            studentData.student_is_need_hostel_type,
            studentData.student_is_live_at_hostel,
            studentData.student_financing_source_type,
            studentData.student_quota,
            studentData.student_is_involved_in_social_activities,
            studentData.student_is_orphan,
            studentData.student_is_without_parental_care,
            studentData.student_is_disabled_person,
            studentData.student_material_assistance_type,
            studentData.student_is_from_young_family,
            studentData.student_is_has_access_to_exams,
            studentData.student_is_study_in_productive_employment,
            studentData.student_is_completed_training_at_competence_center,
            studentData.student_is_study_in_worldskills,
        ];
        const studentResult = await client.query(studentQuery, studentValues);
        const studentId = studentResult.rows[0].students_id;

        await client.query('COMMIT');
        return studentId;
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};

export const updateStudent = async (id, data) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const studentQuery = `SELECT user_id FROM students WHERE students_id = $1`;
        const studentResult = await client.query(studentQuery, [id]);
        if (studentResult.rows.length === 0) {
            throw new Error('Студент не найден');
        }
        const userId = studentResult.rows[0].user_id;

        const userFields = {
            login: data.login,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            patronymic: data.patronymic,
        };
        if (Object.values(userFields).some((v) => v !== undefined)) {
            if (userFields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userFields.email)) {
                throw new Error('Неверный формат email');
            }
            const userUpdates = [];
            const userValues = [];
            let paramIndex = 1;
            if (userFields.login !== undefined) {
                userUpdates.push(`login = $${paramIndex++}`);
                userValues.push(userFields.login);
            }
            if (userFields.email !== undefined) {
                userUpdates.push(`email = $${paramIndex++}`);
                userValues.push(userFields.email);
            }
            if (userFields.first_name !== undefined) {
                userUpdates.push(`first_name = $${paramIndex++}`);
                userValues.push(userFields.first_name);
            }
            if (userFields.last_name !== undefined) {
                userUpdates.push(`last_name = $${paramIndex++}`);
                userValues.push(userFields.last_name);
            }
            if (userFields.patronymic !== undefined) {
                userUpdates.push(`patronymic = $${paramIndex++}`);
                userValues.push(userFields.patronymic);
            }
            userUpdates.push(`updated_at = CURRENT_TIMESTAMP`);
            const userQuery = `UPDATE users SET ${userUpdates.join(', ')} WHERE user_id = $${paramIndex}`;
            userValues.push(userId);
            await client.query(userQuery, userValues);
        }

        const studentData = {
            student_govid: data.govid,
            student_birth_date: data.birth_date,
            student_reason_for_missing_govid_type: data.reason_for_missing_govid_id,
            student_gender: data.gender_id,
            student_citizenship: data.citizenship_id,
            student_nationality: data.nationality_id,
            student_govid_issue_date: data.govid_issue_date,
            student_residential_address: data.residential_address,
            student_temporary_residence_address: data.temporary_residence_address,
            student_enrollment_type: data.enrollment_type_id,
            student_arrival_date: data.arrival_date,
            student_is_arrival_from: data.is_arrival_from_id,
            student_phone_number: data.phone_number,
            student_is_finished_edu_type: data.is_finished_edu_type_id,
            student_residence_type: data.residence_type_id,
            student_study_duration: data.study_duration_id,
            student_study_course: data.study_course_id,
            student_edu_lang: data.edu_lang_id,
            student_edu_form: data.edu_form_id,
            student_edu_speciality: data.edu_speciality_id,
            student_edu_classifier: data.edu_classifier_id,
            student_is_study_in_dual_system: data.is_study_in_dual_system,
            student_is_need_hostel_type: data.is_need_hostel_type_id,
            student_is_live_at_hostel: data.is_live_at_hostel,
            student_financing_source_type: data.financing_source_type_id,
            student_quota: data.quota_id,
            student_is_involved_in_social_activities: data.is_involved_in_social_activities,
            student_is_orphan: data.is_orphan,
            student_is_without_parental_care: data.is_without_parental_care,
            student_is_disabled_person: data.is_disabled_person,
            student_material_assistance_type: data.material_assistance_type_id,
            student_is_from_young_family: data.is_from_young_family,
            student_is_has_access_to_exams: data.is_from_young_family, // Исправлено на is_has_access_to_exams
            student_is_study_in_productive_employment: data.is_study_in_productive_employment,
            student_is_completed_training_at_competence_center: data.is_completed_training_at_competence_center,
            student_is_study_in_worldskills: data.is_study_in_worldskills,
        };
        const validationErrors = StudentModel.validate(studentData);
        if (validationErrors) {
            throw new Error(`Ошибки валидации: ${validationErrors.join(', ')}`);
        }

        const foreignKeys = [
            { table: 'gender', column: 'id_gender', value: studentData.student_gender },
            { table: 'nationality', column: 'id_nationality', value: studentData.student_nationality },
            { table: 'citizenship', column: 'id_citizenship', value: studentData.student_citizenship },
            { table: 'typeenrollment', column: 'id_typeenrollment', value: studentData.student_enrollment_type },
            { table: 'comesfrom', column: 'id_comesfrom', value: studentData.student_is_arrival_from },
            { table: 'fromacceptedfinished', column: 'id_fromacceptedfinished', value: studentData.student_is_finished_edu_type },
            { table: 'typeofareaofresidence', column: 'id_typeofareaofresidence', value: studentData.student_residence_type },
            { table: 'durationoftraining', column: 'id_durationoftraining', value: studentData.student_study_duration },
            { table: 'courseoftraining', column: 'id_courseoftraining', value: studentData.student_study_course },
            { table: 'languageofedu', column: 'id_languageofedu', value: studentData.student_edu_lang },
            { table: 'typeoftraining', column: 'id_typeoftraining', value: studentData.student_edu_form },
            { table: 'specialty', column: 'id_spec', value: studentData.student_edu_speciality },
            { table: 'qualification', column: 'id_qual', value: studentData.student_edu_classifier },
            { table: 'needhostel', column: 'id_needhostel', value: studentData.student_is_need_hostel_type },
            { table: 'whopaying', column: 'id_whopaying', value: studentData.student_financing_source_type },
            { table: 'kvotum', column: 'id_kvotum', value: studentData.student_quota },
            { table: 'finimatpomosh', column: 'id_finimatpomosh', value: studentData.student_material_assistance_type },
        ];
        for (const fk of foreignKeys) {
            if (fk.value !== null && fk.value !== undefined) {
                const checkQuery = `SELECT 1 FROM ${fk.table} WHERE ${fk.column} = $1`;
                const checkResult = await client.query(checkQuery, [fk.value]);
                if (checkResult.rows.length === 0) {
                    throw new Error(`Недопустимое значение ${fk.column} = ${fk.value} в таблице ${fk.table}`);
                }
            }
        }

        const studentUpdates = [];
        const studentValues = [];
        let paramIndex = 1;
        for (const [key, value] of Object.entries(studentData)) {
            if (value !== undefined) {
                studentUpdates.push(`${key} = $${paramIndex++}`);
                studentValues.push(value);
            }
        }
        if (studentUpdates.length > 0) {
            studentUpdates.push(`created_at = CURRENT_TIMESTAMP`);
            const studentQuery = `UPDATE students SET ${studentUpdates.join(', ')} WHERE students_id = $${paramIndex}`;
            studentValues.push(id);
            const result = await client.query(studentQuery, studentValues);
            if (result.rowCount === 0) {
                throw new Error('Студент не найден');
            }
        }

        await client.query('COMMIT');
        return id;
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};

export const deleteStudent = async (id) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const studentQuery = `SELECT user_id FROM students WHERE students_id = $1`;
        const studentResult = await client.query(studentQuery, [id]);
        if (studentResult.rows.length === 0) {
            throw new Error('Студент не найден');
        }
        const userId = studentResult.rows[0].user_id;

        const deleteStudentQuery = `DELETE FROM students WHERE students_id = $1`;
        const deleteStudentResult = await client.query(deleteStudentQuery, [id]);
        if (deleteStudentResult.rowCount === 0) {
            throw new Error('Студент не найден');
        }

        const deleteUserQuery = `DELETE FROM users WHERE user_id = $1`;
        await client.query(deleteUserQuery, [userId]);

        await client.query('COMMIT');
        return id;
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};
