const accordion = () => {
  const accordionNodeList = document.querySelectorAll('.accordion')

  if (accordionNodeList) {
    accordionNodeList.forEach((wrapper) => {
      const items = wrapper.querySelectorAll('.accordion__item')

      if (items) {
        items.forEach((item) => {
          const head = item.querySelector('.accordion__head')
          const body = item.querySelector('.accordion__body')
          const headHeight = head.offsetHeight
          item.style.height = `${headHeight}px`

          head.addEventListener('click', (e) => {
            item.classList.toggle('accordion__item--expanded')

            if (item.classList.contains('accordion__item--expanded')) {
              item.style.height = `${headHeight + body.offsetHeight}px`
            } else {
              item.style.height = `${headHeight}px`
            }
          })
        })
      }
    })
  }
}

export default accordion