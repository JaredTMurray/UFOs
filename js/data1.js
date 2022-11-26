fetch("data.json")
.then(function(response){
  return response.json();
})
.then(function(datas){
  let placeholder = document.querySelector("#data-output");
  let out ="";
  for (let data of datas){
    out += `
      <tr>
        <td>${data.datetime}</td>
        <td>${data.city}</td>
        <td>${data.state}</td>
        <td>${data.country}</td>
        <td>${data.shape}</td>
        <td>${data.durationMinutes}</td>
        <td>${data.comments}</td>
      </tr>
   `;
  }
  placeholder.innerHTML = out;
});

