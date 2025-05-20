import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StudentGroupsListModal } from './StudentGroupsListModal';

export default {
    title: 'shared/StudentGroupsListModal',
    component: StudentGroupsListModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StudentGroupsListModal>;

const Template: ComponentStory<typeof StudentGroupsListModal> = (args) => <StudentGroupsListModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
