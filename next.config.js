/** @type {import('next').NextConfig} */
const nextConfig = {
  	reactStrictMode: true,
	basePath: process.env.BASE_PATH,
	assetPrefix: process.env.ASSET_PREFIX,
	distDir: process.env.DIST_DIR,
	experimental: {
		workerThreads: false,
		cpus: 4
	}
}

module.exports = nextConfig
