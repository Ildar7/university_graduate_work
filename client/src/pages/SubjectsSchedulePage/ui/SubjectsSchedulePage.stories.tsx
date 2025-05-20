import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SubjectsSchedulePage from './SubjectsSchedulePage';

export default {
    title: 'shared/SubjectsSchedulePage',
    component: SubjectsSchedulePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SubjectsSchedulePage>;

const Template: ComponentStory<typeof SubjectsSchedulePage> = (args) => <SubjectsSchedulePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
