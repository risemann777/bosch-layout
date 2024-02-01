import isMobile from "./is-mobile";
export default function animation() {
  const body = document.body;
  let lastScrollPosition = 0
  const header = document.querySelector('.header')

  const doSomething = (scrollPos) => {
    if (scrollPos > 0) {
      header.classList.add('header--sticky')
    } else {
      header.classList.remove('header--sticky')
    }
  }

  document.addEventListener('scroll', () => {
    lastScrollPosition = window.scrollY
    doSomething(lastScrollPosition)
  })

  if (isMobile()) {
    body.classList.add('page--mobile')
  } else {
    body.classList.add('page--desktop')
  }
}