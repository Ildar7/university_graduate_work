import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubjectsScheduleDetail } from './SubjectsScheduleDetail';

export default {
    title: 'shared/SubjectsScheduleDetail',
    component: SubjectsScheduleDetail,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleDetail>;

const Template: ComponentStory<typeof SubjectsScheduleDetail> = (args) => <SubjectsScheduleDetail {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
