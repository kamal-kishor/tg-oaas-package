import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../../src/components/Common/Header/Header';

const HeaderMeta = {
    title: 'ReactComponentLibrary/Header',
    component: Header
} as ComponentMeta<typeof Header>;

export default HeaderMeta;

const Template: ComponentStory<typeof Header> = (args) => {
    return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
