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
import '@forward-protocol/uikit/assets/styles/index.css';

// Then use it as a normal React component
<Avatar variant="default" size="XL" />;
```

Using scss variables and mixins in scss files

```scss
@import '~@forward-protocol/uikit/assets/styles/_colors.scss';
```
