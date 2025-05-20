import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumTrainingScheduleTableCell } from './WorkingCurriculumTrainingScheduleTableCell';

export default {
    title: 'pages/TrainingScheduleDetailTableCell',
    component: WorkingCurriculumTrainingScheduleTableCell,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumTrainingScheduleTableCell>;

const Template: ComponentStory<typeof WorkingCurriculumTrainingScheduleTableCell> = (args) => <WorkingCurriculumTrainingScheduleTableCell {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
