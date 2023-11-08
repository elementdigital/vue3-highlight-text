# Vue3 Highlight Text

Vue3 directive for highlighting text  
Forked from https://github.com/Wiensss/vue3-highlight-text

Wraps selected text with 'span' element

## Installation

```sh
npm install --save https://github.com/elementdigital/vue3-highlight-text.git
```
or
```sh
yarn add --save https://github.com/elementdigital/vue3-highlight-text.git
```

## Quick Start

```js
// vue project main file (main.js)
import HighlightText from 'vue3-highlight-text'

app.directive('highlight', HighlightText({
  // OPTIONS
  // mode: 'string' // Modifies regex mode
  // color: 'string' // Overrides default color when classBame not assigned,
  // className: 'string' // Assigns a class attribute
  // content: 'string' // Replaces the parent element innerHTML with (string)
}))
```

```vue
<template>
  <div>
    <span v-highlight="{
      mode: string,
      color: string,
      className: string,
      content: string,
      keyword: string (required)
    }">
  </div>
</tempalte>
```

```vue
<template>
  <div>
    <span v-highlight="{ className: 'string', keyword: 'string' }">InnerText</span>
  </div>
</tempalte>
```
