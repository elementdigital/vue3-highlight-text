import escapeRegExp from './util'

export default function(options = {}) {
  const {
    mode = 'ig',
    color = '#EB9F13'
  } = options

  const directive = (el, binding) => {
    const option = {
      mode: binding?.value?.mode ?? mode,
      color: binding?.value?.color ?? color,
      text: binding?.value?.text ?? el.innerText,
      keyword: binding?.value?.keyword ?? '',
      className: binding?.value?.className ?? ''
    }
    const regExp = new RegExp(`${escapeRegExp(option.keyword)}`, option.mode)
    const highlight = (keyword) => `
      <span
        class="${option.className}"
        style="color:${option.color}"
      >
        ${keyword}
      </span>
    `

    el.innerHTML = option.text.replace(regExp, highlight('$&'))
  }

  return directive
}
