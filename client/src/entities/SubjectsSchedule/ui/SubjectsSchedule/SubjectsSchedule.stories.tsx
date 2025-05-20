import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubjectsSchedule } from './SubjectsSchedule';

export default {
    title: 'shared/SubjectsSchedule',
    component: SubjectsSchedule,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsSchedule>;

const Template: ComponentStory<typeof SubjectsSchedule> = (args) => <SubjectsSchedule {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
