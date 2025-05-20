import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditingBlock } from './EditingBlock';

export default {
    title: 'shared/EditingBlock',
    component: EditingBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditingBlock>;

const Template: ComponentStory<typeof EditingBlock> = (args) => <EditingBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
