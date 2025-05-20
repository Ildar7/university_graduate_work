import {
    AutoDistributionStudentGroupsGenerate,
} from './autoDistributionStudentGroupsGenerate';
import {
    AutoDistributionStudentGroupsMassLink,
} from './autoDistributionStudentGroupsMassLink';

export interface AutoDistributionStudentGroupsError {
    status: number;
    error: string;
}

export interface AutoDistributionStudentGroupsSchema {
    generatedDistribution: AutoDistributionStudentGroupsGenerate;
    massLink: AutoDistributionStudentGroupsMassLink;
}
