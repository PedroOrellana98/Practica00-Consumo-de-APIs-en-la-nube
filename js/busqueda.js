var el = document.querySelector('#botonPersona');
var el1 = document.querySelector('#botonPlaneta');

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
