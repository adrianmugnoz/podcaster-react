# Podcaster React

Application for exploring most popular podcasts from iTunes. It consists on three pages:

- Home: Displays the 100 most popular podcasts allowing to filter them by name or author.
- Podcast: Displays a particular podcast information and its episodes list.
- Episode: Displays a particular episode information and a player for listen it.

## Usage

```bash
# Npm
git clone https://github.com/adrianmugnoz/podcaster-react.git
npm install
npm start
```

A new browser will be opened automatically at `http://localhost:3000`.

## Tech Stack
- [Webpack](https://webpack.js.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Vanilla Extract](https://vanilla-extract.style/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

TanStack Query have been chosen in order to simplify the app state management, as it offers a set of utilities for managing network requests and its caching out of the box.

For the styles, it uses Vanilla Extract as provides type-safe way for generating static css at build time with zero runtime. It also provides a simple theming system, for this application has been created a light mode color scheme theme, but it would be really straight forward to generate different themes, for example, a dark mode theme with a theme selector that could be managed with a React Context.

## Tests
The application tests can be executed as follows:
```bash
# Npm
npm run test
```

This is a work in progress. It has been included tests using `React Testing Library` for all the `shared and core components`, also unit testing for the `shared utils`. A coverage report is generated when executing tests.

It is also intended to include some e2e test using `Cypress` or `Playwright`.