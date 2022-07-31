import React from 'react';

import { Loading } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Loading',
  component: Loading,
  argTypes: {
    variant: {
      options: ['circular', 'linear'],
      control: { type: 'radio' },
      defaultValue: 'circular',
    },
    percentage: {
      control: { type: 'number' },
      defaultValue: 30,
    },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <div style={{ width: '260px' }}>
    <Loading {...args} />
  </div>
);

export const Default: ComponentStory<typeof Loading> = Template.bind({});
Default.args = {};
