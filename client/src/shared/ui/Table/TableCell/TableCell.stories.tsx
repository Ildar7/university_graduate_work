import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableCell } from './TableCell';

export default {
    title: 'shared/TableCell',
    component: TableCell,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TableCell>;

const Template: ComponentStory<typeof TableCell> = (args) => <TableCell {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
