import jump from 'jump.js'
import { closeHeader } from '../../modules/header/header'

const easeInOutExpo = (t, b, c, d) => {
  if (t==0) return b;
  if (t==d) return b+c;
  if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
  return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

const goToSection = (link, delay, callback) => {
  const section = document.querySelector(`${link}`)
  setTimeout(() => {
    jump(section, {
      duration: 500,
      easing: easeInOutExpo,
    })
  }, delay)

  callback()
}

const getLinks = (callback) => {
  const headerLinks = document.querySelectorAll('.Header__link')
  for (let i = 0; i < headerLinks.length; i += 1) {
    headerLinks[i].addEventListener('click', (e) => {
      e.preventDefault ? e.preventDefault() : (e.returnValue = false)
      const link = e.target.href.split('/')
      callback(link[link.length - 1])
    })
  }
}

const init = () => {
  getLinks((link) => {
    goToSection(link, 500, closeHeader)
  })
}

export default {
  init,
}
