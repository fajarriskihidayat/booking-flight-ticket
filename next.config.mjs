/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rxrahdpfgysmdorgqlvn.supabase.co",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
