let roundText=document.getElementById("round");
let correctText=document.getElementById("correct");
let accuracyText=document.getElementById("accuracy");
let finalText=document.getElementById("final");
let hide=document.getElementById("hide");
let userNum=document.getElementById("userNum");
let round=0;
let correctAnswers=0;
let acc=0;
let random;
startRound();
function startRound(){
    
    if(round>=10){
        hide.innerText="Game Over!";
        correctText.innerText=correctAnswers;
        accuracyText.innerText=(correctAnswers/5)*100 + "%";
        finalText.innerText=correctAnswers;
        userNum.disabled=true;
        return;
    }
    
    random=Math.floor(Math.random()*9000)+1000;
    hide.innerText=`number is ${random}`;
    setTimeout(function(){
        hide.innerText="";
    },3000);
    roundText.innerText=round++;
}

function restartGame(){
    userNum.onclick = null;
    // reset values
    round = 0;
    correctAnswers = 0;

    hide.innerText = "";
    correctText.innerText = "";
    accuracyText.innerText = "";
    finalText.innerText = "";

    userNum.readOnly = false;  
    userNum.style.cursor = "text";
    userNum.value = "";



    userNum.onchange=function(){
    if(userNum.value.trim()==random){
        correctAnswers++;
    }
    userNum.value="";
    startRound();
    
    };
    startRound();
};
