/** @type {import('next').NextConfig} */
import {i18n} from "next-i18next";


const nextConfig = {
    images: {
        // domains: ['raigoreg.beget.tech'],
        // formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'raigoreg.beget.tech',
                pathname: '**',
            },
        ],
    },
    i18n,
};

export default nextConfig;
