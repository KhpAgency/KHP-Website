
async function getdata (){

    
  let data=  await axios.get('http://localhost:3000/clients').then(e=>console.log(e.data))
    // console.log(data)
    data.map(e=>e.data.name)
    
    // let option = document.getElementById('option').value
    
    // console.log(option);
//    await data.map(e=>console.log(e))
}
getdata()