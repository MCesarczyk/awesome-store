import { authMiddleware } from "@clerk/nextjs";

// eslint-disable-next-line import/no-default-export
export default authMiddleware({
  publicRoutes: ["/", "/search", "/cart", "/categories", "/categories/(.*)", "/collections", "/collections/(.*)", "/products", "/products/(.*)", "/product", "/product/(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
