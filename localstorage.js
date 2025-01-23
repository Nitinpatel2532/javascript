// local storage is a storage of browser of size max-10mb that save in user browser
// it remain save untill we will delete it......

// local storage have  four function

// 1. setItem() ->set item
// 2. getItem() -> get item
// 3.removeItem() -> delete remove particular item
// 4.clear() -> clear all fileds...

// domain / protocol / port / ip in local storage..

// data stored in local storage in key value format


localStorage.setItem("data", "nitin")

let name1 = "redme"
let age1 = "24"

// to set the item
localStorage.setItem("mobile", name1)
localStorage.setItem("age", age1)
localStorage.setItem("courrse","fsd")

// to get the data
let nm = localStorage.getItem("data")
document.write(nm)
let nm2 = localStorage.getItem("age")
document.write(nm2)

// to remove particular data
localStorage.removeItem("class")
localStorage.removeItem("data")


// to clear all data
localStorage.clear()