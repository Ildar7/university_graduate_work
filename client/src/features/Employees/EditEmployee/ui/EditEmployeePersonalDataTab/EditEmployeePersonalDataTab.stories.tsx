import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditEmployeePersonalDataTab } from './EditEmployeePersonalDataTab';

export default {
    title: 'shared/EditEmployeePersonalDataTab',
    component: EditEmployeePersonalDataTab,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditEmployeePersonalDataTab>;

const Template: ComponentStory<typeof EditEmployeePersonalDataTab> = (args) => <EditEmployeePersonalDataTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
