export interface SettingsMainTabs {
    title: string;
    name: string;
    active: boolean;
}

export interface SettingsMainCollegeInnerData {
    id: number;
    name: string;
    title: string;
    type: string;
    value: string | number;
    sort: number;
}
export interface SettingsMainCollegeData {
    [name: string]: {
        title: string;
        options: SettingsMainCollegeInnerData[];
    };
}

export interface SettingsMainCollegeSchema {
    data?: SettingsMainCollegeData;
    dataToChange?: SettingsMainCollegeData;
    tabs?: SettingsMainTabs[];
    isLoadingCollegeData: boolean;
    errorCollegeData?: string;
    changeStatus?: string;
    isLoadingChangeField: boolean;
    errorChangeField?: string;
}
