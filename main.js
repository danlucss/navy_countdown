//  Countdown Date
let countdownDate = (new Date('May 03, 2022 18:00:00').getTime()) + 1000000000;

const sunset = document.getElementById('sunset')
const body = document.getElementsByClassName('body-container')[0]
const speed_btn = document.getElementById('speed_btn')
const ins_btn = document.getElementById('btn_ins')

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

    //Change the Countdown visor
    document.getElementById('days').innerHTML = ''
    document.getElementById('hours').innerHTML = ''
    document.getElementById('minutes').innerHTML = ''
    document.getElementById('seconds').innerHTML = ''
    document.getElementById('end').innerHTML = 'Time is up!'

    //Change the Styles color
    img.classList.add('active')
    sunset.classList.add('active')
    body.classList.add('active')
    ins_btn.classList.add('active')
    ins_btn.innerHTML = 'Grab a coconut!'

    speed_btn.style.display = 'none'

    // SVG color change

    wave1.style.fill = '#023059'
    wave2.style.fill = 'linear-gradient(#0367A6, #023059)'
    wave3.style.fill = 'rgba(246, 20, 152, 0.519) '
    wave4.style.fill = '#0367A6'
  }
}, interval)

// Message Final

// button /

const wave1 = document.getElementsByClassName('wave-1')[0]
const wave2 = document.getElementsByClassName('wave-2')[0]
const wave3 = document.getElementsByClassName('wave-3')[0]
const wave4 = document.getElementsByClassName('wave-4')[0]
