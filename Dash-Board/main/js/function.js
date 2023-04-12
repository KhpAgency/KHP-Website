const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  collectFormData();
});


function collectFormData() {
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
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}