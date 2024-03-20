import isMobile from '../lib/is-mobile.js'
export default function animation() {
  const html = document.querySelector('html')
  let lastScrollPosition = 0
  const headerNav = document.querySelector('.header-nav')
  const headerTop = document.querySelector('.header-top')

  const doSomething = (scrollPos) => {
    if (scrollPos > headerTop.clientHeight) {
      // header.classList.add('header--sticky')
      // headerTop.style.display = 'none'
    } else {
      // header.classList.remove('header--sticky')
      // headerTop.style.display = 'flex'
    }
  }

  document.addEventListener('scroll', () => {
    lastScrollPosition = window.scrollY
    doSomething(lastScrollPosition)
  })

  if (!html.classList.contains('bx-core')) {
    if (isMobile()) {
      html.classList.add('bx-touch')
    } else {
      html.classList.add('bx-no-touch')
    }
  }
}