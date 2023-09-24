import { type ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { SizeSelector } from './SizeSelector';
import { sizes } from '@/ui/organisms/sizeSelector/sizes';

const meta = {
  title: 'Organisms/SizeSelector',
  component: SizeSelector,
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
  argTypes: {},
} satisfies Meta<typeof SizeSelector>;

export default meta;

const Template: StoryFn<ComponentProps<typeof SizeSelector>> = (args) => {
  return(
  <div className="w-96 h-64 p-12 border-2 border-black text-black">
    <SizeSelector {...args} />
  </div>
)};

export const Default = Template.bind({});
Default.args = {
  sizes: sizes,
};
