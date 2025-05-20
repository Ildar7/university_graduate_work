import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddStudentGroupsIntroduction } from './AddStudentGroupsIntroduction';

export default {
    title: 'shared/AddStudentGroupsIntroduction',
    component: AddStudentGroupsIntroduction,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddStudentGroupsIntroduction>;

const Template: ComponentStory<typeof AddStudentGroupsIntroduction> = (args) => <AddStudentGroupsIntroduction {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
