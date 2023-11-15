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
    color = '',
    className = ''
  } = options

  const directive = (el, binding) => {
    const content = el.innerText
    const option = {
      keyword: binding.value.keyword ?? keyword,
      mode: binding.value.mode ?? mode,
      color: binding.value.color ?? color,
      className: binding.value.className ?? className,
    }

    const keywordRegExp = new RegExp(escapeRegExp(option.keyword), option.mode)

    const highlight = (keyword) => `<span 
    ${option.className ? ` class="${option.className}"` : ''} 
    ${option.color ? ` style="color:${option.color}"` : ''}>${keyword}</span>`

    if (typeof content === 'string') {
      el.innerHTML = content.replace(keywordRegExp, highlight('$&'))
    }
  }

  return directive
}
