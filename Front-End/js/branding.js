let url = 'https://khp-api.onrender.com/';
async function getbranding() {


  document.getElementById("slider1").innerHTML = slider1;


}

getbranding();


function tt(){
	const divapi = document.getElementById("divapi");
	// divapi.classList.replace('dnone','show');
	divapi.className ="show"
}

function showprojects(){
	const projects1 = document.getElementById("projects1");
	const projects2 = document.getElementById("projects2");

	projects2.style.display="block";
	projects1.style.display="none";
}
