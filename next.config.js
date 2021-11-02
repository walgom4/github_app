/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env:{
    "NEXT_PUBLIC_GITHUB_ID":"4f262cc9e20d3043da02",
    "NEXT_PUBLIC_BASE_URL_API":"https://api.github.com/graphql",
    "NEXT_PUBLIC_BASE_URL_TOKEN":"https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth",
    "NEXT_PUBLIC_LIMIT":10,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
}
