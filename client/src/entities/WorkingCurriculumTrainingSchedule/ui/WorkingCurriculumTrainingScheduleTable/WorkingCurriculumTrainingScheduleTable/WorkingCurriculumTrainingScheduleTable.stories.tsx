import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumTrainingScheduleTable } from './WorkingCurriculumTrainingScheduleTable';

export default {
    title: 'pages/TrainingScheduleDetailTable',
    component: WorkingCurriculumTrainingScheduleTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumTrainingScheduleTable>;

const Template: ComponentStory<typeof WorkingCurriculumTrainingScheduleTable> = (args) => <WorkingCurriculumTrainingScheduleTable {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
