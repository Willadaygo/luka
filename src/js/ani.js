import inView from 'in-view'

inView.threshold(0.2) // set gloabl inView threshold

const aniTime = 250 // if you change here, make sure you change in ani.css 
const links = {
  internal: document.querySelectorAll('a[href^="/"]'),
  computed: document.querySelectorAll(`a[href*="${window.location.hostname}"]`),
}


const reveal = () => {
  inView('.js-reveal')
    .on('enter', el => el.classList.add('in-view'))
}

const revealChild = () => {
  inView('.js-reveal')
    .on('enter', (el) => {
      const children = el.querySelectorAll('.js-reveal__child')

      for (let i = 0; i < children.length; i += 1) {
        const delay = aniTime + (i * 50)

        setTimeout(() => {
          children[i].classList.add('in-view')
        }, delay)
      }
    })
}

const revealChangePage = (target) => {
  const href = target.href
  const direction = target.getAttribute('data-direction')
  const header = document.querySelector('.Header')
  const nav = document.querySelector('.Projects-nav')
  const elementsInView = Array.from(document.querySelectorAll('.js-reveal.in-view'))

  if (direction && direction === 'right') {
    for (let i = 0; i < elementsInView.length; i += 1) {
      nav.classList.add('js-reveal--pageOutRight')
      elementsInView[i].classList.add('js-reveal--pageOutRight')
    }
  } else if (direction && direction === 'left') {
    for (let i = 0; i < elementsInView.length; i += 1) {
      nav.classList.add('js-reveal--pageOutLeft')
      elementsInView[i].classList.add('js-reveal--pageOutLeft')
    }
  } else {
    for (let i = 0; i < elementsInView.length; i += 1) {
      elementsInView[i].classList.add('js-reveal--pageOutDown')
    }
  }

  header.classList.add('is-hidden')

  window.onbeforeunload = () => (
    window.scrollTo(0, 0)
  )

  setTimeout(() => {
    window.location.href = href
  }, aniTime)
}

const changePage = (e) => {
  e.preventDefault()

  const target = e.currentTarget
  const header = document.querySelector('.Header')

  if (header.classList.contains('is-open')) {
    header.classList.add('is-scrolled')

    setTimeout(() => {
      header.classList.remove('is-open')
    }, 750)

    setTimeout(() => {
      revealChangePage(target)
    }, 1000)
  } else {
    revealChangePage(target)
  }
}

const init = () => {
  reveal()
  revealChild()

  const internal = Array.from(links.internal)
  const computed = Array.from(links.computed)
  const allLinks = internal.concat(computed)

  for (let i = 0; i < allLinks.length; i += 1) {
    allLinks[i].addEventListener('click', changePage)
  }
}

export default {
  init,
}
