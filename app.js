const days=[
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
]

const months = [
    "jan",
    "feb",
    "mar",
    "april",
    "may",
    "jun",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
]

const countdown = document.getElementsByClassName('launch-time')
// console.log(countdown[0].children[3])

const futuredate = new Date("2023-06-05T09:37:10")
console.log(futuredate.getTime())

function meracountdown() {
    const today = new Date()

    const timedifference = futuredate.getTime() - today.getTime()

    if(timedifference > 0){
        countdown[0].children[0].innerText = Math.floor(timedifference / 1000 / 60 / 60 / 24) + "Days"

        countdown[0].children[1].innerText = (Math.floor(timedifference / 1000 / 60 / 60) - (Math.floor(timedifference / 1000 / 60 / 60 / 24) * 24)) + "Hours"

        countdown[0].children[2].innerText = Math.floor(timedifference / 1000 / 60 - (Math.floor(timedifference / 1000 / 60 / 60) * 60)) + "Minutes"

        countdown[0].children[3].innerText = Math.floor(timedifference / 1000) - ((Math.floor(timedifference / 1000 / 60) * 60)) + "Second"
    }else{
        countdown[0].innerHTML = '<p>Sorry ! WE CANT LAUNCED TODAY </p>'
    }
}
setInterval(meracountdown,0)