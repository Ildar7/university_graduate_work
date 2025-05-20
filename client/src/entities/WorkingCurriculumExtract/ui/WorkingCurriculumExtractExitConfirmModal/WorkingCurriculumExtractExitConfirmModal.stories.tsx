import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumExtractExitConfirmModal } from './WorkingCurriculumExtractExitConfirmModal';

export default {
    title: 'shared/WorkingCurriculumExtractExitConfirmModal',
    component: WorkingCurriculumExtractExitConfirmModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumExtractExitConfirmModal>;

const Template: ComponentStory<typeof WorkingCurriculumExtractExitConfirmModal> = (args) => <WorkingCurriculumExtractExitConfirmModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
