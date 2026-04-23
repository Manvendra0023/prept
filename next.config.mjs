/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode:false,

  // Allow Ngrok URLs in development
  allowedDevOrigins: [
    "*.ngrok-free.dev",
  ],

  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "randomuser.me"
      }
    ]
  }
};

export default nextConfig;
