
async function retrievedata() {
    let fetch_data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let final_data = await fetch_data.json();
    console.log(final_data)
    
    // fetch data

    // print inside the table

    let fetc = final_data.map((e) => `
    <tr>
    
<td> ${e.id}  </td>
<td> ${e.title}  </td>
<td> ${e.body}  </td>

    </td>
    `).join("");
    
    document.querySelector("#display").innerHTML=fetc
}
retrievedata();