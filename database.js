//   json-server --watch databasename.json

async function fetch_database() {
    let data = await fetch("http://localhost:3000/student")
    let final=await data.json()
    

    var fetch_data = final.map((e) => `
<tr>
<td> ${e.id} </td>
<td> ${e.name} </td>
<td> ${e.age} </td>
<td> ${e.contact} </td>
<td> ${e.city} </td>

</tr>

`).join()

document.querySelector("#database_data").innerHTML = fetch_data;

    console.log(final)
}
fetch_database();




