# typescript-babel-webpack-ie11-boilerplate
Scaffold for projects with Typescript that need IE11 Support.

Uses current versions of Webpack (5.x), Babel (7.x) and Typescript (4.x)

## Install

After cloning this repository run

    npm install

## Developing

Run both npm Scripts to compile and bundle

    npm run compile:watch
    npm run bundle:watch


## How it works

* Typescript compiler (tsc) will compile ts to js (ES2015)
* Webpack will make use of Babel to transpile js (ES2015) to js (ES5) and include polyfills if necessary to support IE11
* Webpack will eventually create a bundle file dist/bundle.js


## Todos

This is just a minimal configuration to get started. You likely want to adapt it to fit your needs by adding npm scripts or adapting config-files. You may also want to add some type defintions for typescript.
