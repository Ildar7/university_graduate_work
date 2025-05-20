import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DeleteWorkingCurriculum } from './DeleteWorkingCurriculum';

export default {
    title: 'pages/DeleteStudentGroups',
    component: DeleteWorkingCurriculum,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DeleteWorkingCurriculum>;

const Template: ComponentStory<typeof DeleteWorkingCurriculum> = (args) => <DeleteWorkingCurriculum {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
