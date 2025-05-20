import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtractTableHead } from './WorkingCurriculumExtractTableHead';

export default {
    title: 'shared/WorkingCurriculumExtractTableHead',
    component: WorkingCurriculumExtractTableHead,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractTableHead>;

const Template: ComponentStory<typeof WorkingCurriculumExtractTableHead> = (args) => <WorkingCurriculumExtractTableHead {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
