export default function drawer() {
  const toggleButtons = document.querySelectorAll('[data-drawer-toggle]')
  const closeNodes = document.querySelectorAll('[data-drawer-close]')
  const body = document.body
  const drawerDiscuss = document.querySelector('.drawer-discuss')
  const drawerForm = document.querySelector('.drawer-form')

  if (toggleButtons) {
    toggleButtons.forEach(button => {

      button.addEventListener('click', () => {
        const {drawerToggle} = button.dataset

        if (drawerToggle) {
          const drawer = document.querySelector(`#${drawerToggle}`)
          if (drawer) {
            body.classList.add(`drawer-opened--${drawerToggle}`)
            drawer.setAttribute('aria-hidden', 'false')
          }
          console.log(drawer)
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

        if (body.classList.contains(`drawer-opened--${id}`)) {
          setTimeout(() => {
            body.classList.remove(`drawer-opened--${id}`)
          }, 500)
        }
      })
    })
  }
}