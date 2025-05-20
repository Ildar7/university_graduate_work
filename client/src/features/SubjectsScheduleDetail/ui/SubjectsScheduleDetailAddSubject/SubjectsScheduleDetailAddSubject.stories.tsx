import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubjectsScheduleDetailAddSubject } from './SubjectsScheduleDetailAddSubject';

export default {
    title: 'shared/SubjectsScheduleDetailEditSubject',
    component: SubjectsScheduleDetailAddSubject,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleDetailAddSubject>;

const Template: ComponentStory<typeof SubjectsScheduleDetailAddSubject> = (args) => <SubjectsScheduleDetailAddSubject {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
