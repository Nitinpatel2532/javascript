let head_element = document.createElement('h1')
head_element.textContent = "this is add by js"

let bd = document.body
bd.append(head_element)

let head_element2 = document.createElement('h2')
head_element2.textContent = "this is second element add by js"
bd.append(head_element2)

// to pass attribute setattribute()
head_element.setAttribute('align', 'center')
head_element2.setAttribute('style', 'background-color:blue')
head_element2.setAttribute('style','color:red')
bd.setAttribute('bgcolor','yellow')



// to remove attribute from body
bd.removeAttribute('bgcolor')


// image

let img = document.getElementById('image')
img.setAttribute('src','5s.jpeg') 

