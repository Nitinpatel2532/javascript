let stu = [
    {
        roll: 1,
        name: "nitin",
        age: 24,
        city:"bhopal"
    },
    {
        roll: 2,
        name: "abhi",
        age: 26,
        city:"pune"
    },
    {
        roll: 3,
        name: "dom",
        age: 20,
        city:"goa"
    },
    {
        roll: 4,
        name: "bob",
        age: 16,
        city:"delhi"
    }
]

let finaldata = stu.map((e) => `
<tr> 
<td> ${e.roll} </td>
<td> ${e.name} </td>
<td> ${e.age} </td>
<td> ${e.city} </td>
</tr>
`).join("")

document.querySelector('#data').innerHTML=finaldata
