import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AutoDistributionStudentsGroupsIntroduction } from './AutoDistributionStudentsGroupsIntroduction';

export default {
    title: 'shared/AutoDistributionStudentsGroupsIntroduction',
    component: AutoDistributionStudentsGroupsIntroduction,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AutoDistributionStudentsGroupsIntroduction>;

const Template: ComponentStory<typeof AutoDistributionStudentsGroupsIntroduction> = (args) => <AutoDistributionStudentsGroupsIntroduction {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
