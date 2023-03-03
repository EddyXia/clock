  //GET ORIGINAL TIME INFORMATION
const date = new Date();

const HOURS = date.getHours()
const MINUTES = date.getMinutes()
const SECONDS = date.getSeconds()

  //EXTRA VARIABLES TO CHANGE BASE ON SITUATIONS
let H = HOURS
let M = MINUTES
let S = SECONDS

  //CHANGE AM and PM
let clocktime = undefined
const AM = `${H}:${M}:${S} AM`
const PM = `${H-12}:${M}:${S} PM`

setInterval(clock, 1000)

function clock() {
  if(HOURS > 12){
    clocktime = PM
  }
  else if (HOURS){
    clocktime = AM
  }

  document.getElementById('clock').innerHTML = clocktime

console.log(clocktime)
}