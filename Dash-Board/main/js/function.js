const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  collectFormData();
});

function collectFormData() {
<<<<<<< Updated upstream
  const form = document.querySelector('form');
  const formData = new FormData(form);
  const clientName = formData.get('clientName');
  const logo = formData.get('logo');
  const cover = formData.get('cover');


  axios.post('http://localhost:3000/addClient', {
    clientName,
    logo,
    cover
  })
=======


  const options = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: "http://localhost:3000/addClient",
    data : form

  };
  axios
    .request(options)
>>>>>>> Stashed changes
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });


}
