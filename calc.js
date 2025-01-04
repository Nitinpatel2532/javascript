let a = 10;
let b = 20;
function add() {
   
    let a1 = document.querySelector("#calc")
    a1.innerHTML = a + b;
    a1.style.color="Red"
}
function sub() {
   
    let a1 = document.querySelector("#calc")
    a1.innerHTML = a - b;
}
function mul() {
    
    let a1 = document.querySelector("#calc")
    a1.innerHTML = a * b;
}
function div() {
    
    let a1 = document.querySelector("#calc")
    a1.innerHTML = a / b;
}