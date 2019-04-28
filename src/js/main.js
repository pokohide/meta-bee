(function () {
  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  const lightSwitch = doc.getElementById('lights-toggle')
  /* global ScrollReveal */
  const sr = window.sr = ScrollReveal()

  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')
  })

  // Reveal animations
  function revealAnimations () {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }

  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations)
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener('load', checkLights)
    lightSwitch.addEventListener('change', checkLights)
  }

  function checkLights () {
    let labelText = lightSwitch.parentNode.querySelector('.label-text')
    if (lightSwitch.checked) {
      body.classList.remove('lights-off')
      if (labelText) {
        labelText.innerHTML = 'dark'
      }
    } else {
      body.classList.add('lights-off')
      if (labelText) {
        labelText.innerHTML = 'light'
      }
    }
  }

  const curlSwitch = document.getElementById('curl-switch')
  const rubySwitch = document.getElementById('ruby-switch')
  const curlBlock = document.getElementById('curl-block')
  const rubyBlock = document.getElementById('ruby-block')
  const tryIt = document.getElementById('try-it')

  curlSwitch.addEventListener('click', switch2curl)
  rubySwitch.addEventListener('click', switch2ruby)
  tryIt.addEventListener('click', scrollHowTo)

  function switch2ruby () {
    curlSwitch.classList.remove('active')
    rubySwitch.classList.add('active')

    curlBlock.style.display = 'none'
    rubyBlock.style.display = 'block'
  }

  function switch2curl () {
    rubySwitch.classList.remove('active')
    curlSwitch.classList.add('active')

    rubyBlock.style.display = 'none'
    curlBlock.style.display = 'block'
  }

  function scrollHowTo (e) {
    e.preventDefault()
    document.getElementById('how-to').scrollIntoView(true)
  }
}())
