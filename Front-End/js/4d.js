async function get4dprojects() {
  let url = 'https://khp-api.onrender.com/';

  let { data } = await axios.get(`${url}all4d`);
  console.log(data);

  let project = data.map((item) => `
    <img data-aos="fade-down" data-aos-duration="500" style="margin-top: 80px;" src="${url}${(item.clientID.logo.replace("uploads\\", ""))}" alt="" class="cscale2">
    <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500" class="bodyy swiper-container mySwiper width90" style="width: 60%;margin-top: 40px;">
      <div class="swiper-wrapper">
        ${item.fourDphotos.map((items) => `
          <div class="swiper-slide">
            <img src="${url}${(items.path.replace("uploads\\", ""))}" alt="">
          </div>
        `).join('')}

        ${item.videoLink && `
          <div class="swiper-slide">
            <iframe width="950" height="490" src="${item.videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        `}
      </div>
      <div class="swiper-button-next arrows"></div>
      <div class="swiper-button-prev arrows"></div>
      <div class="swiper-pagination"></div>
    </div>
  `).join('');

  document.getElementById("4dprojects").innerHTML = project;

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

get4dprojects();