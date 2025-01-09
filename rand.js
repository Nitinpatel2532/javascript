function random1() {

    let b = document.querySelector('#h1')
    let c = document.querySelector('#h2')
    let d = document.querySelector('#h3')
    b.innerHTML = Math.trunc(Math.random() * 15+1);
    c.innerHTML = Math.trunc(Math.random() * 15+1);
    d.innerHTML = Math.trunc(Math.random() * 15+1);
}

