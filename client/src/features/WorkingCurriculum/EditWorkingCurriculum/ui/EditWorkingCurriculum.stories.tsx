import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditWorkingCurriculum } from './EditWorkingCurriculum';

export default {
    title: 'pages/EditStudentGroups',
    component: EditWorkingCurriculum,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditWorkingCurriculum>;

const Template: ComponentStory<typeof EditWorkingCurriculum> = (args) => <EditWorkingCurriculum {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
