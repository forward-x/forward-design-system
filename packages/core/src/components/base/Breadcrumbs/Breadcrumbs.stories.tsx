import React from 'react';

import { Breadcrumbs } from '@forward-protocol/uikit';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    variant: {
      options: ['default', 'truncate'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
  },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <span>Title</span>
    <span>Title 1</span>
    <span>Title 2</span>
    <span>Title 3</span>
    <span>Title 4</span>
    <span>Title 5</span>
  </Breadcrumbs>
);

export const Default: ComponentStory<typeof Breadcrumbs> = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Truncate: ComponentStory<typeof Breadcrumbs> = Template.bind({});
Truncate.args = {
  variant: 'truncate',
};
