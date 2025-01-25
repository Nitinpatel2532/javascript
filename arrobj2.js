let emp = [
    {
        sno: 1,
 email: "nitin@gmail.com",
   age: 25
    },
    {
        sno: 2,
    email: "patel@gmail.com",
    age:24
}
]

let data = emp.map((e) => `
<tr>
<td> ${e.sno} </td>
<td> ${e.email} </td>
<td> ${e.age} </td>


</tr>

`
    
).join("")
   
document.querySelector("#showdata").innerHTML = data;