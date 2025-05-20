import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumTrainingSchedule } from './WorkingCurriculumTrainingSchedule';

export default {
    title: 'pages/TrainingScheduleDetail',
    component: WorkingCurriculumTrainingSchedule,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumTrainingSchedule>;

const Template: ComponentStory<typeof WorkingCurriculumTrainingSchedule> = (args) => <WorkingCurriculumTrainingSchedule {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
