/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    reactStrictMode: !isProd,
    poweredByHeader: false,
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        dangerouslyAllowSVG: true,
    },
    experimental: {
        optimizePackageImports: [
            'lucide-react',
            'framer-motion',
        ],
    },
    headers: async() => {
        return [{
            source: '/:path*',
            headers: [
                { key: 'Cache-Control', value: 'public, max-age=31536000, must-revalidate' },
                { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
            ],
        }, ]
    },
};

module.exports = nextConfig;