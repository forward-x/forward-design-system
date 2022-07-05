import React from 'react';

import { Input } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Data entry/Radio',
  component: Input.Radio,
} as ComponentMeta<typeof Input.Radio>;

const Template: ComponentStory<typeof Input.Radio> = (args) => (
  <Input.Radio {...args} />
);

export const Default: ComponentStory<typeof Input.Radio> = Template.bind({});
Default.args = {
  text: 'Hello world',
};
