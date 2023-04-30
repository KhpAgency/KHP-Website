async function get3dprojects() {

  let { data } = await axios.get("http://localhost:3000/all3d");
  let x = data.map(item => item)
  console.log(x);

  let project = data.map((item) => `<img data-aos="fade-down" data-aos-duration="500" style="margin-top: 80px;" src="C:/Users/khpar/OneDrive/Documents/GitHub/KHP-Website/Back-End/${item.clientID.logo}" alt=""
        class="cscale2">
  
        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500"
        class="bodyy swiper-container mySwiper width90" style="width: 60%;margin-top: 40px;">
        <div class="swiper-wrapper">

        ${item.threeDphotos.map((items) =>(`<div class="swiper-slide">

        <img src="C:/Users/khpar/OneDrive/Documents/GitHub/KHP-Website/Back-End/${items.path}" alt="">

      </div>`))}
        
        ${item.videoLink &&`<div class="swiper-slide">
        <iframe width="950" height="490"
        src="https://www.youtube.com/embed/T4kkoCMyCCY?loop=1&controls=1&autoplay=0&mute=1"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
        </div>`}
        
  
        </div>
        <div class="swiper-button-next arrows"></div>
        <div class="swiper-button-prev arrows"></div>
        <div class="swiper-pagination"></div>
        </div>`
  );
  document.getElementById("3dprojects").innerHTML = project;

  window.onload = function () {
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
}

get3dprojects();








// async function get3dprojects() {

//   let { data } = await axios.get("http://localhost:3000/all3d");
//   let x = data.map(item => item)
//   console.log(x);
//   // let x = threeDphotos[0].map(items => items)
//   // let path = x.map(item => item.path)
//   // console.log(path);
//   // console.log(threeDphotos.map((item=>item[0]).map(e =>e.path)));
//   // console.log(threeDphotos[0].map(items => items.path));



//   let project = data.map((item) => `<img data-aos="fade-down" data-aos-duration="500" style="margin-top: 80px;" src="C:/Users/khpar/OneDrive/Documents/GitHub/KHP-Website/Back-End/${item.clientID.logo}" alt=""
//         class="cscale2">
  
//         <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500"
//         class="bodyy swiper-container mySwiper width90" style="width: 60%;margin-top: 40px;">
//         <div class="swiper-wrapper">

//         ${item.threeDphotos.map((items) =>(`<div class="swiper-slide">

//         <img src="C:/Users/khpar/OneDrive/Documents/GitHub/KHP-Website/Back-End/${items.path}" alt="">

//       </div>`))}
        
//         ${item.videoLink &&`<div class="swiper-slide">
//         <iframe width="950" height="490"
//         src="https://www.youtube.com/embed/T4kkoCMyCCY?loop=1&controls=1&autoplay=0&mute=1"
//         title="YouTube video player" frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowfullscreen></iframe>
//         </div>`}
        
  
//         </div>
//         <div class="swiper-button-next arrows"></div>
//         <div class="swiper-button-prev arrows"></div>
//         <div class="swiper-pagination"></div>
//         </div>`
//   );
//   document.getElementById("3dprojects").innerHTML = project;
// }
// get3dprojects();

// ${item.threeDphotos.map((item2) => {
//   `<img class="lazyload" data-src="C:/Users/Lenovo/Documents/GitHub/KHP-Website/Back-End/${item2.path}" alt="">`;
// })}


// <img class="lazyload" data-src="images/visual/3D/elsafwa/El Safwa-01.jpg" alt="">
