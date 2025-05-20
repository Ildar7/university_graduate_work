import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StudentsTableFields } from './StudentsTableFields';

export default {
    title: 'shared/EmployeesTableFields',
    component: StudentsTableFields,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StudentsTableFields>;

const Template: ComponentStory<typeof StudentsTableFields> = (args) => <StudentsTableFields {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
