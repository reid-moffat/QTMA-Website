## QTMA website

The official website for [Queen's Tech and Media Association](https://qtma.ca) (QTMA)!

QTMA is a product development club & tech incubator at [Queen's University](https://www.queensu.ca/)
devoted to helping tech & business students successfully plan, design, build and launch software
products which are judged by industry specialists at the end of each school term.

<i>This is the code for the site which can be found at [qtma.ca](https://qtma.ca). Built with
[Next.js](https://nextjs.org/) and hosted with [Vercel](https://vercel.com/)</i>

## Running locally

First, install dependencies:
```bash
npm ci # can use 'npm i' but it's slower and re-writes package-lock.json
```

To start the site in development mode (recommended for dev work):
```bash
next dev
```

To start the site in production mode:
```bash
next build
next start
```
*(Note: Vercel deploys all changes to a preview site if you want to check it that way)*

Then to see the site, go to [http://localhost:3000](http://localhost:3000)
