import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextHint } from './TextHint';

export default {
    title: 'shared/TextHint',
    component: TextHint,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TextHint>;

const Template: ComponentStory<typeof TextHint> = (args) => <TextHint {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
