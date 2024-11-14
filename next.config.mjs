/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com'
            },
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com'
            },
            {
                protocol: 'https',
                hostname: 'pokeapi.co'
            }
        ]
    }

};

export default nextConfig;
