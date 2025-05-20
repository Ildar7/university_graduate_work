import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SubjectsScheduleDetailPage from './SubjectsScheduleDetailPage';

export default {
    title: 'shared/SubjectsScheduleDetailPage',
    component: SubjectsScheduleDetailPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsScheduleDetailPage>;

const Template: ComponentStory<typeof SubjectsScheduleDetailPage> = (args) => <SubjectsScheduleDetailPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
