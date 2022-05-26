function realtimeClock(){
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

//convert the hours to 24hour format

//give hours, minutes and seconds with leading zeroes
hours = ("0" + hours).slice(-2);
minutes = ("0" + minutes).slice(-2);
seconds = ("0" + seconds).slice(-2);

//display the clock
document.getElementById("clock").innerHTML = 
    hours + " . " + minutes  + " . " + seconds;
    var time = setTimeout(realtimeClock, 500);
}