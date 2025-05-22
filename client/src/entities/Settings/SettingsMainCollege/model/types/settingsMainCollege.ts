export interface SettingsMainTabs {
    title: string;
    name: string;
    active: boolean;
}

export interface SettingsMainCollegeFetchedData {
    option_id: number;
    option_name: string;
    option_type: string;
    option_value: string;
    option_group: string;
    option_key: string;
}

export interface SettingsMainCollegeInnerData {
    id: number;
    name: string;
    type: string;
    value: string | number;
    group: string;
    key: string;
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
