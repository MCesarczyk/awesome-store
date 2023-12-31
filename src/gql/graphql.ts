/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Maybe<Product>>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CategoryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection = {
  __typename?: 'Collection';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Maybe<Product>>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CollectionProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = {
  __typename?: 'Image';
  alt: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: Order;
  createOrderItem: OrderItem;
  deleteOrder: Order;
  deleteOrderItem: OrderItem;
  updateOrder: Order;
  updateOrderItem: OrderItem;
  updateProductQuantity: OrderItem;
};


export type MutationCreateOrderArgs = {
  total: Scalars['Int']['input'];
};


export type MutationCreateOrderItemArgs = {
  order: OrderInput;
  product: ProductInput;
  quantity: Scalars['Int']['input'];
  total: Scalars['Int']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID']['input'];
  orderItems?: InputMaybe<Array<OrderItemInput>>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateOrderItemArgs = {
  id: Scalars['ID']['input'];
  order: OrderInput;
  product: ProductInput;
  quantity: Scalars['Int']['input'];
  total: Scalars['Int']['input'];
};


export type MutationUpdateProductQuantityArgs = {
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  total: Scalars['Int']['input'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  status: Scalars['String']['output'];
  total: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderInput = {
  id: Scalars['ID']['input'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderItemInput = {
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type Product = {
  __typename?: 'Product';
  categories: Array<Category>;
  collections: Array<Collection>;
  colors: Array<ProductColor>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Image>;
  name: Scalars['String']['output'];
  orderItems: Array<OrderItem>;
  price: Scalars['Int']['output'];
  reviews: Array<Review>;
  sizes: Array<ProductSize>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductColor = {
  __typename?: 'ProductColor';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type ProductInput = {
  id: Scalars['ID']['input'];
};

export type ProductSize = {
  __typename?: 'ProductSize';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Int']['output'];
};

export type ProductsInputFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Maybe<Category>>;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
};


export type QueryCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrdersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CartAddItemMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  total: Scalars['Int']['input'];
}>;


export type CartAddItemMutation = { __typename?: 'Mutation', createOrderItem: { __typename?: 'OrderItem', id: string } };

export type CartAddProductMutationVariables = Exact<{
  orderItemId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  total: Scalars['Int']['input'];
}>;


export type CartAddProductMutation = { __typename?: 'Mutation', updateOrderItem: { __typename?: 'OrderItem', id: string } };

export type CartCreateMutationVariables = Exact<{
  total: Scalars['Int']['input'];
}>;


export type CartCreateMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string, total: number, orderItems: Array<{ __typename?: 'OrderItem', id: string, productId: string, quantity: number, total: number }> } };

export type CartDeleteItemMutationVariables = Exact<{
  orderItemId: Scalars['ID']['input'];
}>;


export type CartDeleteItemMutation = { __typename?: 'Mutation', deleteOrderItem: { __typename?: 'OrderItem', id: string } };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  status: Scalars['String']['input'];
}>;


export type CartGetByIdQuery = { __typename?: 'Query', order?: { __typename?: 'Order', id: string, total: number, orderItems: Array<{ __typename?: 'OrderItem', id: string, productId: string, quantity: number, total: number }> } | null };

export type CartFragment = { __typename?: 'Order', id: string, total: number, orderItems: Array<{ __typename?: 'OrderItem', id: string, productId: string, quantity: number, total: number }> };

export type CartUpdateQuantityMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  total: Scalars['Int']['input'];
}>;


export type CartUpdateQuantityMutation = { __typename?: 'Mutation', updateProductQuantity: { __typename?: 'OrderItem', id: string } };

export type CartUpdateTotalMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  total: Scalars['Int']['input'];
}>;


export type CartUpdateTotalMutation = { __typename?: 'Mutation', updateOrder: { __typename?: 'Order', id: string, total: number, orderItems: Array<{ __typename?: 'OrderItem', id: string, productId: string, quantity: number, total: number }> } };

export type CategoriesGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoriesGetListQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, slug: string, description: string } | null> };

export type CollectionsGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CollectionsGetListQuery = { __typename?: 'Query', collections?: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, description: string } | null> | null };

export type ProductGetDetailsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetDetailsQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, slug: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string, name: string, slug: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, description: string }>, sizes: Array<{ __typename?: 'ProductSize', id: string, name: string, value: number }>, colors: Array<{ __typename?: 'ProductColor', id: string, name: string, value: string }>, images: Array<{ __typename?: 'Image', id: string, url: string, alt: string }> } | null };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  categorySlug: Scalars['String']['input'];
}>;


export type ProductsGetByCategorySlugQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, name: string, slug: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string, name: string, slug: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, description: string }>, images: Array<{ __typename?: 'Image', id: string, url: string, alt: string }> } | null> | null };

export type ProductsGetByCollectionSlugQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  collectionSlug: Scalars['String']['input'];
}>;


export type ProductsGetByCollectionSlugQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, name: string, slug: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string, name: string, slug: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, description: string }>, images: Array<{ __typename?: 'Image', id: string, url: string, alt: string }> } | null> | null };

export type ProductsGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, name: string, slug: string, description: string, price: number, categories: Array<{ __typename?: 'Category', id: string, name: string, slug: string, description: string }>, collections: Array<{ __typename?: 'Collection', id: string, name: string, slug: string, description: string }>, images: Array<{ __typename?: 'Image', id: string, url: string, alt: string }> } | null> | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Order {
  id
  total
  orderItems {
    id
    productId
    quantity
    total
  }
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($orderId: ID!, $productId: ID!, $quantity: Int!, $total: Int!) {
  createOrderItem(
    quantity: $quantity
    total: $total
    product: {id: $productId}
    order: {id: $orderId}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($orderItemId: ID!, $orderId: ID!, $productId: ID!, $quantity: Int!, $total: Int!) {
  updateOrderItem(
    id: $orderItemId
    quantity: $quantity
    total: $total
    product: {id: $productId}
    order: {id: $orderId}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($total: Int!) {
  createOrder(total: $total) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  total
  orderItems {
    id
    productId
    quantity
    total
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartDeleteItemDocument = new TypedDocumentString(`
    mutation CartDeleteItem($orderItemId: ID!) {
  deleteOrderItem(id: $orderItemId) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartDeleteItemMutation, CartDeleteItemMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!, $status: String!) {
  order(id: $id, status: $status) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  total
  orderItems {
    id
    productId
    quantity
    total
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartUpdateQuantityDocument = new TypedDocumentString(`
    mutation CartUpdateQuantity($productId: ID!, $quantity: Int!, $total: Int!) {
  updateProductQuantity(productId: $productId, quantity: $quantity, total: $total) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartUpdateQuantityMutation, CartUpdateQuantityMutationVariables>;
export const CartUpdateTotalDocument = new TypedDocumentString(`
    mutation CartUpdateTotal($id: ID!, $total: Int!) {
  updateOrder(id: $id, total: $total) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  total
  orderItems {
    id
    productId
    quantity
    total
  }
}`) as unknown as TypedDocumentString<CartUpdateTotalMutation, CartUpdateTotalMutationVariables>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList($first: Int, $skip: Int) {
  categories(first: $first, skip: $skip) {
    id
    name
    slug
    description
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList($first: Int, $skip: Int) {
  collections(first: $first, skip: $skip) {
    id
    name
    slug
    description
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductGetDetailsDocument = new TypedDocumentString(`
    query ProductGetDetails($id: ID!) {
  product(id: $id) {
    id
    name
    slug
    categories {
      id
      name
      slug
      description
    }
    collections {
      id
      name
      slug
      description
    }
    description
    sizes {
      id
      name
      value
    }
    colors {
      id
      name
      value
    }
    images {
      id
      url
      alt
    }
    price
  }
}
    `) as unknown as TypedDocumentString<ProductGetDetailsQuery, ProductGetDetailsQueryVariables>;
export const ProductsGetByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetByCategorySlug($first: Int, $skip: Int, $categorySlug: String!) {
  products(first: $first, skip: $skip, category: $categorySlug) {
    id
    name
    slug
    description
    categories {
      id
      name
      slug
      description
    }
    collections {
      id
      name
      slug
      description
    }
    images {
      id
      url
      alt
    }
    price
  }
}
    `) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetByCollectionSlugDocument = new TypedDocumentString(`
    query ProductsGetByCollectionSlug($first: Int, $skip: Int, $collectionSlug: String!) {
  products(first: $first, skip: $skip, collection: $collectionSlug) {
    id
    name
    slug
    description
    categories {
      id
      name
      slug
      description
    }
    collections {
      id
      name
      slug
      description
    }
    images {
      id
      url
      alt
    }
    price
  }
}
    `) as unknown as TypedDocumentString<ProductsGetByCollectionSlugQuery, ProductsGetByCollectionSlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($first: Int, $skip: Int, $collection: String, $category: String, $name: String, $description: String) {
  products(
    first: $first
    skip: $skip
    collection: $collection
    category: $category
    name: $name
    description: $description
  ) {
    id
    name
    slug
    categories {
      id
      name
      slug
      description
    }
    collections {
      id
      name
      slug
      description
    }
    description
    images {
      id
      url
      alt
    }
    price
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;