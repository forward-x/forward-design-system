import React from 'react';

import { UserIcon } from '@forward-protocol/ui-icons';
import { Button } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'danger',
        'danger-secondary',
        'link',
        'icon',
      ],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    size: {
      options: ['S', 'M', 'L'],
      control: { type: 'inline-radio' },
      defaultValue: 'L',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: '260px' }}>
    <Button {...args}>{args.children}</Button>
  </div>
);

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = {
  variant: 'primary',
  children: 'Button',
};

export const WithStartIcon: ComponentStory<typeof Button> = Template.bind({});
WithStartIcon.args = {
  variant: 'primary',
  children: 'Button',
  startIcon: <UserIcon />,
};

export const WithEndIcon: ComponentStory<typeof Button> = Template.bind({});
WithEndIcon.args = {
  variant: 'primary',
  children: 'Button',
  endIcon: <UserIcon />,
};

export const Icon: ComponentStory<typeof Button> = Template.bind({});
Icon.args = {
  variant: 'icon',
  children: <UserIcon />,
};
