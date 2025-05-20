import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtractTable } from './WorkingCurriculumExtractTable';

export default {
    title: 'shared/WorkingCurriculumExtractTable',
    component: WorkingCurriculumExtractTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractTable>;

const Template: ComponentStory<typeof WorkingCurriculumExtractTable> = (args) => <WorkingCurriculumExtractTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
