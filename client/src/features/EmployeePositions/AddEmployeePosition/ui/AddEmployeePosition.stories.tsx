import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddEmployeePosition } from './AddEmployeePosition';

export default {
    title: 'pages/AddEmployeeEducation',
    component: AddEmployeePosition,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddEmployeePosition>;

const Template: ComponentStory<typeof AddEmployeePosition> = (args) => <AddEmployeePosition {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
