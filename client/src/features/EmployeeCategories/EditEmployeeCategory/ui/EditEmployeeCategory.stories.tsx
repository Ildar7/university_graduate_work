import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditEmployeeCategory } from './EditEmployeeCategory';

export default {
    title: 'pages/EditStudentGroups',
    component: EditEmployeeCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditEmployeeCategory>;

const Template: ComponentStory<typeof EditEmployeeCategory> = (args) => <EditEmployeeCategory {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
