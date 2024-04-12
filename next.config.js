/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		pageExtensions: ['ts', 'tsx', 'mdx'],
		typedRoutes: true,
		serverActions: true,
		mdxRs: true,
	},
};

const withMdxRs = require('@next/mdx')();
module.exports = withMdxRs(nextConfig);
