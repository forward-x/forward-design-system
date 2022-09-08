import React from 'react';

import { Input } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Data entry/Password',
  component: Input.Password,
  argTypes: {
    size: {
      options: ['S', 'M', 'L'],
      control: { type: 'inline-radio' },
      defaultValue: 'L',
    },
    invalid: {
      control: { type: 'boolean' },
      defaultValue: 'false',
    },
  },
} as ComponentMeta<typeof Input.Password>;

const Template: ComponentStory<typeof Input.Password> = (args) => (
  <div style={{ width: '260px' }}>
    <Input.Password {...args} />
  </div>
);

export const Default: ComponentStory<typeof Input.Password> = Template.bind({});
Default.args = {};
