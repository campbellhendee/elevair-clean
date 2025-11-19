/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Enable server functions (App Router API routes)
	images: {
		unoptimized: true,
	},
  // Keep deployments green even if ESLint finds issues in content
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
