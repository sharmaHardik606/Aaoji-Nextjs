import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.pexels.com'],
      },
};

export default withFlowbiteReact(nextConfig);