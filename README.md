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
- **Babel**: with react presets and es2015.
- **ESLint** (with _Prettier_ extension): ESLint is only reserved for quality-code purposes, while Prettier is in charge of the style and the formatting of the code.👌🏽✨
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

To build the app 👷🏽🚧

```bash
npm run build
```

To run the tests 🧐

```bash
npm run test
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

🚧 🚧 _Currently working on the deploy script_ 🚧 🚧

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
|   |  |__ stylesheets
|   |     |
|   |     |-- components
|   |     |   |__ index.scss
|   |     |-- _variables.scss
|   |     |__ index.scss
|   |
|   |__ index.js
|
|-- .eslintrc.json
|-- .gitignore
|-- .pretierrc
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

### Open on Sublime Text

```bash
git clone git@github.com:guillemdlopez/webpack-boilerplate.git frontend-project
cd frontend-project
rm -rf .git
npm install
stt # Open on Sublime Text
```

## About me

Hi!🙋🏽‍♂️ My name is [Guillem Delás](http://linkedin.com/in/guillemdelas) and I am a Fullstack Developer based in Barcelona. Please make sure to check out my [Portfolio](https://guillemdlopez.github.io/portfolio).

You can also check out some **Projects** that I made or I am currently working on:

1. [Flatify](http://flatify.club): please **make sure to inspect and activate mobile screen mode**.
2. [Games Master](http://games-master.herokuapp.com)
