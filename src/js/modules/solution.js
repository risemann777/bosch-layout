export default function solution() {
  const wrapper = document.querySelector('.solution')
  const activeClass = 'solution__item--active'

  if (wrapper) {
    const items = wrapper.querySelectorAll('.solution__item')

    items.forEach(item => {
      const head = item.querySelector('.solution__head')
      head.addEventListener('click', (e) => {
        if (item.classList.contains(activeClass) && e.target === head) {
          item.classList.remove(activeClass)
        } else {
          item.classList.add(activeClass)
        }
      })
    })
  }
}