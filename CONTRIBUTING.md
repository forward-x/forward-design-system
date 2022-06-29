# Contributing

## Getting started

1. Run yarn then yarn bootstrap in root directory

```shell
  yarn 
```

then

```shell
  yarn bootstrap 
```
Lerna (a package for working with monorepository) will install all packages in every projects, and then it will link 'local' dependencies together. \
Because of integration with yarn workspaces, all overlapping packages will be grouped into _node_modules_ at the root directory.

2. If this is your **first time** running the project, please execute yarn build:all first in root directory

```shell
  yarn build:all 
```
Lerna will concurrently run `yarn build` in every packages in order to ensure that the below error will not occur.

3. Run yarn dev

```shell
  yarn dev
```

Lerna will concurrently run `yarn start` in all packages. \
Each package is already set to re-build whenever there are any changes in the source code (using nodemon). \
A website should be ready in [http://localhost:3000](http://localhost:3000)

## Committing
Please follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. \
Lerna will detect keywords in commit history and will update packages' version accordingly.

## Known issues

1. `You may need an additional loader to handle the result of these loaders.`

**Cause**: any 'dist' directory or its content has been removed while demo site is running.\
**Solution:** stop running the project then execute  `yarn build:all` on root directory

## Available scripts

- [@forward-protocol/uikit](./packages/core/DEVELOPER.md)
- [@forward-protocol/ui-icons](./packages/icons/DEVELOPER.md)
