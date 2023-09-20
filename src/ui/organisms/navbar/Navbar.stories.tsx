import { type ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Navbar } from './Navbar';
import { createNavigationOptions } from '@/ui/molecules/dropdown/fixtures';
import { Dropdown } from '@/ui/molecules/dropdown';

const meta = {
  title: 'Organisms/Navbar',
  component: Navbar,
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
  argTypes: { 
    children: {
      table: {
        disable: true,
      }
    }
   },
} satisfies Meta<typeof Navbar>;

export default meta;

const options = createNavigationOptions();

const Template: StoryFn<ComponentProps<typeof Navbar>> = (args) => (
  <div className="w-96 h-64 p-12 bg-green-300">
    <Navbar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <Dropdown options={options} />,
};
