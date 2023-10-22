import { type NavigationLinkProps } from "@/types";

export const createNavigationOptions = <T extends string>(): NavigationLinkProps<T>[] => [
  {
    href: "/",
    children: "Home",
    exact: true,
  },
  {
    href: "/products",
    children: "Products",
  },
];
