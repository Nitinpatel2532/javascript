let person_data = {
    name: "nitin",
    age: "23",
    course: "fsd",
    mobile:"8719966634"
}


//  convert object to string......

localStorage.setItem("userdata", JSON.stringify(person_data))


// get data in a original form...............
let data = JSON.parse(localStorage.getItem("userdata"))
console.log(data);
console.log(data.name)