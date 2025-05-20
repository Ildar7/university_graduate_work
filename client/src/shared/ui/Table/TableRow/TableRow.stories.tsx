import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableRow } from './TableRow';

export default {
    title: 'shared/TableRow',
    component: TableRow,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TableRow>;

const Template: ComponentStory<typeof TableRow> = (args) => <TableRow {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
