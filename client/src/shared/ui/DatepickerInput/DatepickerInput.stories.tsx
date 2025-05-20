import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatepickerInput } from './DatepickerInput';

export default {
    title: 'pages/DatepickerInput',
    component: DatepickerInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DatepickerInput>;

const Template: ComponentStory<typeof DatepickerInput> = (args) => <DatepickerInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
