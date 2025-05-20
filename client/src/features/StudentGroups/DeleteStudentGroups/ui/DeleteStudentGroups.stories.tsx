import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DeleteStudentGroups } from './DeleteStudentGroups';

export default {
    title: 'pages/DeleteStudentGroups',
    component: DeleteStudentGroups,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DeleteStudentGroups>;

const Template: ComponentStory<typeof DeleteStudentGroups> = (args) => <DeleteStudentGroups {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
