/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rxrahdpfgysmdorgqlvn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
