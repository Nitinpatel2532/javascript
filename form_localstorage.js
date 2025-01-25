let fun = () => {
    let userdata = {
        name: document.querySelector("#name").value ,
        password :document.querySelector("#pass1").value
    }
    localStorage.setItem("userdata",JSON.stringify(userdata))
}
