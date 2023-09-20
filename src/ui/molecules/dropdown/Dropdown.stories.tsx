import { type ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { createNavigationOptions } from '@/ui/molecules/dropdown/fixtures';

const meta = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  tags: ['autodocs'],
  argTypes: {  },
} satisfies Meta<typeof Dropdown>;

export default meta;

const options = createNavigationOptions();

const Template: StoryFn<ComponentProps<typeof Dropdown>> = (args) => (
  <div className="w-96 h-48 p-12 bg-slate-600">
    <Dropdown {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  options,
  selected: options[0],
};
