import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderNavigation } from './HeaderNavigation';

export default {
    title: 'pages/HeaderNavigation',
    component: HeaderNavigation,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderNavigation>;

const Template: ComponentStory<typeof HeaderNavigation> = (args) => <HeaderNavigation {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
