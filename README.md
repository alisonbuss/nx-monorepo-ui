

```bash

$ npx create-nx-workspace --preset=empty --name=nx-monorepo-ui

$ npm create nx-workspace
npx: instalou 38 em 4.188s
✔ Workspace name (e.g., org name)     · nx-monorepo-ui
✔ What to create in the new workspace · angular
✔ Application name                    · helloworld-angular
✔ Default stylesheet format           · scss
✔ Default linter                      · eslint
✔ Use Nx Cloud? (Its free and doe...) · No

$ npm create nx-workspace
npx: instalou 38 em 3.932s
✔ Workspace name (e.g., org name)     · nx-monorepo-ui
✔ What to create in the new workspace · react
✔ Application name                    · helloworld-react
✔ Default stylesheet format           · scss
✔ Use Nx Cloud? (Its free and doe...) · No

$ cd ./nx-monorepo-ui









$ npm create nx-workspace









$ npm install @nrwl/angular --save-dev

$ ng g @nrwl/angular:app helloworld-angular
ng g @nrwl/angular:app helloworld-react





```





# Quickstart of a Nx set of extensible dev tools for monorepos.

#### Translation for: **[English](https://github.com/alisonbuss/nx-monorepo-docker/blob/master/README_LANG_EN.md)**.

#### Project Status: *(Development)*.

# NxMonorepoDocker


npm install -g @angular/cli
npm install -g @nrwl/schematics

Quando perguntado sobre 'preset', selecione 'empty' e 'Angular CLI' para a CLI.
npx create-nx-workspace@latest nx-monorepo-docker

cd ./nx-monorepo-docker

ng add @nrwl/workspace

npm install --save-dev @nrwl/angular

ng add @nrwl/angular --defaults

ng g @nrwl/angular:application todos



https://medium.com/@matheo/creating-a-full-stack-nx-monorepo-cbc5b88e4fa3
https://medium.com/@luisvieira_gmr/building-large-scale-react-applications-in-a-monorepo-91cd4637c131
https://blog.nrwl.io/why-you-should-switch-from-lerna-to-nx-463bcaf6821
https://hackernoon.com/4-ways-to-go-monorepo-in-2019-ea5d19fc1f08

https://mherman.org/blog/dockerizing-an-angular-app/
https://www.codementor.io/yomateo/angular-docker-dockerize-your-app-in-5-minutes-video-included-oohw2mzuj
https://dev.to/avatsaev/create-efficient-angular-docker-images-with-multi-stage-builds-1f3n
https://github.com/avatsaev/angular-contacts-app-example
https://medium.com/tree-inova/rodando-aplica%C3%A7%C3%A3o-angular-com-docker-e-nginx-9c28e7a99f4
https://dev.to/avatsaev/create-efficient-angular-docker-images-with-multi-stage-builds-1f3n

https://morioh.com/p/42531a398049?fbclid=IwAR2utUcXy1NFaLHwGp1wvaMkVH_2UHEeWD5FAFDJh69w4pDu9q23UVNt4Fc

https://nx.dev/angular/getting-started/getting-started
https://nx.dev/angular/tutorial/01-create-application
https://angularconsole.com
https://medium.com/@vsavkin
https://blog.nrwl.io/
https://blog.nrwl.io/misconceptions-about-monorepos-monorepo-monolith-df1250d4b03c


https://medium.com/@dolanmiu/death-to-the-nx-mono-repo-4de3c9b4f41c
https://hackernoon.com/one-vs-many-why-we-moved-from-multiple-git-repos-to-a-monorepo-and-how-we-set-it-up-f4abb0cfe469











# NxMonorepoUi

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Powerful, Extensible Dev Tools**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-monorepo-ui/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
