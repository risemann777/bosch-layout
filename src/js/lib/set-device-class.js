import isMobile from './is-mobile.js'
const setDeviceClass = () => {
  const html = document.querySelector('html')

  if (!html.classList.contains('bx-core')) {
    if (isMobile()) {
      html.classList.add('bx-touch')
    } else {
      html.classList.add('bx-no-touch')
    }
  }
}

export default setDeviceClass