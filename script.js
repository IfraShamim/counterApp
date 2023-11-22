let counter = document.getElementById("counter");
let decreament = document.getElementById("decreament");
let restart = document.getElementById("restart");
let increament = document.getElementById("increament");
let counterValue = 0;
counter.textContent = counterValue;
decreament.addEventListener("click",()=>{
    counterValue-=1;
    counter.textContent = counterValue;
});
restart.addEventListener("click",()=>{
    counterValue = 0;
    counter.textContent = counterValue;
})
increament.addEventListener("click",()=>{
    counterValue+=1;
    counter.textContent = counterValue;
})