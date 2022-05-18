# @forward-protocol/uikit

## About

This package provides not only all core UI components, but also scss variables and mixins.

## Table of contents

- [Installation](#installation)
- [Example usage](#example-usage)

## Installation

with npm

```shell
  npm install @forward-protocol/uikit
```

with yarn

```shell
  yarn add @forward-protocol/uikit
```

## Example usage

Using components

```typescript
import { Avatar } from '@forward-protocol/uikit';

// Import styles
import '@forward-protocol/uikit/dist/assets/styles/index.css';

// Then use it as a normal React component
<Avatar variant="Default" size="XL" />;
```

Using scss variables and mixins in scss files

```scss
@import '~@forward-protocol/uikit/dist/assets/styles/_colors_.scss';
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs nodemon on the entry file and watching for changes.\
It will automatically trigger the build script for further using it in the demo site.

### `yarn build`

Build package and output in `dist` folder using rollup.
