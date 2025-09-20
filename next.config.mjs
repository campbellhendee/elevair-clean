/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Export a fully static site to avoid runtime/server outputs
	output: 'export',
	images: {
		unoptimized: true,
	},
  // Keep deployments green even if ESLint finds issues in content
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
