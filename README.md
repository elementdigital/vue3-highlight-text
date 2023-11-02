# Vue3 Highlight Text

Vue3 directive for highlighting text
forked from https://github.com/Wiensss/vue3-highlight-text

## Installation

```sh
npm install --save vue3-highlight-text
or
yarn add --save vue3-highlight-text
```

## Quick Start

```js
// vue project main file
import HighlightText from 'vue3-highlight-text'

app.directive('highlight', HighlightText({
  mode: string,
  color: string
}))
```

```html
<template>
  <div>
    <span v-highlight="{
      mode: string,
      color: string,
      className: string,
      content: string,
      keyword: string
    }">
  </div>
</tempalte>
```

If not use content property, the innerText of the directive wrapper will be as content.

```html
<template>
  <div>
    <span v-highlight="{ keyword: string }">innerText</span>
  </div>
</tempalte>
```