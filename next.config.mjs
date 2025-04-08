import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com'],
      },
};

export default withFlowbiteReact(nextConfig);