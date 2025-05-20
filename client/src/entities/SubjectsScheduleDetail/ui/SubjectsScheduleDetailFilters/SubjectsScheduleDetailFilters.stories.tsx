import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubjectsScheduleDetailFilters } from './SubjectsScheduleDetailFilters';

export default {
    title: 'shared/SubjectsScheduleDetailFilters',
    component: SubjectsScheduleDetailFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleDetailFilters>;

const Template: ComponentStory<typeof SubjectsScheduleDetailFilters> = (args) => <SubjectsScheduleDetailFilters {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
