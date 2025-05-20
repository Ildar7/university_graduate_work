import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtract } from './WorkingCurriculumExtract';

export default {
    title: 'shared/WorkingCurriculumExtract',
    component: WorkingCurriculumExtract,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtract>;

const Template: ComponentStory<typeof WorkingCurriculumExtract> = (args) => <WorkingCurriculumExtract {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
