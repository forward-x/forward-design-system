import React from 'react';

import { Steps } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Steps',
  component: Steps.Bar,
  argTypes: {
    index: {
      control: { type: 'number' },
      defaultValue: 2,
    },
    length: {
      control: { type: 'number' },
      defaultValue: 4,
    },
  },
} as ComponentMeta<typeof Steps.Bar>;

const Template: ComponentStory<typeof Steps.Bar> = (args) => (
  <div style={{ width: '260px' }}>
    <Steps.Bar {...args} />
  </div>
);

export const Bar: ComponentStory<typeof Steps.Bar> = Template.bind({});
