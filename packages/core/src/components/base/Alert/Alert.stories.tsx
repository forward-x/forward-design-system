import React from 'react';

import { Alert } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Alert',
  component: Alert,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'October',
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <div style={{ width: '260px' }}>
    <Alert {...args} />
  </div>
);

export const Default: ComponentStory<typeof Alert> = Template.bind({});
Default.args = {};
