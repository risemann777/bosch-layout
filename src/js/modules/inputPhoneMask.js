import Inputmask from "inputmask/lib/inputmask";

export default function inputPhoneMask() {
  const im = new Inputmask("+7 (999) 999-9999", {
    showMaskOnHover: false
  })
  const phoneInputs = document.querySelectorAll('input[name="phone"]')

  phoneInputs.forEach(input => {
    im.mask(input)
  })
}