import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AutoDistributionStudentGroupsPage from './AutoDistributionStudentGroupsPage';

export default {
    title: 'shared/AutoDistributionStudentGroupsPage',
    component: AutoDistributionStudentGroupsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AutoDistributionStudentGroupsPage>;

const Template: ComponentStory<typeof AutoDistributionStudentGroupsPage> = (args) => <AutoDistributionStudentGroupsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
