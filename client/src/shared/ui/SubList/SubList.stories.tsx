import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubList } from './SubList';

export default {
    title: 'pages/SubList',
    component: SubList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubList>;

const Template: ComponentStory<typeof SubList> = (args) => <SubList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
