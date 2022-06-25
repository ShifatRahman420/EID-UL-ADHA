const eid = "10 july 2022";
const daysdiv = document.getElementById("days");
const hourdiv = document.getElementById("hours");
const mindiv = document.getElementById("minuts");
const secdiv = document.getElementById("seconds");
function countdown (){
    const eiddate = new Date(eid);
    const curretday = new Date();

    const totaltime = (eiddate-curretday)/1000;
    const days =Math.floor(totaltime / 3600 /24);
    const hours = Math.floor((totaltime / 3600) % 24);
    const minutes = Math.floor(totaltime /60) % 60;
    const seconds = Math.floor(totaltime) % 60;
    daysdiv.innerHTML = days;
    hourdiv.innerHTML = hours;
    mindiv.innerHTML = minutes;
    secdiv.innerHTML = seconds;

}
countdown();
setInterval(countdown,1000);
