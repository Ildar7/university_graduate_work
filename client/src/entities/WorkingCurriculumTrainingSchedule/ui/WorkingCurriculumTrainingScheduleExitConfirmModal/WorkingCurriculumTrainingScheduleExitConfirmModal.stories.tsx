import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculumTrainingScheduleExitConfirmModal } from './WorkingCurriculumTrainingScheduleExitConfirmModal';

export default {
    title: 'shared/WorkingCurriculumTrainingScheduleExitConfirmModal',
    component: WorkingCurriculumTrainingScheduleExitConfirmModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculumTrainingScheduleExitConfirmModal>;

const Template: ComponentStory<typeof WorkingCurriculumTrainingScheduleExitConfirmModal> = (args) => <WorkingCurriculumTrainingScheduleExitConfirmModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
