/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	experimental: {
		typedRoutes: true,
		serverActions: true,
		mdxRs: true,
	},
};

const withMdxRs = require('@next/mdx')();
module.exports = withMdxRs(nextConfig);
