import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TrainingScheduleDetailTableCell } from './TrainingScheduleDetailTableCell';

export default {
    title: 'pages/TrainingScheduleDetailTableCell',
    component: TrainingScheduleDetailTableCell,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TrainingScheduleDetailTableCell>;

const Template: ComponentStory<typeof TrainingScheduleDetailTableCell> = (args) => <TrainingScheduleDetailTableCell {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
