# README

This is a sample LaunchDarkly implementation on Next.js using App Router with Client and Server components with various rendering strategins.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![](img/overview.gif)

## Getting Started
### Pre-requisites
* LaunchDarkly account
* Node >=16.8.x
* NextJS >=13.x

> Note: If you get a Server 500 error while running the app as discussed here: [vercel/next.js#49677](https://github.com/vercel/next.js/issues/49677), switch to Node v16.8.


### Setup
1. Create a feature flag in LaunchDarkly.

| flag key | flag type | description|
|---|---|---|
|simple-toggle| boolean|toggles flag status|

2. Install packages
```
> npm install
```
3. Create a `.env` file with the following:
```
LAUNCHDARKLY_SDK_KEY="<LaunchDarkly Server-side SDK Key"
CLIENT_SIDE_ID="<LaunchDarkly Client Side ID>"
```
## Running the demo


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
