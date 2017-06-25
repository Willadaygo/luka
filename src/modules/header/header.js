// import inView from 'in-view'

const _ = {
  header: document.querySelector('.Header'),
  switch: document.querySelector('.Header__switch'),
  navLinks: document.querySelectorAll('.Header__link'),
  nav: document.querySelector('.Header__list'),
  highlight: document.querySelector('.Header__highlight'),
  elHeight: 0,
  dHeight: 0,
  wHeight: 0,
  wScrollCurrent: 0,
  wScrollBefore: 0,
  wScrollDiff: 0,
}

const openHeader = () => {
  _.header.classList.add('is-open')
}

const closeHeader = () => {
  _.header.classList.remove('is-open')
}

const toggleHeader = () => {
  if (_.header.classList.contains('is-open')) {
    closeHeader()
  } else {
    openHeader()
  }
}
// const stickyHeader = () => {
//   _.elHeight = _.header.offsetHeight
//   _.dHeight = document.body.offsetHeight
//   _.wHeight = window.innerHeight
//   _.wScrollCurrent = window.pageYOffset
//   _.wScrollDiff = _.wScrollBefore - _.wScrollCurrent

//   if (_.wScrollCurrent <= _.elHeight) { // TOP OF THE PAGE
//     _.header.classList.remove('is-scrolled')
//   } else if (_.wScrollDiff > 0) { // SCROLL UP
//     _.header.classList.remove('is-scrolled')

//     if ((_.wScrollCurrent + _.wHeight) <= (_.dHeight - _.elHeight)) { // AT BOTTOM
//       _.header.classList.remove('is-dark')
//     }
//   } else if (_.wScrollDiff < _.elHeight) { // SCROLL DOWN
//     if ((_.wScrollCurrent + _.wHeight) >= (_.dHeight - _.elHeight)) { // AT BOTTOM
//       _.header.classList.remove('is-scrolled')
//       _.header.classList.add('is-dark')
//     } else {
//       _.header.classList.add('is-scrolled')
//       _.header.classList.remove('is-dark')
//     }
//   }

//   _.wScrollBefore = _.wScrollCurrent
// }

// const revealOnLoad = () => {
//   _.header.classList.remove('is-hidden')
// }

// function isHighlighted(event, navLink) {
//   let width
//   let left

//   if (navLink) {
//     width = navLink.querySelector('span').getBoundingClientRect().width
//     left = navLink.getBoundingClientRect().left - _.nav.getBoundingClientRect().left
//   } else {
//     width = this.querySelector('span').getBoundingClientRect().width
//     left = this.getBoundingClientRect().left - _.nav.getBoundingClientRect().left
//   }

//   _.highlight.style = `
//     width: ${width}px;
//     transform: translateX(${left}px) translateZ(0);
//   `
// }

const init = () => {
  // Array.from(_.navLinks).forEach((navLink) => {
  //   if (navLink.classList.contains('is-active')) {
  //     const isActive = navLink
  //     isHighlighted(event, isActive)
  //   }
  //   navLink.addEventListener('mouseenter', isHighlighted)
  // })

  // if (_.header) window.addEventListener('scroll.throttled', stickyHeader)

  if (_.switch) _.switch.addEventListener('click', toggleHeader)
}

export default {
  init,
  // revealOnLoad,
}
