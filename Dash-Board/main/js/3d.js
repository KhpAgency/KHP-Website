async function getclients() {
  let { data } = await axios.get("http://localhost:3000/clients");

  let names = data.map(
    (item) => `<option value='${item.name}' id="option"> ${item.name} </option>`
  );
  document.getElementById("clients").innerHTML = names;
}
getclients();



const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  collectFormData();
});

function clearForm() {
  form.reset();
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

      if (response.data.message == "success") {
        Toastify({
          text: "3D project added successfully",
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
        clearForm();
      } else {
        console.log("test");
        console.log(response.data.message);

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
      console.log("");
    });
}

//   <img data-aos="fade-down" data-aos-duration="500" style="margin-top: 80px;" src="images/clients/safwa1.png" alt=""
//   class="cscale2">

// <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500"
//   class="bodyy swiper-container mySwiper width90" style="width: 60%;margin-top: 40px;">
//   <div class="swiper-wrapper">
//     <div class="swiper-slide">
//       <img class="lazyload" data-src="images/visual/3D/elsafwa/El Safwa-01.jpg" alt="">
//     </div>
//     <div class="swiper-slide">
//       <iframe width="950" height="490"
//         src="https://www.youtube.com/embed/T4kkoCMyCCY?loop=1&controls=1&autoplay=0&mute=1"
//         title="YouTube video player" frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowfullscreen></iframe>
//     </div>

//   </div>
//   <div class="swiper-button-next arrows"></div>
//   <div class="swiper-button-prev arrows"></div>
//   <div class="swiper-pagination"></div>
// </div>
