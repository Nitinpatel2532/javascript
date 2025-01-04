document.querySelector('#head1').style.color = "blue"
document.querySelector('.head2').style.color = "red"

let a = document.querySelectorAll('')
a.style.cssText = "background-color : red"


for (let i = 0; i < 12; i++){
    if (i %2== 0) {
        a[i].style.border = "2px solid blue"
        a[i].style.backgroundColor = "red"
    } else {
         a[i].style.border = "2px solid black"
        a[i].style.backgroundColor = "yellow"
    }
   
}


