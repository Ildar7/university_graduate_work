import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubjectsScheduleWorkloadTable } from './SubjectsScheduleWorkloadTable';

export default {
    title: 'shared/SubjectsScheduleClassRoomsWorkloadTable',
    component: SubjectsScheduleWorkloadTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleWorkloadTable>;

const Template: ComponentStory<typeof SubjectsScheduleWorkloadTable> = (args) => <SubjectsScheduleWorkloadTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
