
async function getdata (){

    
  let {data}=  await axios.get('http://localhost:3000/clients')

  let names=  data.map((item)=>(
    `<option value=${item.name} id="option"> ${item.name} </option>`
  ))
  document.getElementById('clients').innerHTML=names;

}
getdata()





const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  collectFormData();
});

function clearForm () {  
  form.reset()
}

function collectFormData() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: "http://localhost:3000/add3d",
    data: form,
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);

      
      // if (response.data.message=="success") {
      //   Toastify({
      //     text: "Client added successfully",
      //     className: "info",
      //     style: {
      //       background: "linear-gradient(to right, #00b09b, #96c93d)",
      //     }
      //   }).showToast(); 
      //   clearForm()
      // } else {

      //   // to show error message in toast
      //   Toastify({
      //     text: response.data.message ,
      //     className: "info",
      //     style: {
      //       background: "red",
      //       borderRadius: "5px",
      //     }
      //   }).showToast();
      // }

    })
    .catch(function (error) {
      console.error(error);
      console.log("");
    });


    
  }
  
  
