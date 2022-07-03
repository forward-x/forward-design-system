import React from 'react';

import { Avatar } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      options: ['default', 'name', 'forward'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    size: {
      options: ['S', 'M', 'L', 'XL'],
      control: { type: 'inline-radio' },
      defaultValue: 'M',
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <div style={{ width: '260px' }}>
    <Avatar {...args} />
  </div>
);

export const Default: ComponentStory<typeof Avatar> = Template.bind({});
Default.args = {
  variant: 'default',
};

export const ForwardMan: ComponentStory<typeof Avatar> = Template.bind({});
ForwardMan.args = {
  variant: 'forward',
};

export const Name: ComponentStory<typeof Avatar> = Template.bind({});
Name.args = {
  variant: 'name',
  name: 'NP',
};
