import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumTrainingScheduleConfirmDeleting } from './WorkingCurriculumTrainingScheduleConfirmDeleting';

export default {
    title: 'pages/WorkingCurriculumTrainingScheduleConfirmDeleting',
    component: WorkingCurriculumTrainingScheduleConfirmDeleting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumTrainingScheduleConfirmDeleting>;

const Template: ComponentStory<typeof WorkingCurriculumTrainingScheduleConfirmDeleting> = (args) => <WorkingCurriculumTrainingScheduleConfirmDeleting {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
