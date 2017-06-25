const timeNow = Date.now || new Date().getTime()

const throttle = (func, wait, options) => {
  let context
  let args
  let result
  let timeout = null
  let previous = 0
  if (!options) options = {}
  const later = () => {
    previous = options.leading === false ? 0 : timeNow()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function () {
    const now = timeNow()
    if (!previous && options.leading === false) previous = now
    const remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}

export default throttle
