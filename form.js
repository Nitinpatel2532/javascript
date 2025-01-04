function add() {
    let num1 = parseInt(document.querySelector('#num1').value)
    let num2 = parseInt(document.querySelector('#num2').value)
    // alert(num1 + num2)

    let num3 = document.querySelector('#num3')
    num3.innerHTML = num1 + num2
  
    return false
    
}