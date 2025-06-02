import { StudentsType } from 'entities/Students';
import { EnrollmentTypesType } from 'entities/EnrollmentTypes';
import { EduLanguagesType } from 'entities/EduLanguages';
import { FinishedEduTypesType } from 'entities/FinishedEduTypes';
import { StudyDirectionsType } from 'entities/StudyDirections';
import { QualificationsType } from 'entities/Qualifications';
import { EduFormsType } from 'entities/EduForms';
import { ResidenceTypesType } from 'entities/ResidenceTypes';
import { SpecialtiesType } from 'entities/Specialties';
import { FinSourcesType } from 'entities/FinSources';
import { ArrivalSourcesType } from 'entities/ArrivalSources';
import { EducationalModulesData, EducationalUnitsData } from 'entities/EducationalModules';
import { CurriculumSubjectsType } from 'entities/CurriculumSubjects';
import { StudentGroupsType } from 'entities/StudentGroups';

export const studentSearchFilter = (searchText: string, studentsList: StudentsType[]) => {
    if (!searchText) {
        return studentsList;
    }

    return studentsList.filter(({ fio }) => (fio.toLowerCase().includes(searchText.toLowerCase())));
};

export const enrollmentTypesSearchFilter = (searchText: string, enrollmentTypesList: EnrollmentTypesType[]) => {
    if (!searchText) {
        return enrollmentTypesList;
    }

    return enrollmentTypesList.filter(({ typeenrollment }) => (typeenrollment.toLowerCase().includes(searchText.toLowerCase())));
};

export const eduLanguagesSearchFilter = (searchText: string, eduLanguagesList: EduLanguagesType[]) => {
    if (!searchText) {
        return eduLanguagesList;
    }

    return eduLanguagesList.filter(({ languageofedu }) => (languageofedu.toLowerCase().includes(searchText.toLowerCase())));
};

export const finishedEduTypesSearchFilter = (searchText: string, finishedEduTypesList: FinishedEduTypesType[]) => {
    if (!searchText) {
        return finishedEduTypesList;
    }

    return finishedEduTypesList
        .filter(({ fromacceptedfinished }) => (fromacceptedfinished.toLowerCase().includes(searchText.toLowerCase())));
};

export const studyDirectionsSearchFilter = (searchText: string, studyDirectionsList: StudyDirectionsType[]) => {
    if (!searchText) {
        return studyDirectionsList;
    }

    return studyDirectionsList
        .filter(({ typeofdirection }) => (typeofdirection.toLowerCase().includes(searchText.toLowerCase())));
};

export const qualificationsSearchFilter = (searchText: string, qualificationsList: QualificationsType[]) => {
    if (!searchText) {
        return qualificationsList;
    }

    return qualificationsList
        .filter(({ qualification }) => (qualification.toLowerCase().includes(searchText.toLowerCase())));
};

export const eduFormsSearchFilter = (searchText: string, eduFormsList: EduFormsType[]) => {
    if (!searchText) {
        return eduFormsList;
    }

    return eduFormsList
        .filter(({ typeoftraining }) => (typeoftraining.toLowerCase().includes(searchText.toLowerCase())));
};

export const residenceTypesSearchFilter = (searchText: string, residenceTypesList: ResidenceTypesType[]) => {
    if (!searchText) {
        return residenceTypesList;
    }

    return residenceTypesList
        .filter(({ typeofareaofresidence }) => (typeofareaofresidence.toLowerCase().includes(searchText.toLowerCase())));
};

export const specialtiesSearchFilter = (searchText: string, specialtiesList: SpecialtiesType[]) => {
    if (!searchText) {
        return specialtiesList;
    }

    return specialtiesList
        .filter(({ speciality }) => (speciality.toLowerCase().includes(searchText.toLowerCase())));
};

export const finSourcesSearchFilter = (searchText: string, finSourcesList: FinSourcesType[]) => {
    if (!searchText) {
        return finSourcesList;
    }

    return finSourcesList
        .filter(({ whopaying }) => (whopaying.toLowerCase().includes(searchText.toLowerCase())));
};

export const arrivalSourcesSearchFilter = (searchText: string, arrivalSourcesList: ArrivalSourcesType[]) => {
    if (!searchText) {
        return arrivalSourcesList;
    }

    return arrivalSourcesList
        .filter(({ comesfrom }) => (comesfrom.toLowerCase().includes(searchText.toLowerCase())));
};

export const importStudentsFieldSearchFilter = (searchText: string, importStudentsFieldList: string[]) => {
    if (!searchText) {
        return importStudentsFieldList;
    }

    return importStudentsFieldList
        .filter((value) => (value.toLowerCase().includes(searchText.toLowerCase())));
};

export const eduModulesAndUnitsSearchFilter = (
    searchText: string,
    eduModulesList: EducationalModulesData[],
    eduUnitsList: EducationalUnitsData[],
    // eslint-disable-next-line consistent-return
) => {
    if (!searchText) {
        return eduModulesList;
    }

    const searchedModules = eduModulesList.filter((item) => (
        item.name.toLowerCase().includes(searchText.toLowerCase())
    ));

    const searchedUnits = eduUnitsList.filter((item) => (
        item.name.toLowerCase().includes(searchText.toLowerCase())
    ));

    if (searchedModules.length && searchedUnits.length) {
        return searchedModules;
    }

    if (searchedModules.length && !searchedUnits.length) {
        return searchedModules;
    }

    if (!searchedModules.length && searchedUnits.length) {
        let modulesSearchedUnits: EducationalModulesData[] = [];
        const modulesLength = eduModulesList.length;

        for (let i = 0; i < modulesLength; i++) {
            const thisModuleId = eduModulesList[i].module_id;
            const filteredUnits = searchedUnits.filter((unit) => unit.module_id === thisModuleId);

            if (filteredUnits.length) {
                modulesSearchedUnits = [
                    ...modulesSearchedUnits,
                    ...eduModulesList
                        .filter((module) => module.module_id === filteredUnits[0].module_id),
                ];

                modulesSearchedUnits = modulesSearchedUnits.map((module) => (
                    module.module_id === filteredUnits[0].module_id
                        ? {
                            ...module,
                            units: [...filteredUnits],
                        } : {
                            ...module,
                        }
                ));
            }
        }

        return modulesSearchedUnits;
    }
};

export const curriculumSubjectsSearchFilter = (searchText: string, curriculumSubjectsList: CurriculumSubjectsType[]) => {
    if (!searchText) {
        return curriculumSubjectsList;
    }

    return curriculumSubjectsList.filter(({ name }) => (name.toLowerCase().includes(searchText.toLowerCase())));
};

export const studentGroupSearchFilter = (searchText: string, studentGroupsList: StudentGroupsType[]) => {
    if (!searchText) {
        return studentGroupsList;
    }

    const filteredList = [
        ...studentGroupsList.filter((group) => (
            group.name.toLowerCase().includes(searchText.toLowerCase())
        )),
        ...studentGroupsList.filter((group) => (
            group.code.toLowerCase().includes(searchText.toLowerCase())
        )),
    ];

    return filteredList;
};
