const regExpChar = /[\\^$.*+?()[\]{}|]/g
const hasRegExpChar = RegExp(regExpChar.source)

function escapeRegExp(string) {
  return (string && hasRegExpChar.test(string))
    ? string.replace(regExpChar, '\\$&')
    : (string || '')
}

export default function(options = {}) {
  const {
    mode = 'ig',
    color = '#EB9F13'
  } = options

  const directive = (el, binding) => {
    const option = {
      mode: binding?.value?.mode ?? mode,
      color: binding?.value?.color ?? color,
      content: binding?.value?.content ?? el?.innerText ?? '',
      keyword: binding?.value?.keyword ?? '',
      className: binding?.value?.className ?? ''
    }
    const regExp = new RegExp(escapeRegExp(option.keyword), option.mode)
    const highlight = (keyword) => `<span${option.className ? `class="${option.className}"` : ''} style="color:${option.color}">${keyword}</span>`

    el.innerHTML = option.content.replace(regExp, highlight('$&'))
  }

  return directive
}
