import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DeleteEmployeePosition } from './DeleteEmployeePosition';

export default {
    title: 'pages/DeleteStudentGroups',
    component: DeleteEmployeePosition,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DeleteEmployeePosition>;

const Template: ComponentStory<typeof DeleteEmployeePosition> = (args) => <DeleteEmployeePosition {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
