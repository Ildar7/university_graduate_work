import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditDiscipline } from './EditDiscipline';

export default {
    title: 'shared/EditDiscipline',
    component: EditDiscipline,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditDiscipline>;

const Template: ComponentStory<typeof EditDiscipline> = (args) => <EditDiscipline {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
