//  Countdown Date
let countdownDate = new Date('April 30, 2022 18:00:00').getTime()

const bird = document.getElementById('birds')
const body = document.getElementsByClassName('body-container')[0]

// time variables
let interval = 1000

function speedTime() {
  countdownDate = new Date().getTime()
}

// Timer Function
let myFunc = setInterval(function () {
  // Now Date
  let nowDate = new Date().getTime()
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

    body.classList.add('active')
  }
}, interval)

// Message Final

// button active

const speed_btn = document.getElementById('speed_btn')
