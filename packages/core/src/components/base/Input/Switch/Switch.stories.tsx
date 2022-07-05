import React from 'react';

import { Input } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Data entry/Switch',
  component: Input.Switch,
} as ComponentMeta<typeof Input.Switch>;

const Template: ComponentStory<typeof Input.Switch> = (args) => (
  <Input.Switch {...args} />
);

export const Default: ComponentStory<typeof Input.Switch> = Template.bind({});
Default.args = {};
