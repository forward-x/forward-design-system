import React from 'react';

import { Steps } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Steps',
  component: Steps.Radial,
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
} as ComponentMeta<typeof Steps.Radial>;

const Template: ComponentStory<typeof Steps.Radial> = (args) => (
  <div style={{ width: '260px' }}>
    <Steps.Radial {...args} />
  </div>
);

export const Radial: ComponentStory<typeof Steps.Radial> = Template.bind({});
