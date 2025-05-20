import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddStudentGroupsPage from './AddStudentGroupsPage';

export default {
    title: 'shared/AddStudentGroupsPage',
    component: AddStudentGroupsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddStudentGroupsPage>;

const Template: ComponentStory<typeof AddStudentGroupsPage> = (args) => <AddStudentGroupsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
