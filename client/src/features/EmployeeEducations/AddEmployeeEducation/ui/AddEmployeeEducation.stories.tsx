import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddEmployeeEducation } from './AddEmployeeEducation';

export default {
    title: 'pages/AddEmployeeEducation',
    component: AddEmployeeEducation,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddEmployeeEducation>;

const Template: ComponentStory<typeof AddEmployeeEducation> = (args) => <AddEmployeeEducation {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
