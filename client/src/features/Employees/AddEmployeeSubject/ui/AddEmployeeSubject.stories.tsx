import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddEmployeeSubject } from './AddEmployeeSubject';

export default {
    title: 'shared/addEmployeeSubject',
    component: AddEmployeeSubject,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddEmployeeSubject>;

const Template: ComponentStory<typeof AddEmployeeSubject> = (args) => <AddEmployeeSubject {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
