import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TrainingScheduleDetailTable } from './TrainingScheduleDetailTable';

export default {
    title: 'pages/TrainingScheduleDetailTable',
    component: TrainingScheduleDetailTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TrainingScheduleDetailTable>;

const Template: ComponentStory<typeof TrainingScheduleDetailTable> = (args) => <TrainingScheduleDetailTable {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
