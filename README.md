# Frontend Boilerplate 🎨 👩🏽‍🎨 👨🏾‍🎨

> Frontend Boilerplate to start running a Frontend project.

- [Tooling 🧑🏽‍💻](#tooling)
- [Frameworks](#frameworks)
- [Scripts](#scripts)
- [Folder Tree 🗂](#folder-tree)
- [Let's Start ▶️](#start)
- [About Me](#about-me)

## Tooling

It includes the following stack:

- **Webpack 5**: with .js and .jsx file extensions.
- **Babel**: with react presets (runtime set to automatic), es2015 and core-js to enable polyfills.
- **ESLint**: with [Prettier](https://prettier.io/) and [React Plugin](https://www.npmjs.com/package/eslint-plugin-react) extensions. ESLint is only reserved for quality-code purposes, while Prettier is in charge of the style and the formatting of the code.👌🏽✨
- Enabled Hot reloading ✅
- Enabled Live Reloading ✅
- **Jest** and **Enzyme** for testing 🧐
- Included new [Enzyme Adapter](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17) for **React 17**

## Frameworks

This boilerplate includes **React** ⚛️

## Scripts

To start the local Web Dev Server (usually on port `8080`) ▶️

```bash
npm start
```

To run the tests 🧐

```bash
npm test
```

To build the app 👷🏽🚧

```bash
npm run build
```

To check the coverage of your test suites. 💯

```bash
npm run test-coverage
```

To delete the dist and coverage folders 🧼

```bash
npm run clean
```

To check out for quality-code 👌🏽

```bash
npm run lint
```

To deploy it to github-pages

```bash
npm run deploy
```

## Folder tree

```
.
|
|--- public
|   |___ index.html
|
|--- src
|   |-- javascript
|   |   |__ App.jsx
|   |
|   |-- style
|   |  |-- images
|   |  |-- stylesheets
|   |  |  |
|   |  |  |-- components
|   |  |  |   |__ index.scss
|   |  |  |-- _variables.scss
|   |  |  |__ index.scss
|   |  |
|   |  |__ tests
|   |     |
|   |     |-- snapshots
|   |     |__ App.test.jsx
|   |
|   |-- index.js
|   |__ setupTests.js
|
|-- .eslintrc.json
|-- .gitignore
|-- .pretierrc
|-- babel.config.js
|-- jest.config.js
|-- package-lock.json
|-- package.json
|-- README.md
|__ webpack.config.js
```

## Start

### Open on VS Code

```bash
git clone git@github.com:guillemdlopez/webpack-boilerplate.git frontend-project
cd frontend-project
rm -rf .git
npm install
code . # Open on Visual Studio Code
```

<details><summary>Do you prefer yarn?</summary><p>

```bash
git clone git@github.com:guillemdlopez/webpack-boilerplate.git frontend-project
cd frontend-project
rm -rf .git
yarn install
code . # Open on Visual Studio Code
```

</p></details>

### Open on Sublime Text

```bash
git clone git@github.com:guillemdlopez/webpack-boilerplate.git frontend-project
cd frontend-project
rm -rf .git
npm install
stt # Open on Sublime Text
```

<details><summary>Do you prefer yarn?</summary><p>

```bash
git clone git@github.com:guillemdlopez/webpack-boilerplate.git frontend-project
cd frontend-project
rm -rf .git
yarn install
stt # Open on Sublime Text
```

</p></details>

## About me

Hi!🙋🏽‍♂️ My name is [Guillem Delás](http://linkedin.com/in/guillemdelas) and I am a Fullstack Developer based in Barcelona. Please make sure to check out my [Portfolio](https://guillemdlopez.github.io/portfolio).

You can also check out some **Projects** that I made or I am currently working on:

1. [Flatify](http://flatify.club): please **make sure to inspect and activate mobile screen mode**.
2. [Games Master](http://games-master.herokuapp.com)
