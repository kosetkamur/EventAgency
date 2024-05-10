/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avantage-event.com',
                pathname: '**',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    // fallback: 'blocking',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/ru',
                permanent: true,
            },
        ];
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        config.module.rules.push({
            test: /\.pdf/,
            type: 'asset/resource',
            generator: {
                filename: 'static/[hash][ext]',
            },
        })

        return config;
    },
    experimental: {
        serverComponentsExternalPackages: ['@react-pdf/renderer'],
    }
};

export default nextConfig;
