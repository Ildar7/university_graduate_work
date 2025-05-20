import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DeleteEmployeeEducation } from './DeleteEmployeeEducation';

export default {
    title: 'pages/DeleteStudentGroups',
    component: DeleteEmployeeEducation,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DeleteEmployeeEducation>;

const Template: ComponentStory<typeof DeleteEmployeeEducation> = (args) => <DeleteEmployeeEducation {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
