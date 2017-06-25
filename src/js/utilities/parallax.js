const position = (config) => {
  const scrollPosition = window.pageYOffset || document.body.scrollTop
  const target = config.target
  const speed = config.speed
  const transformDiff = Math.ceil(scrollPosition * speed)

  target.style.transform = `translateY(${transformDiff}px)`
  return target.style.transform
}

const opacity = (config) => {
  const scrollPosition = window.pageYOffset || document.body.scrollTop
  const wHeight = window.innerHeight || document.documentElement.clientHeight
  const target = config.target
  const speed = config.speed
  const opacityStart = config.opacity
  const opacityDiff = ((scrollPosition / wHeight) * (1 / speed)).toFixed(2)
  let opacityEnd = null

  if (opacityStart === 0) {
    opacityEnd = opacityStart + opacityDiff
  } else {
    opacityEnd = opacityStart - opacityDiff
  }

  target.style.opacity = opacityEnd
  return target.style.opacity
}

export default {
  position,
  opacity,
}
