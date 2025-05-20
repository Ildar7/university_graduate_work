import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TrainingScheduleDetail } from './TrainingScheduleDetail';

export default {
    title: 'pages/TrainingScheduleDetail',
    component: TrainingScheduleDetail,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TrainingScheduleDetail>;

const Template: ComponentStory<typeof TrainingScheduleDetail> = (args) => <TrainingScheduleDetail {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
