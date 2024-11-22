// setInterval(() => {
//     let date = new Date()
//     console.log( date.getMinutes() , date.getSeconds())
// },1000)

// let hours_digit = document.getElementById("hours-digit")
// let minutes_digit = document.getElementById("minutes-digit")
// let seconds_digit = document.getElementById("seconds-digit")

// setInterval(()=>{
//     let date = new Date()
//     hours_digit.innerHTML = date.getHours() + ` : `
//     minutes_digit.innerHTML = date.getMinutes() + ` : `
//     seconds_digit.innerHTML = date.getSeconds()
//     console.log(date)
//     console.log(date.getSeconds())
// },1000)

// let clock_box = document.getElementById("clock-box")
// setInterval(() => {
//     let date = new Date()
//     clock_box.innerHTML = date.toLocaleTimeString()
// })


// setInterval(() => {
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date();
// var day = days[d.getDay()];
// var hr = d.getHours();
// var min = d.getMinutes();
// var sec = d.getSeconds();
// if (min < 10) {
//     min = "0" + min;
// }
// var ampm = "am";
// if( hr > 12 ) {
//     hr -= 12;
//     ampm = "pm";
// }
// var date = d.getDate();
// var month = months[d.getMonth()];
// var year = d.getFullYear();
// var x = document.getElementById("time");
// x.innerHTML = day + " " + hr + ":" + min +":"+ sec + ampm + " " + date + " " + month + " " + year;
// })

let clock_box = document.getElementById("clock-box")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let am_pm = document.getElementById("am-pm")
let day = document.getElementById("day")
let year = document.getElementById("year")
let month = document.getElementById("month")
let date = document.getElementById("date")

let day_array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let month_array = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

clock_box.style.display = "none"

function add_zero(val){
    if(val < 10){
        return("0" + val)
    }
    return val.toString();
}

setInterval(()=>{
    clock_box.style.display = "flex"
    let date_get = new Date()
    let hours_digit = date_get.getHours()
    let minutes_digit = date_get.getMinutes()
    let seconds_digit = date_get.getSeconds()
    let am_pm_change = "AM"

    if(hours_digit > 12){
        hours_digit = hours_digit - 12
        am_pm_change = "PM"
    }

    hours.innerHTML = add_zero(hours_digit)
    minutes.innerHTML = add_zero(minutes_digit)
    seconds.innerHTML = add_zero(seconds_digit)
    am_pm.innerHTML = am_pm_change
    year.innerHTML = date_get.getFullYear()
    date.innerHTML = date_get.getDate()
    month.innerHTML = month_array[date_get.getMonth()]
    day.innerHTML = day_array[date_get.getDay()]
},1000)
