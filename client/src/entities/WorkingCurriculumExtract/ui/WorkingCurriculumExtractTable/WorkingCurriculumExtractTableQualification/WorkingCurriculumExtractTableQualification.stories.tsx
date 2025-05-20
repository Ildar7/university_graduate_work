import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtractTableQualification } from './WorkingCurriculumExtractTableQualification';

export default {
    title: 'shared/WorkingCurriculumExtractTableQualification',
    component: WorkingCurriculumExtractTableQualification,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractTableQualification>;

const Template: ComponentStory<typeof WorkingCurriculumExtractTableQualification> = (args) => <WorkingCurriculumExtractTableQualification {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
