import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditEmployeeProfActivityTab } from './EditEmployeeProfActivityTab';

export default {
    title: 'shared/EditEmployeeProfActivityTab',
    component: EditEmployeeProfActivityTab,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditEmployeeProfActivityTab>;

const Template: ComponentStory<typeof EditEmployeeProfActivityTab> = (args) => <EditEmployeeProfActivityTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
