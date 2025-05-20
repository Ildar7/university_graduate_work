import { StudentsType } from 'entities/Students';
import { EnrollmentTypesType } from 'entities/EnrollmentTypes';
import { CitizenshipType } from 'entities/Citizenship';
import { NationalitiesType } from 'entities/Nationalities';
import { EduLanguagesType } from 'entities/EduLanguages';
import { FinishedEduTypesType } from 'entities/FinishedEduTypes';
import { EduCoursesType } from 'entities/EduCourses';
import { StudyDirectionsType } from 'entities/StudyDirections';
import { StudyDurationsType } from 'entities/StudyDurations';
import { QualificationsType } from 'entities/Qualifications';
import { EduFormsType } from 'entities/EduForms';
import { ResidenceTypesType } from 'entities/ResidenceTypes';
import { SpecialtiesType } from 'entities/Specialties';
import { FinSourcesType } from 'entities/FinSources';
import { ArrivalSourcesType } from 'entities/ArrivalSources';
import { PracticeTypesType } from 'entities/PracticeTypes';
import { EventsTypesType } from 'entities/EventsTypes';
import { StudentSectionsType } from 'entities/StudentSections';
import { PerformanceTypesType } from 'entities/PerformanceTypes';
import { StudentClubsType } from 'entities/StudentClubs';
import { EducationalModulesData, EducationalUnitsData } from 'entities/EducationalModules';
import { CurriculumSubjectsType } from 'entities/CurriculumSubjects';
import { StandardCurriculumType } from 'entities/StandardCurriculum';
import { WorkingCurriculumType } from 'entities/WorkingCurriculum';
import { StudentGroupsType } from 'entities/StudentGroups';
import { TrainingScheduleType } from 'entities/TrainingSchedule';
import { EmployeesType } from 'entities/Employees';
import { EmployeeCategoriesType } from 'entities/EmployeeCategories';
import { EmployeePositionsType } from 'entities/EmployeePositions';
import { EmployeeEducationsType } from 'entities/EmployeeEducations';

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

export const citizenshipSearchFilter = (searchText: string, citizenshipList: CitizenshipType[]) => {
    if (!searchText) {
        return citizenshipList;
    }

    return citizenshipList.filter(({ citizenship }) => (citizenship.toLowerCase().includes(searchText.toLowerCase())));
};

export const nationalitiesSearchFilter = (searchText: string, nationalitiesList: NationalitiesType[]) => {
    if (!searchText) {
        return nationalitiesList;
    }

    return nationalitiesList.filter(({ nationality }) => (nationality.toLowerCase().includes(searchText.toLowerCase())));
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

export const eduCoursesSearchFilter = (searchText: string, eduCoursesList: EduCoursesType[]) => {
    if (!searchText) {
        return eduCoursesList;
    }

    return eduCoursesList
        .filter(({ courseoftraining }) => (courseoftraining.toLowerCase().includes(searchText.toLowerCase())));
};

export const studyDirectionsSearchFilter = (searchText: string, studyDirectionsList: StudyDirectionsType[]) => {
    if (!searchText) {
        return studyDirectionsList;
    }

    return studyDirectionsList
        .filter(({ typeofdirection }) => (typeofdirection.toLowerCase().includes(searchText.toLowerCase())));
};

export const studyDurationsSearchFilter = (searchText: string, studyDurationsList: StudyDurationsType[]) => {
    if (!searchText) {
        return studyDurationsList;
    }

    return studyDurationsList
        .filter(({ durationoftraining }) => (durationoftraining.toLowerCase().includes(searchText.toLowerCase())));
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

export const practiceTypesSearchFilter = (searchText: string, practiceTypesList: PracticeTypesType[]) => {
    if (!searchText) {
        return practiceTypesList;
    }

    return practiceTypesList
        .filter(({ practice }) => (practice.toLowerCase().includes(searchText.toLowerCase())));
};

export const eventsTypesSearchFilter = (searchText: string, eventsTypesList: EventsTypesType[]) => {
    if (!searchText) {
        return eventsTypesList;
    }

    return eventsTypesList
        .filter(({ typeofevent }) => (typeofevent.toLowerCase().includes(searchText.toLowerCase())));
};

export const studentSectionsSearchFilter = (searchText: string, studentSectionsList: StudentSectionsType[]) => {
    if (!searchText) {
        return studentSectionsList;
    }

    return studentSectionsList
        .filter(({ sections }) => (sections.toLowerCase().includes(searchText.toLowerCase())));
};

export const performanceTypesSearchFilter = (searchText: string, performanceTypesList: PerformanceTypesType[]) => {
    if (!searchText) {
        return performanceTypesList;
    }

    return performanceTypesList
        .filter(({ academicperformancesemester }) => (academicperformancesemester.toLowerCase().includes(searchText.toLowerCase())));
};

export const studentClubsSearchFilter = (searchText: string, studentClubsList: StudentClubsType[]) => {
    if (!searchText) {
        return studentClubsList;
    }

    return studentClubsList
        .filter(({ clubs }) => (clubs.toLowerCase().includes(searchText.toLowerCase())));
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

export const standardCurriculumSearchFilter = (searchText: string, standardCurriculumList: StandardCurriculumType[]) => {
    if (!searchText) {
        return standardCurriculumList;
    }

    const filteredList = [
        ...standardCurriculumList.filter((curriculum) => (
            curriculum.specialty.shifr_spec.toLowerCase().includes(searchText.toLowerCase())
        )),
        ...standardCurriculumList.filter((curriculum) => (
            curriculum.specialty.speciality.toLowerCase().includes(searchText.toLowerCase())
        )),
    ];

    return filteredList;
};

export const workingCurriculumSearchFilter = (searchText: string, workingCurriculumList: WorkingCurriculumType[]) => {
    if (!searchText) {
        return workingCurriculumList;
    }

    const filteredList = [
        ...workingCurriculumList.filter((curriculum) => (
            curriculum.title.toLowerCase().includes(searchText.toLowerCase())
        )),
        ...workingCurriculumList.filter((curriculum) => (
            curriculum.standard_curricula.specialty.speciality.toLowerCase().includes(searchText.toLowerCase())
        )),
    ];

    return filteredList;
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

export const trainingScheduleSearchFilter = (searchText: string, trainingScheduleList: TrainingScheduleType[]) => {
    if (!searchText) {
        return trainingScheduleList;
    }

    return trainingScheduleList
        .filter((schedule) => (String(schedule.academic_year_from).includes(searchText)));
};

export const employeeSearchFilter = (searchText: string, employeeList: EmployeesType[]) => {
    if (!searchText) {
        return employeeList;
    }

    return employeeList.filter(({ fio }) => (fio.toLowerCase().includes(searchText.toLowerCase())));
};

export const employeeCategoriesSearchFilter = (searchText: string, employeeCategoriesList: EmployeeCategoriesType[]) => {
    if (!searchText) {
        return employeeCategoriesList;
    }

    return employeeCategoriesList.filter(({ name }) => (name.toLowerCase().includes(searchText.toLowerCase())));
};

export const employeePositionsSearchFilter = (searchText: string, employeePositionsList: EmployeePositionsType[]) => {
    if (!searchText) {
        return employeePositionsList;
    }

    return employeePositionsList.filter(({ name }) => (name.toLowerCase().includes(searchText.toLowerCase())));
};

export const employeeEducationsSearchFilter = (searchText: string, employeeEducationsList: EmployeeEducationsType[]) => {
    if (!searchText) {
        return employeeEducationsList;
    }

    return employeeEducationsList.filter(({ name }) => (name.toLowerCase().includes(searchText.toLowerCase())));
};
