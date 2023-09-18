/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList($first: Int, $skip: Int) {\n  categories(first: $first, skip: $skip) {\n    id\n    name\n    slug\n    description\n  }\n}": types.CategoriesGetListDocument,
    "query ProductGetDetails($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    slug\n    categories {\n      id\n      name\n    }\n    description\n    images {\n      id\n      url\n      alt\n    }\n    price\n  }\n}": types.ProductGetDetailsDocument,
    "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    slug\n    categories {\n      id\n      name\n    }\n    description\n    images {\n      id\n      url\n      alt\n    }\n    price\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList($first: Int, $skip: Int) {\n  categories(first: $first, skip: $skip) {\n    id\n    name\n    slug\n    description\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetDetails($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    slug\n    categories {\n      id\n      name\n    }\n    description\n    images {\n      id\n      url\n      alt\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductGetDetailsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    id\n    name\n    slug\n    categories {\n      id\n      name\n    }\n    description\n    images {\n      id\n      url\n      alt\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
