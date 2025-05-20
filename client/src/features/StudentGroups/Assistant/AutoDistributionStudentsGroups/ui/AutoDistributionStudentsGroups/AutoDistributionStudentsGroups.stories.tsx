import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AutoDistributionStudentsGroups } from './AutoDistributionStudentsGroups';

export default {
    title: 'shared/AutoDistributionStudentsGroups',
    component: AutoDistributionStudentsGroups,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AutoDistributionStudentsGroups>;

const Template: ComponentStory<typeof AutoDistributionStudentsGroups> = (args) => <AutoDistributionStudentsGroups {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
