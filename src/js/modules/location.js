import { setCookie, cookieExists } from 'cookies-utils'
const location = () => {
  const select = document.querySelector('.country-select')
  const locationApplyNodes = document.querySelectorAll('.location-apply')
  const locationPopup = document.querySelector('.location-popup')
  const mobileLocationPopup = document.querySelector('.mobile-location-popup')
  const parsedURL = new URL(window.location.href)
  const params = new URLSearchParams(parsedURL.search)
  const cookieName = 'countrySelected'

  const cookieOptions = {
    name: cookieName,
    value: 'true',
    path: '/',
    domain: parsedURL.hostname,
    expires: new Date(Date.now() + 2592000e3)
  }

  const updatePopupVisibility = () => {
    if (cookieExists(cookieName)) {

      if (locationPopup) {
        locationPopup.classList.add('location-popup--hidden')
      }

      if (mobileLocationPopup) {
        mobileLocationPopup.classList.add('mobile-location-popup--hidden')
      }
    }
  }

  updatePopupVisibility()

  if (select) {
    const links = select.querySelectorAll('.country-select__link')

    if (links) {
      links.forEach((link) => {
        link.addEventListener('click', () => {
          const {id} = link.dataset
          params.set("country_id", id)

          if (!cookieExists(cookieName)) {
            setCookie(cookieOptions)
          }

          window.location.href = `${parsedURL.origin}/?country_id=${id}`
        })
      })
    }
  }

  if (locationApplyNodes) {
    locationApplyNodes.forEach((locationApplyElem) => {
      locationApplyElem.addEventListener('click', () => {
        if (!cookieExists(cookieName)) {
          setCookie(cookieOptions)
        }
        updatePopupVisibility()
      })
    })
  }
}

export default location