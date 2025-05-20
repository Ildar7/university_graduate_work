import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TableCellEditing } from './TableCellEditing';

export default {
    title: 'shared/TableCellEditing',
    component: TableCellEditing,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TableCellEditing>;

const Template: ComponentStory<typeof TableCellEditing> = (args) => <TableCellEditing {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
