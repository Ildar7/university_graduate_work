import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SubjectsScheduleWorkloadPage from './SubjectsScheduleWorkloadPage';

export default {
    title: 'shared/SubjectsScheduleWorkloadPage',
    component: SubjectsScheduleWorkloadPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleWorkloadPage>;

const Template: ComponentStory<typeof SubjectsScheduleWorkloadPage> = (args) => <SubjectsScheduleWorkloadPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
