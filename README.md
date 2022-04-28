# forward-design-system

## About

This project is a UI library developed based on [company's design system](https://www.figma.com/file/Aw4dzMdEuTRXL4dc4ovCu6/FORWARD-DESIGN-SYSTEM?node-id=8%3A288). \
This project is composed of 3 smaller packages:

1. [@forward-ui/core](./packages/core) containing core UI components
2. [@forward-ui/icons](./packages/icons) containing useful icons
3. [@forward-ui/site](./site) containing demo website for above packages

## Getting started

1. Run yarn bootstrap in root directory

```shell
  yarn bootstrap
```

Lerna (a package for working with monorepository) will install all packages in every projects, and then it will link 'local' dependencies together. \
Because of integration with yarn workspaces, all overlapping packages will be grouped into *node_modules* at the root directory. \

2. Run yarn dev

```shell
  yarn dev
```

Lerna will concurrently run `yarn start` in all packages. \
Each package is already set to re-build whenever there are any changes in the source code (using nodemon). \
A website should be ready in [http://localhost:3000](http://localhost:3000)
