import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WorkingCurriculumTrainingSchedulePage from './WorkingCurriculumTrainingSchedulePage';

export default {
    title: 'pages/TrainingScheduleDetailPage',
    component: WorkingCurriculumTrainingSchedulePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumTrainingSchedulePage>;

const Template: ComponentStory<typeof WorkingCurriculumTrainingSchedulePage> = (args) => <WorkingCurriculumTrainingSchedulePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
