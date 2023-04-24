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
      },

      //Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
      {
         source: '/home/newsdetail/:slug',
         destination: '/blog/:slug',
         permanent: false
      },
       //Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
       {
         source: '/home/newsdetail/:slug*',
         destination: '/blog/:slug*',
         permanent: false
       },
       //Regex Path Matching - The regex below will match `/post/123` but not `/post/abc`
       {
         source: '/post/:slug(\\d{1,})',
         destination: '/news/:slug',
         permanent: false
        }
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
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;


