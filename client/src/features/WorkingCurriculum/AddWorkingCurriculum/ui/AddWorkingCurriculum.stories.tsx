import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddWorkingCurriculum } from './AddWorkingCurriculum';

export default {
    title: 'pages/AddEmployeeEducation',
    component: AddWorkingCurriculum,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddWorkingCurriculum>;

const Template: ComponentStory<typeof AddWorkingCurriculum> = (args) => <AddWorkingCurriculum {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
