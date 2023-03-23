#  Blog 

Our Blog is built with Next.js + Contentful Blog Starter

This is the repository for you to use to create a new blog site using Next.js and Contentful, using Contentful's GraphQL API.

[Read more about the GraphQL API](https://graphql.contentful.com).

# Getting set up

## Configuring your development environment

### Install dependencies

In a terminal window, navigate to the project directory and install dependencies with yarn.

```bash
yarn install
```

### Set your environment variables

At the root of the project, create a new `.env.local` file. Add the following environment variable names to the file:

```text
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
```

### Using example content from Contentful

**You can choose to use your own Contentful account, or connect to the example space that we've provided.**

If you'd like to view some example content in your development environment to get a feel for how it works, you can use the provided credentials in `env.local.example` which will connect your code to the example space provided by Contentful.

### Using your own Contentful account

To get started with your own Contentful space, [sign up for free](https://www.contentful.com/sign-up/).

Create a new space inside your Contentful account. Go to Settings > General Settings, and make a note of your space ID.

![A screenshot of space ID settings in the Contentful UI](https://nextjs-contentful-blog-starter.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F84zl5qdw0ore%2Fn9ttJm8yPPW1oL94Q54Oa%2F444e633d341fd919c7fce335c884b7d7%2Fspace_id.png&w=3840&q=75)

Generate a Content Delivery API access token for your Contentful space.

![A screenshot of access token settings in the Contentful UI](https://nextjs-contentful-blog-starter.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F84zl5qdw0ore%2F6AEfji9xoRk8t5O9a9Egc1%2Fdc420ed66d51ed8a21e39f709cce0686%2Faccess_token.png&w=3840&q=75)

Add your space ID and access token to your `.env.local` file.

## Importing the starter content model and example content into your own Contentful space

To get started quickly on your own version of the application, you can use the Contentful CLI to import the content model and the example content from the starter into your own Contentful space — without touching the Contentful UI!

### Install the Contentful CLI

```bash
#using homebrew
brew install contentful-cli


#using yarn
yarn add -g contentful-cli
```

### Authenticate with the CLI

Open a terminal and run:

```bash
contentful login
```

A browser window will open. Follow the instructions to log in to Contentful via the CLI.

### Import the content model and example content

The following command in your terminal, ensuring you switch out SPACE_ID for your new space ID.

```bash
cd src/helpers/blog/content-export.json

contentful space import --space-id SPACE_ID --content-file content-export.json
```

You should see this output in the terminal. The import will take around 1 minute to complete.

<!-- ![A screenshot of the import command running in a terminal](screenshot_import_terminal.png) -->

Refresh Contentful in your browser, navigate to the content model tab, and you'll find the content types have been imported into your space. You'll find the example content by clicking on the content tab.

![A screenshot of the imported content model in the Contentful UI](https://nextjs-contentful-blog-starter.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F84zl5qdw0ore%2F32TfUzzA9DJK31UTFLQmp3%2F3b0a6b868c874dff6dbe1587ff23ef7b%2Fcontent_model.png&w=3840&q=75)

## Running the application in development

Navigate to the project directory in a terminal window and run:

```bash
yarn dev
```

## Deploy this site to Vercel

During the deploy process, add the following environment variables to Verce. Use the same credentials as you set up in your local development environment.

```text
CONTENTFUL_SPACE_ID
CONTENTFUL_ACCESS_TOKEN
.
.
. and others
```

## Publish via webhooks

- Follow the steps in - https://vercel.com/guides/set-up-and-use-deploy-hooks-with-vercel-and-headless-cms

- So whenever a new blog post is published the site gets updated without any manual trigger
