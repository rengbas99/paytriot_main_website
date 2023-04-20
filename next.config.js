/** @type {import('next').NextConfig} */
require('dotenv').config()

const bearerToken = process.env.bearerToken;
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net']
  },
  reactStrictMode: true,
  async redirects() {
    //  permanent: false - 307 redirection
    //  permanent: true - 308 redirection
    return [
      {
        source: '/team',
        destination: '/about-us',
        permanent: true
      }
      // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
      // {
      //   source: '/old-blog/:slug',
      //   destination: '/news/:slug',
      //   permanent: false
      // },
      // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
      // {
      //   source: '/blog/:slug*',
      //   destination: '/news/:slug*',
      //   permanent: false
      // },
      // Regex Path Matching - The regex below will match `/post/123` but not `/post/abc`
      // {
      //   source: '/post/:slug(\\d{1,})',
      //   destination: '/news/:slug',
      //   permanent: false
      // }
    ];
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
          esModule: false
        }
      }
    });
    return config;
  },

  env: {
    Bearer_Token: process.env.Bearer_Token,
  }
};

module.exports = nextConfig;


