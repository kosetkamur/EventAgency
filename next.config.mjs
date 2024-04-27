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
    fallback: 'blocking',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/ru',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
