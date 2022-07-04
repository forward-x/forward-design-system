import React from 'react';

import { Input } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Data entry/Checkbox',
  component: Input.Checkbox,
  argTypes: {
    size: {
      options: ['S', 'M'],
      control: { type: 'inline-radio' },
      defaultValue: 'M',
    },
  },
} as ComponentMeta<typeof Input.Checkbox>;

const Template: ComponentStory<typeof Input.Checkbox> = (args) => (
  <Input.Checkbox {...args} />
);

export const Default: ComponentStory<typeof Input.Checkbox> = Template.bind({});
Default.args = {
  text: 'Hello world',
};
