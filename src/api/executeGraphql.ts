import { type TypedDocumentString } from "@/gql/graphql";
import { type GraphqlResponse } from "@/types";

export const executeGraphql = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  if (!process.env.GRAPHQL_URL) {
    throw TypeError("GRAPHQL_URL is not defined");
  }

  const res = await fetch(process.env.GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      "Content-Type": "application/json", "Authorization": `Bearer ${process.env.GRAPHQL_TOKEN}`,
    },
  });

  const graphqlResponse = (await res.json()) as GraphqlResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(`GraphQL Error`, {
      cause: graphqlResponse.errors,
    });
  }

  return graphqlResponse.data;
};

export const executeInstantGraphql = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  revalidate: number,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  if (!process.env.GRAPHQL_URL) {
    throw TypeError("GRAPHQL_URL is not defined");
  }

  const res = await fetch(process.env.GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate,
    },
    headers: {
      "Content-Type": "application/json", "Authorization": `Bearer ${process.env.GRAPHQL_TOKEN}`,
    },
  });

  const graphqlResponse = (await res.json()) as GraphqlResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(`GraphQL Error`, {
      cause: graphqlResponse.errors,
    });
  }

  return graphqlResponse.data;
};
