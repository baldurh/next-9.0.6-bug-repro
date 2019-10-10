# Next.js bug repro

This repo reproduces a bug introduced in Next.js v9.0.6 and is unfixed in 9.1.1
The bug appears when you try to include files from outside the main next.js project folder

## Steps to reproduce

1. Clone the repo
0. `cd` into `[project]/app`
0. Run `yarn`
0. Run `yarn dev`
0. Load the page and see everything is working nicely
0. Kill the dev server
0. Run `yarn add next@9.0.6`
0. Run `yarn dev`
0. Load the page and see the `Invalid hook call` error