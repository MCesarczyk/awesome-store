import { type ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { ColorSelector } from './ColorSelector';
import { colors } from '@/ui/organisms/colorSelector/colors';

const meta = {
  title: 'Organisms/ColorSelector',
  component: ColorSelector,
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
} satisfies Meta<typeof ColorSelector>;

export default meta;

const Template: StoryFn<ComponentProps<typeof ColorSelector>> = (args) => {
  return(
  <div className="w-96 h-64 p-12 border-2 border-black text-black bg-slate-300">
    <ColorSelector {...args} />
  </div>
)};

export const Default = Template.bind({});
Default.args = {
  colors: colors,
};
