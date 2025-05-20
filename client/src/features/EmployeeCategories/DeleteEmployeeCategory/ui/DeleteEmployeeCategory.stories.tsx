import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DeleteEmployeeCategory } from './DeleteEmployeeCategory';

export default {
    title: 'pages/DeleteStudentGroups',
    component: DeleteEmployeeCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DeleteEmployeeCategory>;

const Template: ComponentStory<typeof DeleteEmployeeCategory> = (args) => <DeleteEmployeeCategory {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
