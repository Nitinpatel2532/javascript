function func1() {
    let img = document.getElementById('chimg')
    img.src="sky.jpg"
}

function func2() {
    let img = document.getElementById('chimg')
    img.src="skymoon.jpg"
}

function demo() {
    let he1 = document.querySelector('#head')
    he1.classList.add('he1')
}

function rem() {
    let he1 = document.querySelector('#head')
    he1.classList.remove('he1')
    
}

function onebtn() {
    let he1 = document.querySelector('#head')
    he1.classList.toggle('he1')
    
}

function darkmode() {
    let bd = document.body
    bd.classList.toggle('theme')
    
}