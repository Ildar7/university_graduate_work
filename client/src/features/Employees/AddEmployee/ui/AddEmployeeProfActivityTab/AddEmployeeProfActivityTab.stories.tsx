import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddEmployeeProfActivityTab } from './AddEmployeeProfActivityTab';

export default {
    title: 'shared/EditEmployeeProfActivityTab',
    component: AddEmployeeProfActivityTab,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddEmployeeProfActivityTab>;

const Template: ComponentStory<typeof AddEmployeeProfActivityTab> = (args) => <AddEmployeeProfActivityTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
