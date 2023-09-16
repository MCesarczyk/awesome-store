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
    attributes: {
      name: 'Basic Tee',
    categories: {data:[{id:'1', attributes:{name:'Accessories',slug:'accessories',description:''}}]},
    price: 29,
    }
  },
};
