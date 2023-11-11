# Vue3 Highlight Text

Vue3 directive for highlighting text  
Forked from https://github.com/Wiensss/vue3-highlight-text

Wraps selected text with 'span' element

## Installation

```sh
// npm
npm install --save https://github.com/elementdigital/vue3-highlight-text.git

// yarn
yarn add --save https://github.com/elementdigital/vue3-highlight-text.git
```

## Quick Start

```js
// vue project main file (main.js)
import HighlightText from 'vue3-highlight-text'

app.directive('highlight', HighlightText({
  // OPTIONS
  // mode: 'string' // Modifies regex mode
  // color: 'string' // Highlighted text color
  // className: 'string' // Assigns class attribute to highlighted text
}))
```

```vue
<template>
  <div>
    <span v-highlight="{
      mode: string,
      color: string,
      className: string,
      keyword: string (required)
    }">
  </div>
</tempalte>
```

```vue
<template>
  <div>
    <span v-highlight="{ className: 'string', keyword: 'string' }">Text Here</span>
  </div>
</tempalte>
```
