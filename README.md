## Introduction

This website is built on [Next.js](https://nextjs.org/) project and use GraphQl to pull in the content from [Contentful](https://contentful.com/) for the blog.

## High level task list

- [x] **Intial build setup**
  - [x] Create a Next.Js Pipeline.
  - [x] Create high level component structure
  - [x] Work on better slicing from Figma theme
- [x] **Port whole Figma theme into Next.js**
  - [x] Build basic reusable components like Navbar and Footer
  - [x] Landing Page
  - [x] About Us Page
  - [x] Bank Account Page
  - [x] Contact Us Page
  - [x] Partners Page
  - [x] Pricing Page
  - [x] Services Page
  - [x] Wallet Page
- [x] **Setup Blog**
  - [x] Use Contentful as CMS
  - [x] Render the blog posts with appropriate content
- [x] **Refine and reduce the Lottie Animation and make it production ready**
  - [x] Rip out the animations to analyse what is happening and find a better solution
  - [x] Implement the better solution using the Next.Js components
  - [x] Replace the images with code for better load time
- [x] Improve the Load time. **Performance boost - 48 to ~75**
- [x] Fix the animations that were causing the performance issue
- [x] Fix the dark mode
- [x] Fix the SEO and work on better accessibilty.

**Final Handoff**

- [x] A brief overview of Pipelines and setup.
- [x] Walkthrough of content structure and folder structure.
- [x] How to add blog posts in contentful
- [x] How to Deploy

## Getting Started

First, install the dependencies by using yarn:

```bash
yarn
```

Now, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/[your-page].tsx`. The page auto-updates as you edit the file.

After, making changes you can build the website locally using:

```bash
yarn build
```

## Blog

#### Basic setup

1. Configuring your development environment - Look readme file in Readme
1. Setting up content structure in contentful - Look readme file in Readme
1. Setting up webhooks to trigger build - [https://vercel.com/guides/set-up-and-use-deploy-hooks-with-vercel-and-headless-cms](https://vercel.com/guides/set-up-and-use-deploy-hooks-with-vercel-and-headless-cms)

Read more in Readme

### Notes

- There is **git commit hook** (husky) to check the linting and other basic structure. So it is highly advised to make changes by following version control structre.

- This website uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a **custom Google Font**.

- The **Lottie animations** int eh websites are loaded and rendered using `react-lottie` player.

- **Redirection** - Redirects allow you to redirect an incoming request path to a different destination path. To use Redirects you can use the redirects key in `next.config.js`. Samples are added inside `redirects()` function.
  [Next.js redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)
  
- **Deployment** - You can deploy any platform you want, but the preferred way is Vercel who are the creators of NextJs. It is also the one I used to demo. You can read more about it here - [Choosing the best Next.js hosting platform](https://blog.logrocket.com/choosing-best-nextjs-hosting-platform/). Check out the Vercel doc for [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- **Domain** - the current domain settings needs to be changed and need to point it to the new server. If its vercel you can read the follwoing doc -[Adding & Configuring a Custom Domain](https://vercel.com/docs/concepts/projects/domains/add-a-domain) . It will be similar in most of the services.

## Learn More

To learn more about Next.js and other related things used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Contentful API Documentation](https://www.contentful.com/developers/docs/references/) - learn more about contentful API's.
- [Next.js pagination with Contentful and the GraphQL API](https://www.contentful.com/blog/paginating-contentful-blogposts-with-nextjs-graphql-api/) - How blog generally works

