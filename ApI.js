// Api -> application proframming interface...........
//  -> contain predefined data / modules -> used in programms..

// Fetch ()  -> method / function   -> return promises object

// Http request
// Method ->
// get -> fetch the data
// post -> insert data into api
// delete -> delete the data
// put -> update the data

// promise -> object
// 3 stage of promises...........
// 1. pending
// 2. fullfill
// 3. reject

// handle promises
// 1. async
// 2. await

// syncronous ->  execute line by line execution 
// asynchronous  -> execution the line which take less time

// javascirpt is a synchronous language due to its a lightweight its work so fast.

console.log("fetch api")

// node.js  ->LTS-> long term support
// runtime environment

// fetch() ->pass two arguments  ->to fetch the api data
// url , object form -> (method)

// JSON placeholder to take fake API for testing purpose........


async function fetch_data() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let res=data.json()
    console.log(res)
}

fetch_data();




