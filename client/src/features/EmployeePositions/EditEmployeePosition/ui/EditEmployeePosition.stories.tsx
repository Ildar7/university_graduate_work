import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditEmployeePosition } from './EditEmployeePosition';

export default {
    title: 'pages/EditStudentGroups',
    component: EditEmployeePosition,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditEmployeePosition>;

const Template: ComponentStory<typeof EditEmployeePosition> = (args) => <EditEmployeePosition {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
