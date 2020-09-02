# Angular, NgRx, Material design
by [@derevenkoyurii](https://www.linkedin.com/in/yurii-derevenko-747967125/)

## Getting started

```bash
git clone https://github.com/derevenkoyurii/angular-ngrx-material-starter.git new-project
cd new-project
npm install
npm start
```

## Useful Commands

- `npm start` - starts a dev server and opens browser with running app
- `npm run start:prod` - runs full prod build and serves prod bundle
- `npm run format:write` - runs prettier to format whole code base (`.ts` and `.scss`)
- `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application)

## Goals

The main goal of this repository is to provide an up to date example of Angular application following all recent best practices in various areas like:

- `@ngrx/store` - including reducers, actions, selectors
- `@ngrx/effects` - for implementation of side effects like `http` requests, logging, notifications,...
- `@ngrx/entity` - for CRUD operations
- `@ngrx/router-store` - to connect the Angular Router to @ngrx/store
- `@ngrx/store-devtools` - to enable a powerful time-travelling debugger.
- `@angular/material` - material design component library, theming, ...
- routing
- Angular CLI configuration (prod build, budgets, ...)

## Features

- custom themes support (5 themes included)
- lazy-loading of feature modules
- lazy reducers
- localStorage ui state persistence
- `@ngrx/effects` for API requests
- fully responsive design
- angular-material and custom components

## Branching strategy
Developer must follow `git flow` branching strategy:
- Branch name for production releases: `master`
- Branch name for "next release" development: `develop`
- Feature branch prefix: `feature/`
- Bugfix branch prefix: `bugfix/`
- Release branch prefix: `release/`
- Hotfix branch prefix: `hotfix/`
- Support branch prefix: `support/`
