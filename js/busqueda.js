var el = document.querySelector('#botonPersona');
var el1 = document.querySelector('#botonPlaneta');
var el2 = document.querySelector('#botonFilme');
var el3 = document.querySelector('#botonNave');
var el4 = document.querySelector('#botonVehiculo');
var el5 = document.querySelector('#botonEspecie');

if (el) {
  el.addEventListener('click', function(){
    datosPersona();
  });
}

if (el1) {
  el1.addEventListener('click', function(){
    datosPlaneta();
  });
}

if (el2) {
  el2.addEventListener('click', function(){
    datosFilme();
  });
}

if (el3) {
  el3.addEventListener('click', function(){
    datosNave();
  });
}

if (el4) {
  el4.addEventListener('click', function(){
    datosVehiculo();
  });
}

if (el5) {
  el5.addEventListener('click', function(){
    datosEspecie();
  });
}

function datosPersona() {
valor = document.getElementById("texto").value;

if (valor == "") {
  let url1 = `https://swapi.dev/api/people`;
  const api = new XMLHttpRequest();
  api.open('GET', url1, true);
  api.send();
  api.onreadystatechange = function (){
    if (this.status == 200 && this.readyState == 4){
      let datos1 = JSON.parse(this.responseText);
      let people = document.querySelector('#people');
      people.innerHTML = '';
      for (let i of datos1.results) {
       people.innerHTML += `<td>${i.name}</td>` +
       `<td>${i.height}</td>` +
       `<td>${i.mass}</td>` +
       `<td>${i.hair_color}</td>` +
       `<td>${i.skin_color}</td>` +
       `<td>${i.eye_color}</td>` +
       `<td>${i.birth_year}</td>` +
       `<td>${i.gender}</td>`
      }
      }
    }
}else if (valor != ""){

  let url = `https://swapi.dev/api/people/?search=`+ valor;
  const api = new XMLHttpRequest();
  api.open('GET', url, true);
  api.send();
  api.onreadystatechange = function (){
    if (this.status == 200 && this.readyState == 4){
      let datos = JSON.parse(this.responseText);
      console.log(datos);
      let people = document.querySelector('#people');
      people.innerHTML = '';
      for (let i of datos.results) {
        people.innerHTML += `<td>${i.name}</td>`+
        `<td>${i.height}</td>` +
        `<td>${i.mass}</td>` +
        `<td>${i.hair_color}</td>` +
        `<td>${i.skin_color}</td>` +
        `<td>${i.eye_color}</td>` +
        `<td>${i.birth_year}</td>` +
        `<td>${i.gender}</td>`
       }
      }
    }
  }
}

  function datosPlaneta() {
    valor = document.getElementById("texto1").value;
    
    if (valor == "") {
      let url1 = `https://swapi.dev/api/planets`;
      const api = new XMLHttpRequest();
      api.open('GET', url1, true);
      api.send();
      api.onreadystatechange = function (){
        if (this.status == 200 && this.readyState == 4){
          let datos1 = JSON.parse(this.responseText);
          let planet = document.querySelector('#planet');
          planet.innerHTML = '';
          for (let i of datos1.results) {
           planet.innerHTML += `<td>${i.name}</td>` +
           `<td>${i.rotation_period}</td>` +
           `<td>${i.orbital_peiod}</td>` +
           `<td>${i.diameter}</td>` +
           `<td>${i.climate}</td>` +
           `<td>${i.gravity}</td>` +
           `<td>${i.terrain}</td>` +
           `<td>${i.surface_water}</td>` + 
           `<td>${i.population}</td>`
          }
          }
        }
    }else if (valor != ""){
    
      let url = `https://swapi.dev/api/planets/?search=`+ valor;
      const api = new XMLHttpRequest();
      api.open('GET', url, true);
      api.send();
      api.onreadystatechange = function (){
        if (this.status == 200 && this.readyState == 4){
          let datos = JSON.parse(this.responseText);
          console.log(datos);
          let planet = document.querySelector('#planet');
          planet.innerHTML = '';
    
          for (let i of datos.results) {
            planet.innerHTML += `<td>${i.name}</td>`+
           `<td>${i.rotation_period}</td>` +
           `<td>${i.orbital_peiod}</td>` +
           `<td>${i.diameter}</td>` +
           `<td>${i.climate}</td>` +
           `<td>${i.gravity}</td>` +
           `<td>${i.terrain}</td>` +
           `<td>${i.surface_water}</td>` + 
           `<td>${i.population}</td>`
           }
          }
        }
      }
    }

    function datosFilme() {
      valor = document.getElementById("texto2").value;
      
      if (valor == "") {
        let url1 = `https://swapi.dev/api/films/`;
        const api = new XMLHttpRequest();
        api.open('GET', url1, true);
        api.send();
        api.onreadystatechange = function (){
          if (this.status == 200 && this.readyState == 4){
            let datos1 = JSON.parse(this.responseText);
            let film = document.querySelector('#film');
            film.innerHTML = '';
            for (let i of datos1.results) {
             film.innerHTML += `<td>${i.title}</td>` +
             `<td>${i.episode_id}</td>` +
             `<td>${i.opening_crawl}</td>` +
             `<td>${i.director}</td>` +
             `<td>${i.producer}</td>` +
             `<td>${i.release_date}</td>`
            }
            }
          }
      }else if (valor != ""){
      
        let url = `https://swapi.dev/api/films/?search=`+ valor;
        const api = new XMLHttpRequest();
        api.open('GET', url, true);
        api.send();
        api.onreadystatechange = function (){
          if (this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let film = document.querySelector('#film');
            film.innerHTML = '';
      
            for (let i of datos.results) {
              film.innerHTML += `<td>${i.title}</td>` +
             `<td>${i.episode_id}</td>` +
             `<td>${i.opening_crawl}</td>` +
             `<td>${i.director}</td>` +
             `<td>${i.producer}</td>` +
             `<td>${i.release_date}</td>`
             }
            }
          }
        }
      }

