import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumTrainingScheduleGeneralInfo } from './WorkingCurriculumTrainingScheduleGeneralInfo';

export default {
    title: 'pages/WorkingCurriculumTrainingScheduleGeneralInfo',
    component: WorkingCurriculumTrainingScheduleGeneralInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumTrainingScheduleGeneralInfo>;

const Template: ComponentStory<typeof WorkingCurriculumTrainingScheduleGeneralInfo> = (args) => <WorkingCurriculumTrainingScheduleGeneralInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
