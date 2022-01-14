declare module 'vue3-highlight-text' {
  export function directive(options = { mode: 'ig', color: '#EB9F13' }): (el: HTMLElement, binding: any) => void
}