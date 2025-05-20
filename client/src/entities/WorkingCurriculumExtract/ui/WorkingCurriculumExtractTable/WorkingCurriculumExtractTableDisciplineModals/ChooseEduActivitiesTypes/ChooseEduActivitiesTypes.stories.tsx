import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    ChooseEduActivitiesTypes,
} from './ChooseEduActivitiesTypes';

export default {
    title: 'shared/ChooseEduActivitiesTypes',
    component: ChooseEduActivitiesTypes,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ChooseEduActivitiesTypes>;

const Template: ComponentStory<typeof ChooseEduActivitiesTypes> = (args) => <ChooseEduActivitiesTypes {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
