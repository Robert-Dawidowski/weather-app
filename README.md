# Weather App

Check weather in every city you want

## 💿 Install

### You need to have Node version ^18.0.0 || >=20.0.0

Set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |

After completing the installation, your environment is ready for Vuetify development.

## 💡 Setup

This section covers how to start the development server and build your project for production.

### Setup API_KEY 
Create `.env` file in root, based on `.env.dist` file and paste your api key from openWeatherMap

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

(Repeat for npm, pnpm with respective commands.)


### Building for Production

To build your project for production, use:

```bash
yarn build
```

(Repeat for npm, pnpm with respective commands.)

Once the build process is completed, your application will be ready for deployment in a production environment.

## 🪒 Usage

To see the weather in a given city, search for the name in the search engine.
Once you find the city, information and a map will appear. The map is usable and after clicking on a point on it, e.g. the center of London,
it will show us the weather in the city we clicked on

## 📑 License
[MIT](http://opensource.org/licenses/MIT)
