
// async function fvfgdgg() {
//     let url = 'https://khp-api.onrender.com/';
//     let { data } = await axios.get(`${url}allProjects`);
//     data.map(item =>
//         `<li class="splide__slide slidewidth centercover">
//     <div class="client_quote_card">
//         <a title="${item.clientName} project" href="#div${item.clientName}">
//         <img class="coverimg cursor" src="${url}${(item.clientID.cover.replace("uploads\\", ""))}" alt="${item.clientName}"
//             onclick="(function showclients(){

//                 const div = document.getElementById('div${item.clientName}');
//                 if (div.className == "dnone") {
//                     div.className = "show";
//                   } else {
//                     if (div.className == "show") {
//                         div.className = "dnone";
//                       }            
//                     })()">
//         </a>
//     </div>
//     </li>`).join("")
// }


// let getData = async () => {
//     let url = 'https://khp-api.onrender.com/';
//     let { data } = await axios.get(`${url}allProjects`);
//     data.map(item=>{
//    return    function showclients() {
//             const div = document.getElementById('div${item.clientName}');
//                 if (div.className == "dnone") {
//                     div.className = "show";
//                   } else {
//                     if (div.className == "show") {
//                         div.className = "dnone";
//                       }            
//                     }
//         }
//     })
// }



// function showclients() {
//     const div = document.getElementById(`div${k}`);
//     if (div.className == "dnone") {
//         div.className = "show";
//     } else {
//         if (div.className == "show") {
//             div.className = "dnone";
//         }
//     }
// }


// async function showdiv(name) {
//     let url = 'https://khp-api.onrender.com/';
//     let response = await axios.get(`${url}allProjects`);
//     // let data = response.data;
//         const div = document.getElementById(`div${name}`)
//         div.className = "show";
// }

function showdiv() {
	const divapi = document.getElementById("divapi");
	divapi.className = "show"
}

function showprojects() {
    const projects1 = document.getElementById("projects1");
    const projects2 = document.getElementById("projects2");

    projects2.style.display = "block";
    projects1.style.display = "none";
}
