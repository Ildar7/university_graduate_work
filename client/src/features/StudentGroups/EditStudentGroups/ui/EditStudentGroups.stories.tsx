import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditStudentGroups } from './EditStudentGroups';

export default {
    title: 'pages/EditStudentGroups',
    component: EditStudentGroups,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditStudentGroups>;

const Template: ComponentStory<typeof EditStudentGroups> = (args) => <EditStudentGroups {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
