import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtractTableEduActivities } from './WorkingCurriculumExtractTableEduActivities';

export default {
    title: 'shared/WorkingCurriculumExtractTableEduActivities',
    component: WorkingCurriculumExtractTableEduActivities,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractTableEduActivities>;

const Template: ComponentStory<typeof WorkingCurriculumExtractTableEduActivities> = (args) => <WorkingCurriculumExtractTableEduActivities {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
