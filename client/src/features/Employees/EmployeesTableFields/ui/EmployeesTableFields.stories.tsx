import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EmployeesTableFields } from './EmployeesTableFields';

export default {
    title: 'shared/EmployeesTableFields',
    component: EmployeesTableFields,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EmployeesTableFields>;

const Template: ComponentStory<typeof EmployeesTableFields> = (args) => <EmployeesTableFields {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
