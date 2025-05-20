import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddDiscipline } from './AddDiscipline';

export default {
    title: 'shared/AddDiscipline',
    component: AddDiscipline,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddDiscipline>;

const Template: ComponentStory<typeof AddDiscipline> = (args) => <AddDiscipline {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
