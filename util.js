const regExpChar = /[\\^$.*+?()[\]{}|]/g
const hasRegExpChar = RegExp(regExpChar.source)

function escapeRegExp(string) {
  return (string && hasRegExpChar.test(string))
    ? string.replace(regExpChar, '\\$&')
    : (string || '')
}

export default escapeRegExp