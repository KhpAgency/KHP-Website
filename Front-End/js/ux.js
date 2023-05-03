async function getux() {

  let url = 'https://khp-api.onrender.com/';

  let { data } = await axios.get(`${url}allWebsites`);

  let project = `
    <h3 class="titles newfont" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" style="text-align: center;">Our clients</h3>
    <div id="myBtnContainer">
      <div id="uxlogo" class="row " style="padding-left: 70px;padding-right: 70px;padding-bottom: 70px;">
        ${data.map(item => `
          <div class="col-4 col-md-2 iconbox">
            <button title="${item.name}" class="btn2" onclick="filterSelection('${item.name}')">
              <img class="cmobscale2" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500" src="${url}${item.clientID.logo.replace("uploads\\", "")}" alt="">
            </button>
          </div>
        `).join('')}
      </div>
    </div>
    <div id="uxphotos" class="container">
      ${data.map(item => `
        <div class="filterDiv ${item.name}">
          <div style="display: flex;place-content: center;" class="wow fadeInLeft">
            <div class="bodyy swiper-container mySwiper marginlast" style="width: 90%;">
              <div class="swiper-wrapper">
                ${item.websitephotos.map(items => `
                  <div class="swiper-slide"><img class="lazyload" data-src="${url}${items.path.replace("uploads\\", "")}" alt=""></div>
                `).join('')}
              </div>
              <div class="swiper-button-next arrows"></div>
              <div class="swiper-button-prev arrows"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.getElementById("ux").innerHTML = project.join('');

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

getux();