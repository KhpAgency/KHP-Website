async function getbranding() {
    let url = 'https://khp-api.onrender.com/';
  
    let { data } = await axios.get(`${url}allProjects`);
    console.log(data);
  
    let slider1 = data.map((item) => `<div class="owl-carousel">
    <div class="item">
      <button class="btn2" onclick="filterSelection('api')"><a title="api" href="#divapi"><img
            class="imgscale" src="images/clients/Logos Colored-01.png" alt=""></a></button>
    </div>
  </div>`)
  
    document.getElementById("slider1").innerHTML = slider1;
  
    // Initialize Swiper slider
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  
  }
  
  getbranding();