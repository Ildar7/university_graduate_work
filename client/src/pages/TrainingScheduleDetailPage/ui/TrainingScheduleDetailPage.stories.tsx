import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TrainingScheduleDetailPage from './TrainingScheduleDetailPage';

export default {
    title: 'pages/TrainingScheduleDetailPage',
    component: TrainingScheduleDetailPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TrainingScheduleDetailPage>;

const Template: ComponentStory<typeof TrainingScheduleDetailPage> = (args) => <TrainingScheduleDetailPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
