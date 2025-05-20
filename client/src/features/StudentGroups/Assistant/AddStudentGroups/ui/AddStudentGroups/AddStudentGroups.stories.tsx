import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddStudentGroups } from './AddStudentGroups';

export default {
    title: 'shared/AddStudentGroups',
    component: AddStudentGroups,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddStudentGroups>;

const Template: ComponentStory<typeof AddStudentGroups> = (args) => <AddStudentGroups {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
