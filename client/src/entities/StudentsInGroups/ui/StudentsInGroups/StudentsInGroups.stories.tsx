import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StudentsInGroups } from './StudentsInGroups';

export default {
    title: 'shared/StudentsInGroups',
    component: StudentsInGroups,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StudentsInGroups>;

const Template: ComponentStory<typeof StudentsInGroups> = (args) => <StudentsInGroups {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
