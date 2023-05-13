function addInput() {
  var newInput = document.createElement("input");
  newInput.className = "form-control form-control-sm";
  newInput.type = "text";
  newInput.name = "eventUrl";
  newInput.placeholder = "Enter Video URL";
  var formGroup = document.createElement("div");
  formGroup.className = "form-group";
  formGroup.appendChild(newInput);
  var submitButton = document.querySelector("#btn1");
  var formElement = document.querySelector("#form1");
  console.log(formElement);
  formElement.insertBefore(formGroup, submitButton);
  formElement.insertBefore(submitButton, formGroup.nextSibling.nextSibling);
}

let url = "https://khp-api.onrender.com/";


async function getclients() {
  let { data } = await axios.get(`${url}clients`);

  let names = `<option disabled selected="selected">Choose...</option>
    ${data
      .map(
        (item) =>
          `<option value='${item.name}' id="option"> ${item.name} </option>`
      )
      .join("")}`;
  document.getElementById("clients").innerHTML = names;
  document.getElementById("clients2").innerHTML = names;
}
getclients();

const form = document.querySelector("#form1");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  collectFormData();
});

function clearForm() {
  form.reset();
}

function collectFormData() {
  const formData = new FormData(form);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    url: `${url}addEvents`,
    data: new URLSearchParams(formData),
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);

      if (response.data.message == "success") {
        Toastify({
          text: "Animation project added successfully",
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
        clearForm();
      } else {
        // to show error message in toast
        Toastify({
          text: response.data.message,
          className: "info",
          style: {
            background: "red",
            borderRadius: "5px",
          },
        }).showToast();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

const form2 = document.getElementById("form2");
form2.addEventListener("submit", function (event) {
  event.preventDefault();
  collectForm2Data();
});

function collectForm2Data() {
  const formData = new FormData(form2);
  const options = {
    method: "delete",
    url: `${url}deleteEvents`,
    data: new URLSearchParams(formData),
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);

      if (response.data.message !== "Choose a client!") {
        Toastify({
          text: response.data.message,
          className: "info",
          style: {
            background: "red",
          },
        }).showToast();
        clearForm();
      } else {
        // to show error message in toast
        Toastify({
          text: response.data.message,
          className: "info",
          style: {
            background: "orange",
            borderRadius: "5px",
          },
        }).showToast();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}
