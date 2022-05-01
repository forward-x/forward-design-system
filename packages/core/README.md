# @forward-ui/core

## About

This package provides not only all core UI components, but also scss variables and mixins.

## Table of contents

- [Installation](#installation)
- [Example usage](#example-usage)

## Installation

with npm

```shell
  npm install @forward-ui/core
```

with yarn

```shell
  yarn add @forward-ui/core
```

## Example usage

Using components
```typescript
import { Avatar } from '@forward-ui/core';

// Import styles
import '@forward-ui/core/dist/assets/styles/index.css';

// Then use it as a normal React component
<Avatar variant="Default" size="XL" />;
```

Using scss variables and mixins in scss files
```scss
@import "~@forward-ui/core/dist/assets/styles/_colors_.scss";
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs nodemon on the entry file and watching for changes.\
It will automatically trigger the build script for further using it in the demo site.

### `yarn build`

Build package and output in `dist` folder using rollup.
