import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StudentsInGroupsFromColumn } from './StudentsInGroupsFromColumn';

export default {
    title: 'shared/StudentsInGroupsToColumn',
    component: StudentsInGroupsFromColumn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StudentsInGroupsFromColumn>;

const Template: ComponentStory<typeof StudentsInGroupsFromColumn> = (args) => <StudentsInGroupsFromColumn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
