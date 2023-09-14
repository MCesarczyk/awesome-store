import { type ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { NavigationLink } from './NavigationLink';

const meta = {
  title: 'Atoms/NavigationLink',
  component: NavigationLink,
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  tags: ['autodocs'],
  argTypes: {  },
} satisfies Meta<typeof NavigationLink>;

export default meta;

const Template: StoryFn<ComponentProps<typeof NavigationLink>> = (args) => (
  <NavigationLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: '/products',
  children: 'Products',
};
