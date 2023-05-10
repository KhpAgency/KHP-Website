// Use axios to fetch data from the API
let { data } = await axios.get(`${url}allProjects`);

function showdiv() {
    data.map(item=>{
        const divapi = document.getElementById(`div${item.clientName}`)
    divapi.className = "show";

    })
    // divapi.classList.replace('dnone','show');
}

function showprojects() {
    const projects1 = document.getElementById("projects1");
    const projects2 = document.getElementById("projects2");

    projects2.style.display = "block";
    projects1.style.display = "none";
}