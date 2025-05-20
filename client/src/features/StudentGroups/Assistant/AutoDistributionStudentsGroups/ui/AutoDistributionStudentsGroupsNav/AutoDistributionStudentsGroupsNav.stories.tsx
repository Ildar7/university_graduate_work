import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AutoDistributionStudentsGroupsNav } from './AutoDistributionStudentsGroupsNav';

export default {
    title: 'shared/AutoDistributionStudentsGroupsNav',
    component: AutoDistributionStudentsGroupsNav,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AutoDistributionStudentsGroupsNav>;

const Template: ComponentStory<typeof AutoDistributionStudentsGroupsNav> = (args) => <AutoDistributionStudentsGroupsNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
