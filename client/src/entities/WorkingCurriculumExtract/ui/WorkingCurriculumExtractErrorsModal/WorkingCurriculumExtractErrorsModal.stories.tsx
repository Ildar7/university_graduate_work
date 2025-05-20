import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtractErrorsModal } from './WorkingCurriculumExtractErrorsModal';

export default {
    title: 'shared/WorkingCurriculumExtractErrorsModal',
    component: WorkingCurriculumExtractErrorsModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractErrorsModal>;

const Template: ComponentStory<typeof WorkingCurriculumExtractErrorsModal> = (args) => <WorkingCurriculumExtractErrorsModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