function datosNave() {
valor = document.getElementById("texto3").value;

if (valor == "") {
  let url1 = `https://swapi.dev/api/starships/`;
  const api = new XMLHttpRequest();
  api.open('GET', url1, true);
  api.send();
  api.onreadystatechange = function (){
    if (this.status == 200 && this.readyState == 4){
      let datos1 = JSON.parse(this.responseText);
      let starship = document.querySelector('#starship');
      starship.innerHTML = '';
      for (let i of datos1.results) {
       starship.innerHTML += `<td>${i.name}</td>` +
       `<td>${i.model}</td>` +
       `<td>${i.manufacturer}</td>` +
       `<td>${i.cost_in_credits}</td>` +
       `<td>${i.length}</td>` +
       `<td>${i.crew}</td>` +
       `<td>${i.passengers}</td>` +
       `<td>${i.cargo_capacity}</td>` +
       `<td>${i.consumables}</td>`
      }
      }
    }
}else if (valor != ""){

  let url = `https://swapi.dev/api/starships/?search=`+ valor;
  const api = new XMLHttpRequest();
  api.open('GET', url, true);
  api.send();
  api.onreadystatechange = function (){
    if (this.status == 200 && this.readyState == 4){
      let datos = JSON.parse(this.responseText);
      console.log(datos);
      let starship = document.querySelector('#starship');
      starship.innerHTML = '';
      for (let i of datos.results) {
        starship.innerHTML += `<td>${i.name}</td>` +
       `<td>${i.model}</td>` +
       `<td>${i.manufacturer}</td>` +
       `<td>${i.cost_in_credits}</td>` +
       `<td>${i.length}</td>` +
       `<td>${i.crew}</td>` +
       `<td>${i.passengers}</td>` +
       `<td>${i.cargo_capacity}</td>` +
       `<td>${i.consumables}</td>`
       }
      }
    }
  }
}

function datosVehiculo() {
  valor = document.getElementById("texto4").value;
  
  if (valor == "") {
    let url1 = `https://swapi.dev/api/vehicles/`;
    const api = new XMLHttpRequest();
    api.open('GET', url1, true);
    api.send();
    api.onreadystatechange = function (){
      if (this.status == 200 && this.readyState == 4){
        let datos1 = JSON.parse(this.responseText);
        let vehicle = document.querySelector('#vehicle');
        vehicle.innerHTML = '';
        for (let i of datos1.results) {
         vehicle.innerHTML += `<td>${i.name}</td>` +
         `<td>${i.model}</td>` +
         `<td>${i.manufacturer}</td>` +
         `<td>${i.cost_in_credits}</td>` +
         `<td>${i.length}</td>` +
         `<td>${i.crew}</td>` +
         `<td>${i.passengers}</td>` +
         `<td>${i.cargo_capacity}</td>` +
         `<td>${i.consumables}</td>`
        }
        }
      }
  }else if (valor != ""){
  
    let url = `https://swapi.dev/api/vehicles/?search=`+ valor;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function (){
      if (this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText);
        console.log(datos);
        let vehicle = document.querySelector('#vehicle');
        vehicle.innerHTML = '';
        for (let i of datos.results) {
          vehicle.innerHTML += `<td>${i.name}</td>` +
         `<td>${i.model}</td>` +
         `<td>${i.manufacturer}</td>` +
         `<td>${i.cost_in_credits}</td>` +
         `<td>${i.length}</td>` +
         `<td>${i.crew}</td>` +
         `<td>${i.passengers}</td>` +
         `<td>${i.cargo_capacity}</td>` +
         `<td>${i.consumables}</td>`
         }
        }
      }
    }
  }


function datosEspecie() {
  valor = document.getElementById("texto5").value;
  
  if (valor == "") {
    let url1 = `https://swapi.dev/api/species/`;
    const api = new XMLHttpRequest();
    api.open('GET', url1, true);
    api.send();
    api.onreadystatechange = function (){
      if (this.status == 200 && this.readyState == 4){
        let datos1 = JSON.parse(this.responseText);
        let specie = document.querySelector('#specie');
        specie.innerHTML = '';
        for (let i of datos1.results) {
         specie.innerHTML += `<td>${i.name}</td>` +
         `<td>${i.classification}</td>` +
         `<td>${i.designation}</td>` +
         `<td>${i.average_height}</td>` +
         `<td>${i.skin_colors}</td>` +
         `<td>${i.hair_colors}</td>` +
         `<td>${i.eye_colors}</td>` +
         `<td>${i.average_lifespan}</td>` +
         `<td>${i.language}</td>`
        }
        }
      }
  }else if (valor != ""){
  
    let url = `https://swapi.dev/api/species/?search=`+ valor;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function (){
      if (this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText);
        console.log(datos);
        let specie = document.querySelector('#specie');
        specie.innerHTML = '';
        for (let i of datos.results) {
          specie.innerHTML += `<td>${i.name}</td>` +
          `<td>${i.classification}</td>` +
          `<td>${i.designation}</td>` +
          `<td>${i.average_height}</td>` +
          `<td>${i.skin_colors}</td>` +
          `<td>${i.hair_colors}</td>` +
          `<td>${i.eye_colors}</td>` +
          `<td>${i.average_lifespan}</td>` +
          `<td>${i.language}</td>`
         }
        }
      }
    }
 }