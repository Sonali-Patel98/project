let box=document.getElementsByClassName("box")[0];
let btn=document.getElementsByClassName("btn")[0];
let lower=document.getElementById("lower-case");
let upper=document.getElementById("upper-case");
let number=document.getElementById("number");
let symbols=document.getElementById("symbols");
let range=document.getElementById("range");
let slidervalue=document.getElementById("slidervalue");
let copyIcon=document.getElementById("copy-icon");
copyIcon.addEventListener('click',()=>{
    if(box.value !="" || box.value.length>=1){
        // copyIcon.innerText="check";
        copyIcon.title="password copied";
        navigator.clipboard.writeText(box.value);
            
        // setTimeout(()=>{
        //     // copyIcon.innerHTML="content copy";
           
        // },1000)
    }
    
})
slidervalue.textContent=range.value;
range.addEventListener('input', ()=>{
    slidervalue.textContent=range.value;
});
btn.addEventListener('click',()=>{
    box.value=generatePassword();
});
let lowerChars="abcdefghijklmnopqrstuvvxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers="0123456789";
let symbol="~!@#$%^&*";
function generatePassword (){
    let allChars="";
    let generate="";
    allChars +=lower.checked ? lowerChars :"";
    allChars +=upper.checked ? upperChars:"";
    allChars +=number.checked ? numbers :"";
    allChars +=symbols.checked ? symbol:"";
    if(allChars == "" || allChars.length == 0){
        return generate;
    }
    for(let i=0; i<range.value;i++){
         generate+=allChars.charAt(Math.floor(Math.random()*allChars.length));
    }
   
    return generate;
}

