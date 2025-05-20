import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubjectsScheduleTable } from './SubjectsScheduleTable';

export default {
    title: 'shared/SubjectsScheduleTable',
    component: SubjectsScheduleTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleTable>;

const Template: ComponentStory<typeof SubjectsScheduleTable> = (args) => <SubjectsScheduleTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
