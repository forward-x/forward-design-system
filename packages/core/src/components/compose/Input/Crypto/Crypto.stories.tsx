import React from 'react';

import { Input } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Compose/Data entry/Crypto',
  component: Input.Crypto,
  argTypes: {
    size: {
      options: ['S', 'M', 'L'],
      control: { type: 'inline-radio' },
      defaultValue: 'L',
    },
    variant: {
      options: ['crypto', 'fiat'],
      control: { type: 'inline-radio' },
      defaultValue: 'crypto',
    },
    hasMax: {
      control: { type: 'boolean' },
      defaultValue: 'false',
    },
    canChange: {
      control: { type: 'boolean' },
      defaultValue: 'false',
    },
  },
} as ComponentMeta<typeof Input.Crypto>;

const Template: ComponentStory<typeof Input.Crypto> = (args) => (
  <div style={{ width: '260px' }}>
    <Input.Crypto {...args} />
  </div>
);

export const Default: ComponentStory<typeof Input.Crypto> = Template.bind({});
Default.args = {
  variant: 'crypto',
  hasMax: false,
  canChange: false,
};

export const Fiat: ComponentStory<typeof Input.Crypto> = Template.bind({});
Fiat.args = {
  variant: 'fiat',
  hasMax: false,
  canChange: false,
};

export const HasMax: ComponentStory<typeof Input.Crypto> = Template.bind({});
HasMax.args = {
  maxValue: '100',
  hasMax: true,
};

export const CanChange: ComponentStory<typeof Input.Crypto> = Template.bind({});
CanChange.args = {
  canChange: true,
};
