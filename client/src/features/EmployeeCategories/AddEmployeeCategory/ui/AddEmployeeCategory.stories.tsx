import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddEmployeeCategory } from './AddEmployeeCategory';

export default {
    title: 'pages/AddEmployeeEducation',
    component: AddEmployeeCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddEmployeeCategory>;

const Template: ComponentStory<typeof AddEmployeeCategory> = (args) => <AddEmployeeCategory {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
