import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumTrainingScheduleSelectEduModules } from './WorkingCurriculumTrainingScheduleSelectEduModules';

export default {
    title: 'pages/WorkingCurriculumTrainingScheduleSelectEduModules',
    component: WorkingCurriculumTrainingScheduleSelectEduModules,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumTrainingScheduleSelectEduModules>;

const Template: ComponentStory<typeof WorkingCurriculumTrainingScheduleSelectEduModules> = (args) => <WorkingCurriculumTrainingScheduleSelectEduModules {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
