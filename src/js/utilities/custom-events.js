import throttle from './throttle'

const Listeners = {
  scroll: {
    throttled: throttle(() => {
      const event = window.document.createEvent('Event')
      event.initEvent('scroll.throttled', true, true)

      window.dispatchEvent(event)
    }, 100),
  },
}

const init = () => {
  window.addEventListener('scroll', () => {
    Object.keys(Listeners.scroll).forEach((key) => {
      Listeners.scroll[key]()
    })
  })
}

export default {
  init,
}
