import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditEmployeeEducation } from './EditEmployeeEducation';

export default {
    title: 'pages/EditStudentGroups',
    component: EditEmployeeEducation,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditEmployeeEducation>;

const Template: ComponentStory<typeof EditEmployeeEducation> = (args) => <EditEmployeeEducation {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
