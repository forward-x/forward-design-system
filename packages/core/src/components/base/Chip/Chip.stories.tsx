import React from 'react';

import { CalendarIcon, CloseIcon } from '@forward-protocol/ui-icons';
import { Chip } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Chip',
  component: Chip,
  argTypes: {
    variant: {
      options: ['default', 'toggle'],
      control: { type: 'radio' },
      defaultValue: 'default',
    },
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
Default.args = {
  variant: 'default',
};

export const StartAdornment: ComponentStory<typeof Chip> = Template.bind({});
StartAdornment.args = {
  variant: 'default',
  startAdornment: <CalendarIcon />,
};

export const EndAdornment: ComponentStory<typeof Chip> = Template.bind({});
EndAdornment.args = {
  variant: 'default',
  endAdornment: <CloseIcon />,
};

export const StartAndEndAdornment: ComponentStory<typeof Chip> = Template.bind(
  {}
);
StartAndEndAdornment.args = {
  variant: 'default',
  startAdornment: <CalendarIcon />,
  endAdornment: <CloseIcon />,
};
