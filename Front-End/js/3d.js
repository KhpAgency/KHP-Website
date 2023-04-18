async function get3dprojects() {
    let {data} = await axios.get('http://localhost:3000/all3d');
    console.log(data);
    // let data = await axios.get("http://localhost:3000/client" );
    let project = data.map((item) => (
      
  
        `<img data-aos="fade-down" data-aos-duration="500" style="margin-top: 80px;" src="${item.clientID.logo}" alt=""
        class="cscale2">
  
        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500"
        class="bodyy swiper-container mySwiper width90" style="width: 60%;margin-top: 40px;">
        <div class="swiper-wrapper">
        <div class="swiper-slide">
        <img class="lazyload" data-src="images/visual/3D/elsafwa/El Safwa-01.jpg" alt="">
        </div>
        <div class="swiper-slide">
        <iframe width="950" height="490"
        src="https://www.youtube.com/embed/T4kkoCMyCCY?loop=1&controls=1&autoplay=0&mute=1"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
        </div>
  
        </div>
        <div class="swiper-button-next arrows"></div>
        <div class="swiper-button-prev arrows"></div>
        <div class="swiper-pagination"></div>
        </div>` 
   ))
    document.getElementById('3dprojects').innerHTML = names;
  
  }
  get3dprojects();