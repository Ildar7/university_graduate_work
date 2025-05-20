import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtractTableSubjects } from './WorkingCurriculumExtractTableSubjects';

export default {
    title: 'shared/WorkingCurriculumExtractTableSubjects',
    component: WorkingCurriculumExtractTableSubjects,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractTableSubjects>;

const Template: ComponentStory<typeof WorkingCurriculumExtractTableSubjects> = (args) => <WorkingCurriculumExtractTableSubjects {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
