import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToggleSwitcher } from './ToggleSwitcher';

export default {
    title: 'shared/ToggleSwitcher',
    component: ToggleSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ToggleSwitcher>;

const Template: ComponentStory<typeof ToggleSwitcher> = (args) => <ToggleSwitcher {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
