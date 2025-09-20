/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Export a fully static site to avoid runtime/server outputs
	output: 'export',
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
