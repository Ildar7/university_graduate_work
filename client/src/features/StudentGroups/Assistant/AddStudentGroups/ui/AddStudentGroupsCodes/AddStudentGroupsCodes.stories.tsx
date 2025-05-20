import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddStudentGroupsCodes } from './AddStudentGroupsCodes';

export default {
    title: 'shared/AddStudentGroupsCodes',
    component: AddStudentGroupsCodes,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddStudentGroupsCodes>;

const Template: ComponentStory<typeof AddStudentGroupsCodes> = (args) => <AddStudentGroupsCodes {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
