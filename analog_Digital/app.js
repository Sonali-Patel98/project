let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
function displayTime(){
    let data=new Date();
let hours=data.getHours();
let minutes=data.getMinutes();
let second=data.getSeconds();

let hrRotation=30*hours + minutes/2;
let minRotation=6*minutes;
let secRotation=6*second;

hr.style.transform=`rotate(${hrRotation}deg)`;
min.style.transform=`rotate(${minRotation}deg)`;
sec.style.transform=`rotate(${secRotation}deg)`;

}

setInterval(displayTime,1000);
