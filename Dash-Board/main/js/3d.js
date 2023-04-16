
async function getdata (){

    
  let {data}=  await axios.get('http://localhost:3000/clients')
    console.log(data)
  let names=  data.map((item)=>(
    `<option value=${item.name} id="option"> ${item.name} </option>`
  ))

  document.getElementById('clients').innerHTML=names;

//   console.log(names);
}
getdata()