# Contributing

## Getting started

1. Run yarn then yarn bootstrap in root directory

```shell
  yarn && yarn bootstrap
```

Lerna (a package for working with monorepository) will install all packages in every projects, and then it will link 'local' dependencies together. \
Because of integration with yarn workspaces, all overlapping packages will be grouped into _node_modules_ at the root directory.

2. Run yarn dev

```shell
  yarn dev
```

Lerna will concurrently run `yarn start` in all packages. \
Each package is already set to re-build whenever there are any changes in the source code (using nodemon). \
A website should be ready in [http://localhost:3000](http://localhost:3000)

## Known issues

1. `You may need an additional loader to handle the result of these loaders.`

**Cause**: any 'dist' directory or its content has been removed while demo site is running.\
**Solution:** run `yarn bootstrap` on root directory

## Available scripts

- [@forward-protocol/uikit](./packages/core/DEVELOPER.md)
- [@forward-protocol/ui-icons](./packages/icons/DEVELOPER.md)
