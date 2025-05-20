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
        student_is_involved_in_social_activities: {
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
