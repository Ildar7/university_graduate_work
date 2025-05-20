import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StudentsInGroupsToColumn } from './StudentsInGroupsToColumn';

export default {
    title: 'shared/StudentsInGroupsToColumn',
    component: StudentsInGroupsToColumn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StudentsInGroupsToColumn>;

const Template: ComponentStory<typeof StudentsInGroupsToColumn> = (args) => <StudentsInGroupsToColumn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
