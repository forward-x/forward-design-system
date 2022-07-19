import React from 'react';

import { Calendar } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Calendar',
  component: Calendar,
  argTypes: {
    showDoubleView: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    selectRange: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <div style={{ width: args.showDoubleView ? '700px' : '350px' }}>
    <Calendar {...args} />
  </div>
);

export const Default: ComponentStory<typeof Calendar> = Template.bind({});
Default.args = {
  selectRange: false,
};

export const SelectRange: ComponentStory<typeof Calendar> = Template.bind({});
SelectRange.args = {
  selectRange: true,
};

export const WithDoubleView: ComponentStory<typeof Calendar> = Template.bind(
  {}
);
WithDoubleView.args = {
  showDoubleView: true,
};

export const WithCustomFooter: ComponentStory<typeof Calendar> = Template.bind(
  {}
);
WithCustomFooter.args = {
  selectRange: false,
  footer: <div>Hello from custom footer</div>,
};
