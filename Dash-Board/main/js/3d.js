
async function getdata (){

    
  let {data}=  await axios.get('http://localhost:3000/clients')

  let names=  data.map((item)=>(
    `<option value=${item.name} id="option"> ${item.name} </option>`
  ))
  document.getElementById('clients').innerHTML=names;

}
getdata()