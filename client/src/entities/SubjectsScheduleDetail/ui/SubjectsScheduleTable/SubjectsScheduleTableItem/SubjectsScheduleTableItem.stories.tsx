import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubjectsScheduleTableItem } from './SubjectsScheduleTableItem';

export default {
    title: 'shared/SubjectsScheduleTableItem',
    component: SubjectsScheduleTableItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleTableItem>;

const Template: ComponentStory<typeof SubjectsScheduleTableItem> = (args) => <SubjectsScheduleTableItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
