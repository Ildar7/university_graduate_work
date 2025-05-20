import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtractTableContent } from './WorkingCurriculumExtractTableContent';

export default {
    title: 'shared/WorkingCurriculumExtractTableContent',
    component: WorkingCurriculumExtractTableContent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractTableContent>;

const Template: ComponentStory<typeof WorkingCurriculumExtractTableContent> = (args) => <WorkingCurriculumExtractTableContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
