import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StudentsInGroupsPage from './StudentsInGroupsPage';

export default {
    title: 'pages/StudentsInGroupsPage',
    component: StudentsInGroupsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StudentsInGroupsPage>;

const Template: ComponentStory<typeof StudentsInGroupsPage> = (args) => <StudentsInGroupsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
