import { authMiddleware } from "@clerk/nextjs";

// eslint-disable-next-line import/no-default-export
export default authMiddleware({
  publicRoutes: ["/", "/login", "/signup"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
