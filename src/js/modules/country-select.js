const countrySelect = () => {
  const select = document.querySelector('.country-select')

  if (select) {
    const links = select.querySelectorAll('.country-select__link')

    if (links) {
      links.forEach((link) => {
        link.addEventListener('click', () => {
          const {id} = link.dataset
          console.log(id)
        })
      })
    }
  }
}

export default countrySelect