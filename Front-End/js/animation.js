async function getAnimation() {
    let MagdyUrl= 'C:/Users/Lenovo/Documents/GitHub/KHP-Website/Back-End'
    let FaresUrl= 'C:/Users/khpar/OneDrive/Documents/GitHub/KHP-Website/Back-End'
    let KhaledUrl= 'C:/Users/hamuk/Documents/GitHub/KHP-Website/Back-End'
  
    let { data } = await axios.get("http://localhost:3000/allAnimation");
    console.log(data);
  
    let animation = data.map((item) =>`<img data-aos="fade-down" data-aos-duration="500" style="margin-top: 80px;" src="${MagdyUrl}/${item.clientID.logo}" alt="" class="cscale2">
    <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500"
  class="bodyy swiper-container mySwiper width90" style="width: 60%;margin-top: 40px;">
  <div class="swiper-wrapper">
  ${item.videosLinks.map((link) =>`<div class="swiper-slide">
  <iframe width="950" height="400" class="lazyload"
  data-src="${link}"
  title="YouTube video player" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen></iframe>
  </div>`)}
  </div>
  
  <div class="swiper-button-next arrows"></div>
  <div class="swiper-button-prev arrows"></div>
  <div class="swiper-pagination"></div>
  </div>`)
  
    document.getElementById("animation").innerHTML = animation;
  
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
  
  getAnimation();