let url = 'https://khp-api.onrender.com/';
async function getbranding2() {
	let { data } = await axios.get(`${url}allProjects`);
	console.log(data);

	let project =
		`
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
		  ${data.map(item=>
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
</div> `
  




	document.getElementById("data2").innerHTML = project;

	// Create the first script element
const script1 = document.createElement('script');
script1.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js';

// Create the second script element
const script2 = document.createElement('script');
script2.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/js/splide.min.js';

// Create the third script element
const script3 = document.createElement('script');
script3.src = 'js/scriptcarousel.js';

// Get the HTML body element
const body = document.getElementsByTagName('body')[0];

// Append the script elements to the end of the body
body.appendChild(script1);
body.appendChild(script2);
body.appendChild(script3);



}

getbranding2();




function showdiv() {
	const divapi = document.getElementById("divapi");
	// divapi.classList.replace('dnone','show');
	divapi.className = "show"
}

function showprojects() {
	const projects1 = document.getElementById("projects1");
	const projects2 = document.getElementById("projects2");

	projects2.style.display = "block";
	projects1.style.display = "none";
}
