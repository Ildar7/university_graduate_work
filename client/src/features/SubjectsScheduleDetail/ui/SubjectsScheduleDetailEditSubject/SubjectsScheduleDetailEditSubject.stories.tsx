import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubjectsScheduleDetailEditSubject } from './SubjectsScheduleDetailEditSubject';

export default {
    title: 'shared/SubjectsScheduleDetailEditSubject',
    component: SubjectsScheduleDetailEditSubject,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleDetailEditSubject>;

const Template: ComponentStory<typeof SubjectsScheduleDetailEditSubject> = (args) => <SubjectsScheduleDetailEditSubject {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
