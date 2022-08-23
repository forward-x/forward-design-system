import React from 'react';

import { Input } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Compose/Data entry/Crypto',
  component: Input.Crypto,
  argTypes: {
    hasMax: {
      control: { type: 'boolean' },
      defaultValue: 'false',
    },
    invalid: {
      control: { type: 'boolean' },
      defaultValue: 'false',
    },
    canChange: {
      control: { type: 'boolean' },
      defaultValue: 'false',
    },
    price: {
      control: { type: 'number' },
      defaultValue: 0,
    },
    walletBalance: {
      control: { type: 'number' },
    },
    symbol: {
      control: { type: 'text' },
      defaultValue: 'USD',
    },
    currency: {
      control: { type: 'text' },
      defaultValue: '$',
    },
  },
} as ComponentMeta<typeof Input.Crypto>;

const Template: ComponentStory<typeof Input.Crypto> = (args) => (
  <div style={{ width: '280px' }}>
    <Input.Crypto {...args} />
  </div>
);

export const Default: ComponentStory<typeof Input.Crypto> = Template.bind({});
Default.args = {
  hasMax: false,
  canChange: false,
};

export const HasMax: ComponentStory<typeof Input.Crypto> = Template.bind({});
HasMax.args = {
  maxValue: '100',
  hasMax: true,
  canChange: false,
};

export const CanChange: ComponentStory<typeof Input.Crypto> = Template.bind({});
CanChange.args = {
  canChange: true,
  hasMax: false,
};
