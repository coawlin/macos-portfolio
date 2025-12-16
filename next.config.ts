import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'autoplay=*, cross-origin-isolated=*, clipboard-read=*, clipboard-write=*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
