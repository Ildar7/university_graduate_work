import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WorkingCurriculum } from './WorkingCurriculum';

export default {
    title: 'pages/WorkingCurriculum',
    component: WorkingCurriculum,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WorkingCurriculum>;

const Template: ComponentStory<typeof WorkingCurriculum> = (args) => <WorkingCurriculum {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
