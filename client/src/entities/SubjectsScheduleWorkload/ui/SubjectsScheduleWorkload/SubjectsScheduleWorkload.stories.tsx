import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubjectsScheduleWorkload } from './SubjectsScheduleWorkload';

export default {
    title: 'shared/SubjectsScheduleWorkload',
    component: SubjectsScheduleWorkload,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleWorkload>;

const Template: ComponentStory<typeof SubjectsScheduleWorkload> = (args) => <SubjectsScheduleWorkload {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
