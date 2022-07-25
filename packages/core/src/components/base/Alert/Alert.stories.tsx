import React from 'react';

import { Alert } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: ['success', 'warning', 'info', 'danger'],
      control: { type: 'radio' },
      defaultValue: 'success',
    },
    action: {
      options: ['approve', 'retry', 'accept', undefined],
      control: { type: 'radio' },
      defaultValue: undefined,
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'Successful notification',
    },
    confirmText: {
      control: { type: 'text' },
    },
    cancelText: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <div style={{ width: '450px' }}>
    <Alert {...args} />
  </div>
);

export const Default: ComponentStory<typeof Alert> = Template.bind({});
Default.args = {};

export const WithAction: ComponentStory<typeof Alert> = Template.bind({});
WithAction.args = {
  action: 'approve',
};
