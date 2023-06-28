# Yext Master Reporsitory of Google Place Autocomplete and Google Map

This repository provides a basic example of how to start developing a React site on the Yext Pages system using google map and google place autocomplete.

## Getting Started

### Prerequisites

1. Have the Yext CLI installed: https://hitchhikers.yext.com/guides/cli-getting-started-resources/01-install-cli/
1. Have Deno installed, version 1.21.0 or later: https://deno.land/manual/getting_started/installation
1. Have node installed, version 17 or later: https://nodejs.org/en/download/

### Clone this repo and install dependencies
```shell
git clone https://github.com/rajendraprasadjat/google-map-with-autocomplete.git
cd google-map-with-autocomplete
npm install
npm run prepare
```

### Recommended Development Flow

# Before starting development create .env file with following variables:
```
YEXT_PUBLIC_UNIVERSE="staging or production"
YEXT_PUBLIC_PAGE_LIMIT=
YEXT_PUBLIC_TIME_ZONE=
YEXT_PUBLIC_GOOGLE_API_KEY=
YEXT_PUBLIC_DEFAULT_LATITUDE=
YEXT_PUBLIC_DEFAULT_LONGITUDE=
YEXT_PUBLIC_WEBSITE_URL=
YEXT_PUBLIC_ANALYTICS_ENABLE_DEBUGGING=
YEXT_PUBLIC_ANALYTICS_ENABLE_TRACKING_COOKIE=
YEXT_PUBLIC_DEFAULT_LOCALE=
YEXT_PUBLIC_ANSWER_SEARCH_API_KEY=
YEXT_PUBLIC_ANSWER_SEARCH_EXPERIENCE_KEY=
YEXT_PUBLIC_ANSWER_SEARCH_VERTICAL_KEY=
YEXT_PUBLIC_ANSWER_SEARCH_EXPERIENCE_VERSION="STAGING or PRODUCTION"
```

### Uses

## SearchProvider 

```jsx
<SearchProvider
    // default coordinates are required
    defaultCoordinates={{
        latitude: parseFloat(YEXT_PUBLIC_DEFAULT_LATITUDE),
        longitude: parseFloat(YEXT_PUBLIC_DEFAULT_LONGITUDE),
    }}
    // if you use mapbox then mapbox token is required
    mapboxAccessToken={YEXT_PUBLIC_MAP_BOX_API_KEY}
    // if you use google map or google autocomplete then google map api key is required
    googleApiKey={YEXT_PUBLIC_GOOGLE_API_KEY}
    // limit for results
    limit={parseInt(YEXT_PUBLIC_PAGE_LIMIT)}
    // map type google | mapbox
    mapType="google"
    // autocomplete type google | mapbox | text
    autocompleteType="google"
>
  ...Your code
</SearchProvider>
```

## props

| name                           | type                      | description                                                                                                                                                  |
| ------------------------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **defaultCoordinates**         | object                    | This object is used for default center coordinates of google map or mapbox. **The data is passed as `object` which is pair of `Latitude` and `Longitude`.**  |
| **mapboxAccessToken**          | string                    | This is for `mapbox` access token. if you use `mapbox` as map this is require key.                                                                           |
| **googleApiKey**               | string                    | This is for `google map` or `google autocomplete` api key. if you use `google map` as map or `google autocomplete` as autocomplete then this is require key. |
| **limit**                      | number                    | This is for `limit`.                                                                                                                                         |
| **mapType**                    | google or mapbox          | used for which maptype you want `google` or `mapbox`.                                                                                                        |
| **autocompleteType**           | google / mapbox / yext    | used for which autocomplete type you want `google` or `mapbox` or `yext`.                                                                                    |




While _developing locally_, run the following command:
```
npm run dev
```

This command will start a Vite-powered dev server that will enable hot-reloading. Additionally, the command will generate a `localData` directory that contains a subset of your Knowledge Graph data. This command is automatically in "dynamic" mode, which means it will pull data updates automatically from your Knowledge graph, so real-time data changes in your Yext account will be reflected in your local dev site.

NOTE: Whenever you make changes to your stream definitions, you must re-run `npm run dev` for the system to update the `features.json` and the required entities to power your site.

_Before committing_ your code, we recommend running the following command:

```
npm run build:serve
```

This command will generate a production build of your site, so you can ensure there are no build errors or unexpected behavior. This build step replicates the production build environment used in the Yext system, and serves your data at `localhost:8000`.

In practice, development builds (via `npm run dev`) and production builds compile and bundle assets differently. For local development, ES Modules are loaded directly by the browser, allowing fast iteration during local development and also allows for hot module replacement (HMR). Other things like CSS are also loaded directly by the browser, including linking to sourcemaps. During a production build all of the different files are compiled (via ESBuild for jsx/tsx) and minified, creating assets as small as possible so that the final html files load quickly when served to a user. Tree-shaking also occurs during the build step, in which any unused dependencies are removed from your final build.

### Other Useful commands

`yext init` - Authenticates the Yext CLI with your Yext account

`yext pages generate-test-data` - pull an example set of `localData` from your account. This command is packaged within `npm run dev'.

`npm run build` - Runs a production build against your `localData`: part one of `npm run build:serve`

`npm run serve` - Runs a local server against your production-built files: part two of `npm run build:serve`

`npm run fmt` - Automatically formats all code

`npm run lint` - Run ESLint to check for errors and warnings

## Repository Layout

```
root
└───localData
└───sites-config
│   │   ci.json
└───src
│   └───assets
│   │   
│   └───components
│   │
│   └───templates
│       │   404.tsx
│       │   robots.ts
│       │   locator.tsx
│   │
│   └───types
```

### localData

Contains example stream documents that are used while local developing. By default this repo contains example files that work with the provided example templates. You can generate real stream documents specific to your Yext account via `yext pages generate-test-data`.

NOTE: You normally wouldn't want to check in the localData folder as it's only used for local dev. It is gitignored by default.

### sites-config

Contains a single `ci.json` file. This file defines how the Yext CI system will build your project. It is not used during local dev. However, it is used when running a local production build (i.e. `yext pages build`).

NOTE: A `features.json` file will automatically be generated during CI build for you based on the template configs defined in your templates. If this file doesn't exist then `yext pages build` will implicitly generate a new one when it calls `npm run build:local` (defined in `sites-config/ci.json`). In the recommended devleopment flow with `npm run dev`, the `features.json` will be automatically generated.

NOTE: After changing your stream definitions, you should rerun `yext pages generate` and `yext pages generate-text-data` to ensure your local build pulls in the required data from the Knowledge Graph

### src

#### components

This is where all of your custom components _may_ live. This folder is not required and you can set up your own custom folder structure for your own components in any way you'd like, as long as it lives in the `src` directory.

#### templates

Required. This is where your actual templates live. There are effectively two types of components:

1. stream-based templates: those that have an exported `config`
1. static templates: those that don't have an exported `config`.

#### types

Here you can define any custom TypeScript types you need.

#### index.scss

Not required. In this example this sets up Tailwind CSS.

### vite.config.js

Vite is now a first class member of the starter! This file defines any custom Vite configuration you want, giving you full control over your setup. Specifically, it will allows users to pass additional configuration options to the vite-plugin-yext-sites-ssg plugin when they become more widely available.

### Everything else

The rest of the files are basic config setup common to many other React projects. In this example we've enabled:

1. Tailwind CSS (which leverages PostCSS) - used for easy styling
2. ESLint - catches errors in your code
3. Prettier - formats your code (you can add .prettierrc to override any default settings)
4. TypeScript - adds typing to Javascript for a better developer experience
5. Husky - pre-commit testing for a better code quality.
