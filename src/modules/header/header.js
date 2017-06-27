// import inView from 'in-view'

const _ = {
  header: document.querySelector('.Header'),
  switch: document.querySelector('.Header__switch'),
  html: document.querySelector('html'),
  links: document.querySelectorAll('.Header__link'),
}

export const openHeader = () => {
  _.header.classList.add('is-open')
  _.html.classList.add('has-nav')
}

export const closeHeader = () => {
  _.header.classList.remove('is-open')
  _.html.classList.remove('has-nav')
}

const toggleHeader = () => {
  if (_.header.classList.contains('is-open')) {
    closeHeader()
  } else {
    openHeader()
  }
}

// inView.threshold(0)

// const checkState = () => {
//   const items = Array.from(_.links)

//   let count = 0
//   items.forEach((item, i) => {
//     const el = document.querySelector(item.getAttribute('href'))
//     if (inView.is(el)) {
//       item.classList.add('is-active')
//       count++
//       if (count === 2) {
//         console.log(i)
//         items[count - 1].classList.remove('is-active')
//       }
//     } else {
//       item.classList.remove('is-active')
//     }
//   })
// }


const init = () => {
  // Array.from(_.links).forEach((navLink) => {
  //   if (navLink.classList.contains('is-active')) {
  //     const isActive = navLink
  //     isHighlighted(event, isActive)
  //   }
  //   navLink.addEventListener('mouseenter', isHighlighted)
  // })

  if (_.switch) _.switch.addEventListener('click', toggleHeader)

  // if (_.links.length) {
  //   checkState()
  // }

  // window.addEventListener('scroll', () => {
  //   checkState()
  // })
}

export default {
  init,
}
