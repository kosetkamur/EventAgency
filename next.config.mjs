/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'raigoreg.beget.tech',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
