export default function drawer() {
  const toggleButtons = document.querySelectorAll('[data-drawer-toggle]')
  const closeNodes = document.querySelectorAll('[data-drawer-close]')
  const body = document.body

  if (toggleButtons) {
    toggleButtons.forEach(button => {

      button.addEventListener('click', () => {
        const {drawerToggle} = button.dataset

        if (drawerToggle) {
          const drawer = document.querySelector(`#${drawerToggle}`)
          if (drawer) {
            body.classList.add(`opened--${drawerToggle}`)
            drawer.setAttribute('aria-hidden', 'false')
          }
        }
      })
    })
  }

  if (closeNodes) {
    closeNodes.forEach((element) => {
      element.addEventListener('click', (e) => {
        const drawer = element.closest(`.drawer`)
        const id = drawer.getAttribute('id')
        drawer.setAttribute('aria-hidden', 'true')

        if (body.classList.contains(`opened--${id}`)) {
          setTimeout(() => {
            body.classList.remove(`opened--${id}`)
          }, 500)
        }
      })
    })
  }
}