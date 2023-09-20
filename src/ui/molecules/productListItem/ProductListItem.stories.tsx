import { type ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { ProductListItem } from './ProductListItem';

const meta = {
  title: 'Molecules/ProductListItem',
  component: ProductListItem,
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  tags: ['autodocs'],
  argTypes: {  },
} satisfies Meta<typeof ProductListItem>;

export default meta;

const Template: StoryFn<ComponentProps<typeof ProductListItem>> = (args) => (
  <ProductListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  product: {
    id: "1",
      name: 'Basic Tee',
      slug: 'basic-tee',
      description: '',
      categories: [{id: '1', name: 'Accessories' }],
      collections: [{id: '1', name: 'Summer Collection' }],
      images: [{ id:'1', url: 'https://picsum.photos/640/640', alt: 'Product'}],
      price: 29,
  },
};
