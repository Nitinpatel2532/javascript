let m=document.querySelector('.main')
m.style.border = "2px solid black"
m.style.backgroundColor = "orange"
m.style.width = "300px"
m.style.padding = "50px"
// m.style.textalign="center"
let a = 0;
let b = document.querySelector('#c')
let bb = document.querySelector('#inc');
let dd = document.querySelector('#dec');

function increment() {

   
    bb.style.backgroundColor = "grey"
    bb.style.border = "2px solid black"
    
    dd.style.backgroundColor = "white"
     dd.style.border="1px solid black"
    
    
    b.innerHTML = a + 1;
    a = a + 1;
    
}

function decrement() {
    
    bb.style.backgroundColor = "white"
     bb.style.border = "1px solid black"
  
     dd.style.backgroundColor = "grey"
    dd.style.border="3px solid black"

    if (a > 0) {
        b.innerHTML = a - 1;
        a = a - 1;
    } else {
        b.style.color="red"
        alert("Sorry.....Value can not be less than zero....")
   }
   
   
    
}