import React from 'react';

import { Input } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Compose/Data entry/Digits',
  component: Input.Digits,
  argTypes: {
    size: {
      options: ['S', 'M', 'L'],
      control: { type: 'inline-radio' },
      defaultValue: 'L',
    },
  },
} as ComponentMeta<typeof Input.Digits>;

const Template: ComponentStory<typeof Input.Digits> = (args) => (
  <Input.Digits {...args} />
);

export const Default: ComponentStory<typeof Input.Digits> = Template.bind({});
Default.args = {};

export const WithSevenDigits: ComponentStory<typeof Input.Digits> =
  Template.bind({});
WithSevenDigits.args = {
  length: 7,
};
