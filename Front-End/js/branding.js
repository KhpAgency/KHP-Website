// Define the URL for the API
let url = 'https://khp-api.onrender.com/';

// Define an async function to get the branding data and display the carousel
async function getbranding() {
	// Use axios to fetch data from the API
	let { data } = await axios.get(`${url}allProjects`);
	console.log(data);

	// Generate the HTML for the carousel using the fetched data
	let clients =
	`<div id="data">
	<div id="carouselExampleControls" class="carousel slide mb5" data-bs-ride="carousel" data-bs-touch="true"
	data-bs-wrap="true" data-bs-interval="3500" data-bs-pause="hover">
	<div class="carousel-inner draggable-carousel">
	  <div class="carousel-item active ">
		<div class="row mt-5 d-flex justify-content-center rowstyle">
		${data.map(item => `<div class="col-md-2 col-4 d-flex justify-content-center ">
		<a onclick="showdiv()" title="${item.clientName}" href="#div${item.clientName}"><img src="${url}${(item.clientID.logo.replace("uploads\\", ""))}" class="btn2"
			alt="..."></a>
	  </div>`).slice(0, 12).join("")}
		  
		</div>
	  </div>
	  <div class="carousel-item">
	  <div class="row mt-5 d-flex justify-content-center rowstyle">
	  ${data.map(item => `<div class="col-md-2 col-4 d-flex justify-content-center ">
	  <a onclick="showdiv()" title="${item.clientName}" href="#div${item.clientName}"><img src="${url}${(item.clientID.logo.replace("uploads\\", ""))}" class="btn2"
		  alt="..."></a>
	</div>`).slice(0, 12).join("")}
		</div>
	  </div>

	</div>
	<button class="carousel-control-prev arrowwidth" type="button" data-bs-target="#carouselExampleControls"
	  data-bs-slide="prev">
	  <span class="carousel-control-prev-icon" aria-hidden="true"><svg xmlns='http://www.w3.org/2000/svg'
		  fill='#0c737a' viewBox='0 0 8 8'>
		  <path d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z' />
		</svg></span>
	  <span class="visually-hidden">Previous</span>
	</button>
	<button class="carousel-control-next arrowwidth" type="button" data-bs-target="#carouselExampleControls"
	  data-bs-slide="next">
	  <span class="carousel-control-next-icon" aria-hidden="true"><svg xmlns='http://www.w3.org/2000/svg'
		  fill='#0c737a' viewBox='0 0 8 8'>
		  <path d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z' />
		</svg></span>
	  <span class="visually-hidden">Next</span>
	</button>
  </div>
  
  <div class="our_happy_clients position-relative overflow-hidden" id="projects1">
  <div class="container">
	<div class="our_happy_clients_content">
	  <div class="splide client-slider" aria-label="Our happy Clients">
		<div
		  class="our_happy_clients_head d-flex align-items-center text-center justify-content-lg-between justify-content-center">
		  <h2 class="text-center flex-column d-flex flex-lg-row"><span class="display-5 projecth1 newfont">Our
			  Projects</span>
		  </h2>
		  <div class="splide__arrows d-none d-lg-flex align-items-center">
			<button class="splide__arrow splide__arrow--prev">
			  <svg xmlns="http://www.w3.org/2000/svg" width="36.5" height="36.5" viewBox="0 0 36.5 36.5">
				<g transform="translate(0.75 0.75)">
				  <circle cx="17.5" cy="17.5" r="17.5" fill="none" stroke="#939393" stroke-miterlimit="10"
					stroke-width="1.5" />
				  <path d="M6.627,0,0,6.627l6.627,6.627" transform="translate(12.936 11.373)" fill="none"
					stroke="#939393" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
					stroke-width="1.5" />
				</g>
			  </svg>
			</button>
			<button class="splide__arrow splide__arrow--next">
			  <svg xmlns="http://www.w3.org/2000/svg" width="36.5" height="36.5" viewBox="0 0 36.5 36.5">
				<g transform="translate(0.75 0.75)">
				  <circle cx="17.5" cy="17.5" r="17.5" fill="none" stroke="#939393" stroke-miterlimit="10"
					stroke-width="1.5" />
				  <path d="M0,0,6.627,6.627,0,13.255" transform="translate(15.436 11.373)" fill="none"
					stroke="#939393" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
					stroke-width="1.5" />
				</g>
			  </svg>
			</button>
		  </div>
		</div>
		<div class="splide__track">
		  <ul class="splide__list transform">
		  ${data.map(item =>
			`<li class="splide__slide slidewidth centercover">
		  <div class="client_quote_card">
			<a title="${item.clientName} project" href="#div${item.clientName}">
			  <img class="coverimg cursor" src="${url}${(item.clientID.cover.replace("uploads\\", ""))}" alt="${item.clientName}"
				onclick="if (!('ontouchstart' in window)) { showdiv() }">
			</a>
		  </div>
		</li>`).join("")}
			
		  </ul>
		</div>
	  </div>
	</div>
  </div>
</div> 
</div>







<!-- branding and profile covers -->
      <div id="clientproject" class="container mrgbottom100">
        <!-- api -->
		${data.map(item=>`
	<div id="div${item.clientName}" class="dnone">
		<div class="row">
		  <div class="col-md-6 centerdiv">
			<p class="text-center titles newfont">Branding</p>
			<a title="${item.clientName} branding" href="#div${item.clientName}1">
			  <img class="coverimg2 cursor" src="${url}${(item.clientID.cover.replace("uploads\\", ""))}" alt="" onclick="show${item.clientName}1(),showprojects()">
			</a>
		  </div>
		  <div class="col-md-6 centerdiv">
			<p class="text-center titles newfont">Profile</p>
			<a title="${item.clientName} profile" href="#div${item.clientName}2">
			  <img class="coverimg2 cursor" src="${url}${(item.clientID.cover.replace("uploads\\", ""))}" alt="" onclick="show${item.clientName}2(),showprojects()">
			</a>
		  </div>
		</div>


		<div id="div${item.clientName}1" class="dnone">
		  <p class="project-detail-text text-center titles newfont">Branding</p>
		  <div style="display: flex;place-content: center;" class="wow fadeInLeft">
			<div class="row">
			${item.branding.map(items=>`<div class="col-md-12" style="display: flex;place-content: center;">
			<img src="${url}${items.path.replace("uploads\\", "")}" alt="" style="width: 90%;">
		  </div>`)}
			  
			</div>
		  </div>
		</div>


		<div id="div${item.clientName}2" class="dnone">
		  <p class="project-detail-text text-center titles newfont">Profile</p>
		  <div style="display: flex;place-content: center;" class="wow fadeInLeft">
		  <div class="row">
		  ${item.profile.map(items=>`<div class="col-md-12" style="display: flex;place-content: center;">
		  <img src="${url}${items.path.replace("uploads\\", "")}" alt="" style="width: 90%;">
		</div>`)}
			
		  </div>
		  </div>
		</div>
	  </div>`)}
        


      </div>



      <!-- covers carousel 2-->
      <div class="our_happy_clients position-relative overflow-hidden" id="projects2">
  <div class="container">
	<div class="our_happy_clients_content">
	  <div class="splide client-slider" aria-label="Our happy Clients">
		<div
		  class="our_happy_clients_head d-flex align-items-center text-center justify-content-lg-between justify-content-center">
		  <h2 class="text-center flex-column d-flex flex-lg-row"><span class="display-5 projecth1 newfont">Our
			  Projects</span>
		  </h2>
		  <div class="splide__arrows d-none d-lg-flex align-items-center">
			<button class="splide__arrow splide__arrow--prev">
			  <svg xmlns="http://www.w3.org/2000/svg" width="36.5" height="36.5" viewBox="0 0 36.5 36.5">
				<g transform="translate(0.75 0.75)">
				  <circle cx="17.5" cy="17.5" r="17.5" fill="none" stroke="#939393" stroke-miterlimit="10"
					stroke-width="1.5" />
				  <path d="M6.627,0,0,6.627l6.627,6.627" transform="translate(12.936 11.373)" fill="none"
					stroke="#939393" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
					stroke-width="1.5" />
				</g>
			  </svg>
			</button>
			<button class="splide__arrow splide__arrow--next">
			  <svg xmlns="http://www.w3.org/2000/svg" width="36.5" height="36.5" viewBox="0 0 36.5 36.5">
				<g transform="translate(0.75 0.75)">
				  <circle cx="17.5" cy="17.5" r="17.5" fill="none" stroke="#939393" stroke-miterlimit="10"
					stroke-width="1.5" />
				  <path d="M0,0,6.627,6.627,0,13.255" transform="translate(15.436 11.373)" fill="none"
					stroke="#939393" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
					stroke-width="1.5" />
				</g>
			  </svg>
			</button>
		  </div>
		</div>
		<div class="splide__track">
		  <ul class="splide__list transform">
		  ${data.map(item =>
			`<li class="splide__slide slidewidth centercover">
		  <div class="client_quote_card">
			<a title="${item.clientName} project" href="#div${item.clientName}">
			  <img class="coverimg cursor" src="${url}${(item.clientID.cover.replace("uploads\\", ""))}" alt="${item.clientName}"
				onclick="if (!('ontouchstart' in window)) { showdiv() }">
			</a>
		  </div>
		</li>`).join("")}
			
		  </ul>
		</div>
	  </div>
	</div>
  </div>
</div> 

<script>${async function showdiv() {
	await	data.map(item=>{
			const divapi = document.getElementById(`div${item.clientName}`)
		divapi.className = "show";
	
		})}
	}</script>`
	
	document.getElementById("myBtnContainer").innerHTML = clients;


// async function showdiv() {
// 	await	data.map(item=>{
// 			const divapi = document.getElementById(`div${item.clientName}`)
// 		divapi.className = "show";
	
// 		})
// 	}

	// Create the first script element
	const script1 = document.createElement('script');
	script1.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js';

	// Create the second script element
	const script2 = document.createElement('script');
	script2.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/js/splide.min.js';

	// Create the third script element
	const script3 = document.createElement('script');
	script3.src = 'js/scriptcarousel.js';

	// Create the forth script element
	const script4 = document.createElement('script');
	script4.src = 'js/showdivs.js';

	// Get the HTML body element
	const body = document.getElementsByTagName('body')[0];

	// Append the script elements to the end of the body
	body.appendChild(script1);
	body.appendChild(script2);
	body.appendChild(script3);
	body.appendChild(script4);

}

getbranding();




// function showdiv() {
// 	const divapi = document.getElementById("divapi");
// 	// divapi.classList.replace('dnone','show');
// 	divapi.className = "show";
// }

// function showprojects() {
// 	const projects1 = document.getElementById("projects1");
// 	const projects2 = document.getElementById("projects2");

// 	projects2.style.display = "block";
// 	projects1.style.display = "none";
// }
