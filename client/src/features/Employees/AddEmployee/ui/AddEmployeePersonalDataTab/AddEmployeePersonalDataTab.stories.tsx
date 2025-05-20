import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddEmployeePersonalDataTab } from './AddEmployeePersonalDataTab';

export default {
    title: 'shared/EditEmployeePersonalDataTab',
    component: AddEmployeePersonalDataTab,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddEmployeePersonalDataTab>;

const Template: ComponentStory<typeof AddEmployeePersonalDataTab> = (args) => <AddEmployeePersonalDataTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
