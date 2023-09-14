import { type ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { ProductCoverImage } from './ProductCoverImage';

const meta = {
  title: 'Atoms/ProductCoverImage',
  component: ProductCoverImage,
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  tags: ['autodocs'],
  argTypes: {  },
} satisfies Meta<typeof ProductCoverImage>;

export default meta;

const Template: StoryFn<ComponentProps<typeof ProductCoverImage>> = (args) => (
  <ProductCoverImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/640/640',
  alt: 'Product',
};
