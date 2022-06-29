import React from 'react';

import { UserIcon } from '@forward-protocol/ui-icons';
import { Button } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: '260px' }}>
    <Button {...args}>{args.children}</Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  children: 'Button',
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  variant: 'primary',
  children: 'Button',
  startIcon: <UserIcon size={'S'} />,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  variant: 'primary',
  children: 'Button',
  endIcon: <UserIcon size={'S'} />,
};
