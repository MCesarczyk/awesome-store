import { API_URL } from "@/api/urls";
import { type ProductItem, type ProductItemType } from "@/ui/types";

export const productsApi = {
  getProductsList: async (): Promise<ProductItemType[]> => {
    const res = await fetch("https://api.hyperfunctor.com/graphql", {
      method: "POST", body: JSON.stringify({
        query: /* GraphQL */ `
        query getProductsList {
          products(pagination: {limit: 10}) {
            data {
              id
              attributes {
                name
                description
                images {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                price
              }
            }
          }
        }
          `
      }), headers: { "Content-Type": "application/json", "Authorization": "Bearer 0f39a5f9870e8521dec6ea55d278b0c7a7f01c674aef602fe716f43e11dc981e3f0512f1a7a6ecdc9c9ebb2ff31c7fbd31c4d2348599e827b5101017ad229c66944a23a012913ffc9a2221bbe24e56d7d4439884d1e00381cc38eb4ba1c3f41164879a6ed848f1225132896dce6efdff84dfa06c69b97cad7775ae0482f138c0" }
    });

    type GraphqlResponse<T> =
      | { data?: undefined; errors: { message: string }[] }
      | { data: T; errors?: undefined };

    interface ProductsGraphqlResponse {
      products: {
        data: {
          id: string;
          attributes: {
            name: string;
            slug: string;
            description: string;
            images: {
              data: {
                id: string;
                attributes: {
                  url: string;
                  alternativeText: string;
                }
              }[];
            };
            price: number;
          };
        }[]
      }
    }

    const graphqlResponse = await res.json() as GraphqlResponse<ProductsGraphqlResponse>;

    if (graphqlResponse.errors) {
      throw TypeError(graphqlResponse.errors[0].message);
    }

    return graphqlResponse.data.products.data.map(p => {
      return {
        id: p.id,
        attributes: {
          name: p.attributes.name,
          slug: p.attributes.slug,
          categories: { data: [] },
          description: p.attributes.description,
          images: {
            data: p.attributes.images.data.map(i => ({
              id: i.id,
              attributes: {
                url: i.attributes?.url || "",
                alternativeText: i.attributes?.alternativeText || ""
              }
            }))
          },
          price: p.attributes.price
        }
      }
    });
  },

  getProductsByPage: async (page: number, perPage: number = 10) => {
    const take = perPage;
    const offset = perPage * (page - 1);

    const res = await fetch(`${API_URL.getProducts}?take=${take}&offset=${offset}`);

    const products = (await res.json()) as ProductItem[];

    return products;
  },

  getProductById: async (id: string) => {
    const res = await fetch(API_URL.getProductById.replace(':productId', id));

    const product = (await res.json()) as ProductItem;

    return product;
  }
};
