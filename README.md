# react-use-open

[![Version](https://img.shields.io/npm/v/react-use-open.svg)](https://www.npmjs.com/package/react-use-open)
![Bundle size](https://img.shields.io/bundlephobia/minzip/react-use-open.svg)
[![MIT licensed](https://img.shields.io/github/license/edvein-rin/react-use-open.svg)](https://github.com/edvein-rin/react-use-open/blob/master/LICENSE)

A simple [React hook](https://react.dev/reference/react/hooks) for managing open/closed states of components.

:zap: **Fully typed**. Developed in TypeScript with type definitions included and validated using [tsd](https://github.com/SamVerschueren/tsd).

:sparkles: **Test-driven**. Comprehensive test coverage of the API.

## Requirements

```
React >= 16.8.0
```

## Installation

### NPM

```bash
npm install react-use-open
```

### YARN

```bash
yarn add react-use-open
```

### PNPM

```bash
pnpm add react-use-open
```

## Usage

### `useOpen`

The hook function accepts an optional `defaultValue` argument, which sets the initial state. Default value is `false` (closed).  
The hook returns an object containing the current state `isOpen` along with functions to manage the state: `open`, `close` and `toggle`.

#### Signature

```typescript
function useOpen(defaultValue?: boolean): {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};
```

#### Examples

```javascript
import React from "react";
import { useOpen } from "react-use-open";

function Accordion() {
  const { isOpen, toggle } = useOpen(true);

  return (
    <>
      <button onClick={toggle}>Toggle</button>
      {isOpen && <p>Hidden text</p>}
    </>
  );
}
```

```javascript
import React from "react";
import { useOpen } from "react-use-open";

import { Modal } from "./Modal";

function Page() {
  const { isOpen, open, close } = useOpen();

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal open={isOpen} onClose={close} />
    </>
  );
}
```
