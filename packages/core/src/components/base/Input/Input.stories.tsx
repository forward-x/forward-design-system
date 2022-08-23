import React from 'react';

import { UserIcon } from '@forward-protocol/ui-icons';
import { Input } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Data entry/Input',
  component: Input,
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ width: '260px' }}>
    <Input {...args} />
  </div>
);

export const Default: ComponentStory<typeof Input> = Template.bind({});
Default.args = {};

export const WithStartAdornment: ComponentStory<typeof Input> = Template.bind(
  {}
);
WithStartAdornment.args = {
  startAdornment: <UserIcon />,
};

export const WithEndAdornment: ComponentStory<typeof Input> = Template.bind({});
WithEndAdornment.args = {
  endAdornment: <UserIcon />,
};
