import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddStudentGroupsNewGroups } from './AddStudentGroupsNewGroups';

export default {
    title: 'shared/AddStudentGroupsNewGroups',
    component: AddStudentGroupsNewGroups,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddStudentGroupsNewGroups>;

const Template: ComponentStory<typeof AddStudentGroupsNewGroups> = (args) => <AddStudentGroupsNewGroups {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
