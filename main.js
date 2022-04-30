//  Countdown Date
const countdownDate = new Date('April 30, 2022 15:51:00').getTime()

const bird = document.getElementById('birds')
const body = document.querySelector('body')
// Timer Function
let myFunc = setInterval(function () {
  // Now Date
  const nowDate = new Date().getTime()

  let timeLeft = countdownDate - nowDate

  // month, days, hours, minutes, seconds variables
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  document.getElementById('days').innerHTML = days + ':'
  document.getElementById('hours').innerHTML = hours + ':'
  document.getElementById('minutes').innerHTML = minutes + ':'
  document.getElementById('seconds').innerHTML = seconds

  if (timeLeft < 0) {
    clearInterval(myFunc)
    document.getElementById('days').innerHTML = ''
    document.getElementById('hours').innerHTML = ''
    document.getElementById('minutes').innerHTML = ''
    document.getElementById('seconds').innerHTML = ''
    document.getElementById('end').innerHTML = 'Time is up!'
    img.classList.add('active')
    bird.classList.add('active')
    body.style.backgroundColor = '#fce34a'
    body.style.background =
      'url(waves2.svg) no-repeat center center, linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)'
    body.style.backgroundSize = 'cover'
    body.style.transition = 'all 5s'
  }
}, 1000)

// Message Final

// button active
const btn_ins = document.getElementById('btn_ins')
const img = document.getElementById('img')

function activeImg() {
  img.classList.toggle('active')
}
