import React from 'react';

import { Pagination } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Pagination',
  component: Pagination,
  argTypes: {
    total: {
      control: { type: 'number' },
      defaultValue: 5,
    },
    initialPage: {
      control: { type: 'number' },
      defaultValue: 2,
    },
    forcePage: {
      control: { type: 'number' },
    },
    pageRangeDisplayed: {
      control: { type: 'number' },
      defaultValue: 5,
    },
    onPageChange: { action: 'onPageChange' },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <div style={{ width: '700px' }}>
    <Pagination {...args} />
  </div>
);

export const Default: ComponentStory<typeof Pagination> = Template.bind({});
Default.args = {};
