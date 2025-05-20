import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumTrainingScheduleSummaryData } from './WorkingCurriculumTrainingScheduleSummaryData';

export default {
    title: 'pages/WorkingCurriculumTrainingScheduleSummaryData',
    component: WorkingCurriculumTrainingScheduleSummaryData,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumTrainingScheduleSummaryData>;

const Template: ComponentStory<typeof WorkingCurriculumTrainingScheduleSummaryData> = (args) => <WorkingCurriculumTrainingScheduleSummaryData {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
