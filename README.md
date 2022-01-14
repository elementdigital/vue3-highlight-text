# Vue3 Highlight Text

a vue3 directive of highlight text

## Installation

```sh
npm install --save vue3-highlight-text
or
yarn add --save vue3-highlight-text
```

## Quick Start

```ts
// vue project main file
import HighlightText from 'vue3-highlight-text'

app.directive('highlight', HighlightText({
  mode?: string,
  color?: string
}))
```

```vue
<template>
  <div>
    <span v-highlight="{
      mode?: string,
      color?: string,
      className?: string,
      text?: string,
      keyword: string
    }">
  </div>
</tempalte>
```
