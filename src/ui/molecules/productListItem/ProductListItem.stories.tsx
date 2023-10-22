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
      categories: [{id: '1', name: 'Accessories', slug: 'accessories', description: '' }],
      collections: [{id: '1', name: 'Summer Collection', slug: 'summer-collection', description: '' }],
      images: [{ id:'1', url: 'https://picsum.photos/640/640', alt: 'Product'}],
      price: 29,
      colors: [{id:'1', name:'Black', value:'#000'},{id:'2', name:'White', value:'#fff'}],
      sizes: [{id:'1', name:'S', value: 1},{id:'2', name:'M', value: 2},{id:'3', name:'L', value: 3},{id:'4', name:'XL', value: 4}],
  },
};
