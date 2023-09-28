/** @type {import('next').NextConfig} */
const { withGluestackUI } = require("@gluestack/ui-next-adapter");

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@gluestack-ui/themed",
    "react-native",
    "react-native-web",
    "react-native-svg",
  ],
};

module.exports = withGluestackUI(nextConfig);

//# sourceMappingURL=/Users/vidhikataria/Desktop/react-india-demo/.glue/__generated__/services/web/src/web/next.config.js.map