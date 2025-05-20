import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ViewEmployeeSubjects } from './ViewEmployeeSubjects';

export default {
    title: 'shared/addEmployeeSubject',
    component: ViewEmployeeSubjects,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ViewEmployeeSubjects>;

const Template: ComponentStory<typeof ViewEmployeeSubjects> = (args) => <ViewEmployeeSubjects {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
