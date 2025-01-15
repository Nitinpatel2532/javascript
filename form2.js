function fillval() {
    let name = document.querySelector('#name').value
    let contact = document.querySelector('#contact').value
    let gmail = document.querySelector('#gmail').value
    let password = document.querySelector('#password').value
    
    if (name=='') {
        alert("please fill your name")
        document.querySelector('#name').focus()
        return false
    }
    if (contact == '' || contact < 10) {
        alert("please fill your contact number \n length must be 10")
        document.querySelector('#contact').focus()
        return false
        
    }
   
}