const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  collectFormData();
});


function collectFormData() {
  // const form = document.querySelector('form');
  const formData = new FormData(form);
  const clientName = formData.get('clientName');
  const logo = formData.get('logo');
  const cover = formData.get('cover');

  // Get the file paths of the uploaded files
  const logoPath = logo ? logo.name : '';
  const coverPath = cover ? cover.name : '';

  // console.log('Client Name:', clientName);
  // console.log('Logo:', logoPath);
  // console.log('Cover:', coverPath);

  // You can then use the collected data to submit it to a server or perform other actions



  axios.post('/addClient', {
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