import React from 'react';

import { CalendarIcon, CloseIcon } from '@forward-protocol/ui-icons';
import { Chip } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Chip',
  component: Chip,
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
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <div style={{ width: '260px' }}>
    <Chip {...args} />
  </div>
);

export const Default: ComponentStory<typeof Chip> = Template.bind({});
Default.args = {};

export const StartAdornment: ComponentStory<typeof Chip> = Template.bind({});
StartAdornment.args = {
  startAdornment: <CalendarIcon />,
};

export const EndAdornment: ComponentStory<typeof Chip> = Template.bind({});
EndAdornment.args = {
  endAdornment: <CloseIcon />,
};

export const StartAndEndAdornment: ComponentStory<typeof Chip> = Template.bind(
  {}
);
StartAndEndAdornment.args = {
  startAdornment: <CalendarIcon />,
  endAdornment: <CloseIcon />,
};
