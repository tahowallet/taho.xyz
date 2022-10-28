# tallyho.cash

The primary website for Tally Ho, the community-owned web3 wallet.

## Local development

To develop the site locally

```shell
yarn install
yarn start
```

You can visit the site locally at `https://localhost:8000` 🎉

## Deployment

The site is currently hosted and deployed by [Netlify](https://netlify.com).

## Manifesto dapp backend

### Context and structure

We are using firebase functions as a back-end for our manifesto dapp. It's located in the `manifesto-dapp-backend` folder.

The entry point is `./manifesto-dapp-backend/functions/src/index.ts`.
In the `index.ts` functions using the `functions` from `firebase-functions` are the deployed as a separate firebase function and they are the main entry points/APIs.

The functions are using credentials from the environment that they are run in and also from firebase secrets and a mixture of variables from the `.env...` files

See https://firebase.google.com/docs/functions/config-env

### Setup

- `cd manifesto-dapp-backend/functions/`
- `yarn install`
- [Install firebase cli](https://firebase.google.com/docs/cli)
- `firebase login` and login with tally.cash email
- `firebase projects:list` - if you have permission should see `tally-dev`, `tally-prd`, `tally-stg` in a table
  - if don't have a permission reach out on element, and your wish will probably be granted
- set up a `.env` file based on the `.env.example` and replace the relevant keys from 1password
  - this is required only for local development. These variables are [stored in secrets](https://console.cloud.google.com/security/secret-manager?project=tally-prd)

### Deployment

- `cd manifesto-dapp-backend/functions/`
- (check `manifesto-dapp-backend/functions/package.json` for available commands)
- make sure you are logged in and have permission for the project you want to deploy
- `yarn deploy:<prd|stg|dev>`
  - build is run in a predeploy hook. Cehck `firebase.json`
