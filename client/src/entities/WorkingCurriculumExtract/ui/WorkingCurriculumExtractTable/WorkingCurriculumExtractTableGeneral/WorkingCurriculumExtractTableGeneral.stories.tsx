import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtractTableGeneral } from './WorkingCurriculumExtractTableGeneral';

export default {
    title: 'shared/WorkingCurriculumExtractTableGeneral',
    component: WorkingCurriculumExtractTableGeneral,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractTableGeneral>;

const Template: ComponentStory<typeof WorkingCurriculumExtractTableGeneral> = (args) => <WorkingCurriculumExtractTableGeneral {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
