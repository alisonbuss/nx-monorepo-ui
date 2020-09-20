
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












This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@nx-monorepo-docker/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.





### License

[<img width="190" src="https://raw.githubusercontent.com/alisonbuss/my-licenses/master/files/logo-open-source-550x200px.png">](https://opensource.org/licenses)
[<img width="166" src="https://raw.githubusercontent.com/alisonbuss/my-licenses/master/files/icon-license-mit-500px.png">](https://github.com/alisonbuss/nx-monorepo-docker/blob/master/LICENSE)
