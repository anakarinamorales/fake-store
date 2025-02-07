# My Fake Store

Case study for headless ecommerce using [Platzi Fake Store API](https://fakeapi.platzi.com/#features).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## TODO List

- [x] Have a landing page
- [x] Have a list page with all the products listed there as links to a detail page
- [x] Have a detail page with detailed product info
- [x] Setup deploy to Vercel so I can have a production environment
- [x] Add tempalte that includes header and footer to all pages
- [ ] Have a detailed readme with all the info to run the project
- [ ] Setup test for dev mode
- [ ] Setup Husky to wait for tests to pass so then you can commit your changes
- [ ] Setup PR pipeline to wait for tests to pass so then you can merge your PR
- [ ] Show + and - input on cart & item pages to increase and decrease the quantity of the product
- [ ] Show initial value of quantity input on product & cart pages as 1 or the current quantity of the product on the cart
- [ ] Apply accessibility measures for logo in header (hide svg from screen readers, add aria title or something to be read instead).
- [ ] Make theme toggle accessible to screen readers

## 🤖 TechSpec

-   NextJS 14
-   TypeScript
-   CSS Modules

## 🌐 Environment variables

Create an `.env` file in the root folder. Check the `.example.env` file to see what variables you need to fill in so the app works.

## 🏡 Local development

Project built with node `v21.1.0`. Install it using your node version manager of preference.
Install the dependencies using `yarn` or `npm i`.

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌎 Environments

-   Local development: [http://localhost:3000](http://localhost:3000)
<!-- -   Staging: -->
-   Production: [https://fake-store-weld.vercel.app/](https://fake-store-weld.vercel.app/)

## 🛠️ Building the project

To build the project & start the production server run `yarn build && yarn start`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

<!-- ## 📝 VSCode editor configuration

If you wish to add some handy configuration to your VSCode environment for automatically fixing errors on save, add the following file to the root of your directory:

```json .vscode/settings.json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript", "typescript", "typescriptreact"]
}
``` -->
