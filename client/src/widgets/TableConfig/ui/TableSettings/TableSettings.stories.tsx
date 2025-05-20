import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableSettings } from './TableSettings';

export default {
    title: 'pages/TableSettings',
    component: TableSettings,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TableSettings>;

const Template: ComponentStory<typeof TableSettings> = (args) => <TableSettings {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
