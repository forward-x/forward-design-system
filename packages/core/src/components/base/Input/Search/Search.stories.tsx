import React from 'react';

import { Input } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Data entry/Search',
  component: Input.Search,
  argTypes: {
    size: {
      options: ['S', 'M', 'L'],
      control: { type: 'inline-radio' },
      defaultValue: 'L',
    },
  },
} as ComponentMeta<typeof Input.Search>;

const Template: ComponentStory<typeof Input.Search> = (args) => (
  <div style={{ width: '260px' }}>
    <Input.Search {...args} />
  </div>
);

export const Default: ComponentStory<typeof Input.Search> = Template.bind({});
Default.args = {};
