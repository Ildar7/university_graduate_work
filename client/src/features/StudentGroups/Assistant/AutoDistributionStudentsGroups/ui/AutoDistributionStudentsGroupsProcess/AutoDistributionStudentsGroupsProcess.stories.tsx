import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AutoDistributionStudentsGroupsProcess } from './AutoDistributionStudentsGroupsProcess';

export default {
    title: 'shared/AutoDistributionStudentsGroupsProcess',
    component: AutoDistributionStudentsGroupsProcess,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AutoDistributionStudentsGroupsProcess>;

const Template: ComponentStory<typeof AutoDistributionStudentsGroupsProcess> = (args) => <AutoDistributionStudentsGroupsProcess {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
