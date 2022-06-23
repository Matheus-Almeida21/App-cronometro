const start = document.querySelector('[data-start]')
const pause = document.querySelector('[data-pause]')
const reset = document.querySelector('[data-reset]')
const timer = document.querySelector('[data-time]')
console.log(start, pause, reset, timer)

let i = 0 // contador segundos
let min = 0 // contador minutos
    
start.addEventListener('click', (event)=>{
  const contador = setInterval(callback, 1000)
      
  function callback(){
    i++
    if (i < 10) {
      timer.innerText = min + ':0' + i
    } else {
      timer.innerText = min + ':' + i
    }
    if (i > 59) {
      i = 0
      timer.innerText = ++min + ':0' + i
    }
    //i++
    //timer.innerText = min + ':' + i
  }
  start.setAttribute('disabled', 'true')

  pause.addEventListener('click', (event)=>{
    clearInterval(contador)
    start.removeAttribute('disabled')
  })

  reset.addEventListener('click', (event)=>{
    clearInterval(contador)
    min = 0
    i = 0
    timer.innerText = '0:00'
    start.removeAttribute('disabled')
  })
})