/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '89.111.173.125',
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
