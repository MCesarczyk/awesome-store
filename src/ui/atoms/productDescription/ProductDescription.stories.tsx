import { type ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { ProductDescription } from './ProductDescription';

const meta = {
  title: 'Atoms/ProductDescription',
  component: ProductDescription,
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  tags: ['autodocs'],
  argTypes: {  },
} satisfies Meta<typeof ProductDescription>;

export default meta;

const Template: StoryFn<ComponentProps<typeof ProductDescription>> = (args) => (
  <ProductDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {
  product: {
    id: "1",
    name: 'Basic Tee',
    description: 'A basic t-shirt for everyone.',
    categories: [{id:'1', name:'Accessories',slug:'accessories',description:''}],
    price: 29,
    colors: [{id:'1', name:'Black', value:'#000'},{id:'2', name:'White', value:'#fff'}],
    sizes: [{id:'1', name:'S', value: 1},{id:'2', name:'M', value: 2},{id:'3', name:'L', value: 3},{id:'4', name:'XL', value: 4}],
  },
};
