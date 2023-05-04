let url = 'https://khp-api.onrender.com/';
async function getbranding() {
  
    let { data } = await axios.get(`${url}allProjects`);
    console.log(data);
  
    let slider1 = data.map((item) => `<div class="owl-carousel">
      <div class="item">
        <button class="btn2" onclick="filterSelection('${item.clientName}')"><a title="${item.clientName}" href="#div${item.clientName}"><img
              class="imgscale" src="${url}${(item.clientID.logo.replace("uploads\\", ""))}" alt=""></a></button>
      </div>
    </div>`).join('')
  
    document.getElementById("hambozo").innerHTML = slider1;

  
  }
  
  getbranding();