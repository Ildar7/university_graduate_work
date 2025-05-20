import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WorkingCurriculumExtractPage from './WorkingCurriculumExtractPage';

export default {
    title: 'pages/TrainingScheduleDetailPage',
    component: WorkingCurriculumExtractPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractPage>;

const Template: ComponentStory<typeof WorkingCurriculumExtractPage> = (args) => <WorkingCurriculumExtractPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
