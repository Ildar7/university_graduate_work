import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddStudentGroupsNav } from './AddStudentGroupsNav';

export default {
    title: 'shared/AddStudentGroupsNav',
    component: AddStudentGroupsNav,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddStudentGroupsNav>;

const Template: ComponentStory<typeof AddStudentGroupsNav> = (args) => <AddStudentGroupsNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
