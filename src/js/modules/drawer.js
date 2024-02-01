export default function drawer() {
  const toggleButtons = document.querySelectorAll('[data-toggle]')
  const closeButtons = document.querySelectorAll('[data-close]')
  const body = document.body
  const drawerDiscuss = document.querySelector('.drawer-discuss')
  const drawerForm = document.querySelector('.drawer-form')

  if (toggleButtons) {
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.toggle

        if (target === 'drawer-discuss' && drawerDiscuss) {
          body.classList.add('drawer-discuss-opened')
        }

        if (target === 'drawer-form' && drawerForm) {
          body.classList.add('drawer-form-opened')
        }
      })
    })
  }

  if (closeButtons) {
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.close

        if (target === 'drawer-close') {
          body.classList.remove('drawer-discuss-opened')
          body.classList.remove('drawer-form-opened')
        }
      })
    })
  }
}