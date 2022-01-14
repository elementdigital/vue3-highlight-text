declare module 'vue3-highlight-text' {
  export function directive(
    options: { mode: string = 'ig', color: string = '#EB9F13'}
  ): (el: HTMLElement, binding: any) => void
}