var el = document.querySelector('#botonPersona');
var el1 = document.querySelector('#botonPlaneta');
var el2 = document.querySelector('#botonFilme');
var el3 = document.querySelector('#botonNave');
var el4 = document.querySelector('#botonVehiculo');
var el5 = document.querySelector('#botonEspecie');
const anterior = document.querySelector('#botonAnterior');
const siguiente = document.querySelector('#botonSiguiente');
var totPaginas = 0;
var paginaActual = 0;
var paginas = [];


if (el) {
  el.addEventListener('click', function(){
    paginacionPersona();
  });
}

if (el1) {
  el1.addEventListener('click', function(){
    paginacionPlaneta();
  });
}

if (el2) {
  el2.addEventListener('click', function(){
    paginacionFilme();
  });
}

if (el3) {
  el3.addEventListener('click', function(){
    paginacionNave();
  });
}

if (el4) {
  el4.addEventListener('click', function(){
    paginacionVehiculo();
  });
}

if (el5) {
  el5.addEventListener('click', function(){
    paginacionEspecie();
  });
}

function paginacionPersona() {
  valor = document.getElementById("texto").value;
  let url = `https://swapi.dev/api/people/?search=`+ valor;
  const api = new XMLHttpRequest();

  api.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      totPaginas = data.results.length;
      totPaginas /= 5;
      console.log(totPaginas + '<--');
      let parteEntera = parseInt(totPaginas);
      let parteDecimal = 5*( totPaginas - parteEntera)
      totPaginas = Math.ceil(totPaginas);
      
      let paginas = [] // Numero de Paginas.
      let items = [] // Items por pagina. 
      let cantidaItems = 0;
      for (let i = 0; i < parteEntera; i++) {
          console.log('Pagina actual -->' + i);
          for (let j = i*5; j < (i+1)*5; j++) {
              if(i >= 1){
                  let contador = (i*5)+j;                        
              }
              items.push(data.results[j]);
              cantidaItems ++;
          }
          paginas.push(items);
          items = [];
      }
      items = [];
      for (let i = cantidaItems; i < data.results.length; i++) {
          items.push(data.results[i])
      }
      paginas.push(items);
      console.log(paginas.length);
      globalThis.paginas = paginas;
      globalThis.paginaActua = 0;
      funcionBotones();
      mostrarPersona();
    }
  }
  api.open('GET', url, true);
  api.send();
}

function mostrarPersona(){
  let items = globalThis.paginas[globalThis.paginaActua];
  console.log(items);
  let detalles = '';
  document.querySelector(".tabla").innerHTML = detalles;
  for (let i = 0; i < items.length; i++) {
    detalles += "<tr>" +  
     "<td>" + items[i].name + "</td>" +
     "<td>" + items[i].height + "</td>" + 
     "<td>" + items[i].mass + "</td>" +
     "<td>" + items[i].hair_color + "</td>" +
     "<td>" + items[i].skin_color + "</td>" +
     "<td>" + items[i].eye_color + "</td>" +
     "<td>" + items[i].birth_year + "</td>" +
     "<td>" + items[i].gender + "</td>" +
     "</tr>";
  }
  document.querySelector(".tabla").innerHTML = detalles;
  console.log(globalThis.paginaActua);
}

function paginacionPlaneta() {
  valor = document.getElementById("texto1").value;
  let url = `https://swapi.dev/api/planets/?search=`+ valor;
  const api = new XMLHttpRequest();

  api.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      totPaginas = data.results.length;
      totPaginas /= 5;
      console.log(totPaginas + '<--');
      let parteEntera = parseInt(totPaginas);
      let parteDecimal = 5*( totPaginas - parteEntera)
      totPaginas = Math.ceil(totPaginas);
      
      let paginas = [] // Numero de Paginas.
      let items = [] // Items por pagina. 
      let cantidaItems = 0;
      for (let i = 0; i < parteEntera; i++) {
          console.log('Pagina actual -->' + i);
          for (let j = i*5; j < (i+1)*5; j++) {
              if(i >= 1){
                  let contador = (i*5)+j;                        
              }
              items.push(data.results[j]);
              cantidaItems ++;
          }
          paginas.push(items);
          items = [];
      }
      items = [];
      for (let i = cantidaItems; i < data.results.length; i++) {
          items.push(data.results[i])
      }
      paginas.push(items);
      console.log(paginas.length);
      globalThis.paginas = paginas;
      globalThis.paginaActua = 0;
      funcionBotones();
      mostrarPlaneta();
    }
  }
  api.open('GET', url, true);
  api.send();
}

function mostrarPlaneta(){

  let items = globalThis.paginas[globalThis.paginaActua];
  console.log(items);
  let detalles = '';
  document.querySelector(".tabla").innerHTML = detalles;
  for (let i = 0; i < items.length; i++) {
     detalles += "<tr>" +  
     "<td>" + items[i].name + "</td>" +
     "<td>" + items[i].rotation_period + "</td>" + 
     "<td>" + items[i].orbital_period + "</td>" +
     "<td>" + items[i].diameter + "</td>" +
     "<td>" + items[i].climate + "</td>" +
     "<td>" + items[i].gravity + "</td>" +
     "<td>" + items[i].terrain + "</td>" +
     "<td>" + items[i].surface_water + "</td>" +
     "<td>" + items[i].population + "</td>" +
     "</tr>";
  }
  document.querySelector(".tabla").innerHTML = detalles;
  
}

function paginacionVehiculo() {
  valor = document.getElementById("texto4").value;
  let url = `https://swapi.dev/api/vehicles/?search=`+ valor;
  const api = new XMLHttpRequest();

  api.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      totPaginas = data.results.length;
      totPaginas /= 5;
      console.log(totPaginas + '<--');
      let parteEntera = parseInt(totPaginas);
      let parteDecimal = 5*( totPaginas - parteEntera)
      totPaginas = Math.ceil(totPaginas);
      
      let paginas = [] // Numero de Paginas.
      let items = [] // Items por pagina. 
      let cantidaItems = 0;
      for (let i = 0; i < parteEntera; i++) {
          console.log('Pagina actual -->' + i);
          for (let j = i*5; j < (i+1)*5; j++) {
              if(i >= 1){
                  let contador = (i*5)+j;                        
              }
              items.push(data.results[j]);
              cantidaItems ++;
          }
          paginas.push(items);
          items = [];
      }
      items = [];
      for (let i = cantidaItems; i < data.results.length; i++) {
          items.push(data.results[i])
      }
      paginas.push(items);
      console.log(paginas.length);
      globalThis.paginas = paginas;
      globalThis.paginaActua = 0;
      funcionBotones();
      mostrarVehiculo();
    }
  }
  api.open('GET', url, true);
  api.send();
}

function mostrarVehiculo(){

  let items = globalThis.paginas[globalThis.paginaActua];
  console.log(items);
  let detalles = '';
  document.querySelector(".tabla").innerHTML = detalles;
  for (let i = 0; i < items.length; i++) {
     detalles += "<tr>" +  
     "<td>" + items[i].name + "</td>" +
     "<td>" + items[i].model + "</td>" + 
     "<td>" + items[i].manufacturer + "</td>" +
     "<td>" + items[i].cost_in_credits + "</td>" +
     "<td>" + items[i].length + "</td>" +
     "<td>" + items[i].crew + "</td>" +
     "<td>" + items[i].passengers + "</td>" +
     "<td>" + items[i].cargo_capacity + "</td>" +
     "<td>" + items[i].consumables + "</td>" +
     "</tr>";
  }
  document.querySelector(".tabla").innerHTML = detalles;
  
}

function paginacionFilme() {
  valor = document.getElementById("texto2").value;
  let url = `https://swapi.dev/api/films/?search=`+ valor;
  const api = new XMLHttpRequest();

  api.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      totPaginas = data.results.length;
      totPaginas /= 5;
      console.log(totPaginas + '<--');
      let parteEntera = parseInt(totPaginas);
      let parteDecimal = 5*( totPaginas - parteEntera)
      totPaginas = Math.ceil(totPaginas);
      
      let paginas = [] // Numero de Paginas.
      let items = [] // Items por pagina. 
      let cantidaItems = 0;
      for (let i = 0; i < parteEntera; i++) {
          console.log('Pagina actual -->' + i);
          for (let j = i*5; j < (i+1)*5; j++) {
              if(i >= 1){
                  let contador = (i*5)+j;                        
              }
              items.push(data.results[j]);
              cantidaItems ++;
          }
          paginas.push(items);
          items = [];
      }
      items = [];
      for (let i = cantidaItems; i < data.results.length; i++) {
          items.push(data.results[i])
      }
      paginas.push(items);
      console.log(paginas.length);
      globalThis.paginas = paginas;
      globalThis.paginaActua = 0;
      funcionBotones();
      mostrarFilme();
    }
  }
  api.open('GET', url, true);
  api.send();
}

function mostrarFilme(){

  let items = globalThis.paginas[globalThis.paginaActua];
  console.log(items);
  let detalles = '';
  document.querySelector(".tabla").innerHTML = detalles;
  for (let i = 0; i < items.length; i++) {
     detalles += "<tr>" +  
     "<td>" + items[i].title + "</td>" +
     "<td>" + items[i].episode_id + "</td>" + 
     "<td>" + items[i].opening_crawl + "</td>" +
     "<td>" + items[i].director + "</td>" +
     "<td>" + items[i].producer + "</td>" +
     "<td>" + items[i].release_date + "</td>" +
     "</tr>";
  }
  document.querySelector(".tabla").innerHTML = detalles;
  
}

function paginacionNave() {
  valor = document.getElementById("texto3").value;
  let url = `https://swapi.dev/api/starships/?search=`+ valor;
  const api = new XMLHttpRequest();

  api.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      totPaginas = data.results.length;
      totPaginas /= 5;
      console.log(totPaginas + '<--');
      let parteEntera = parseInt(totPaginas);
      let parteDecimal = 5*( totPaginas - parteEntera)
      totPaginas = Math.ceil(totPaginas);
      
      let paginas = [] // Numero de Paginas.
      let items = [] // Items por pagina. 
      let cantidaItems = 0;
      for (let i = 0; i < parteEntera; i++) {
          console.log('Pagina actual -->' + i);
          for (let j = i*5; j < (i+1)*5; j++) {
              if(i >= 1){
                  let contador = (i*5)+j;                        
              }
              items.push(data.results[j]);
              cantidaItems ++;
          }
          paginas.push(items);
          items = [];
      }
      items = [];
      for (let i = cantidaItems; i < data.results.length; i++) {
          items.push(data.results[i])
      }
      paginas.push(items);
      console.log(paginas.length);
      globalThis.paginas = paginas;
      globalThis.paginaActua = 0;
      funcionBotones();
      mostrarNave();
    }
  }
  api.open('GET', url, true);
  api.send();
}

function mostrarNave(){

  let items = globalThis.paginas[globalThis.paginaActua];
  console.log(items);
  let detalles = '';
  document.querySelector(".tabla").innerHTML = detalles;
  for (let i = 0; i < items.length; i++) {
     detalles += "<tr>" +  
     "<td>" + items[i].name + "</td>" +
     "<td>" + items[i].model + "</td>" + 
     "<td>" + items[i].manufacturer + "</td>" +
     "<td>" + items[i].cost_in_credits + "</td>" +
     "<td>" + items[i].length + "</td>" +
     "<td>" + items[i].crew + "</td>" +
     "<td>" + items[i].passengers + "</td>" +
     "<td>" + items[i].cargo_capacity + "</td>" +
     "<td>" + items[i].consumables + "</td>" +
     "</tr>";
  }
  document.querySelector(".tabla").innerHTML = detalles;
  
}

function paginacionVehiculo() {
  valor = document.getElementById("texto4").value;
  let url = `https://swapi.dev/api/vehicles/?search=`+ valor;
  const api = new XMLHttpRequest();

  api.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      totPaginas = data.results.length;
      totPaginas /= 5;
      console.log(totPaginas + '<--');
      let parteEntera = parseInt(totPaginas);
      let parteDecimal = 5*( totPaginas - parteEntera)
      totPaginas = Math.ceil(totPaginas);
      
      let paginas = [] // Numero de Paginas.
      let items = [] // Items por pagina. 
      let cantidaItems = 0;
      for (let i = 0; i < parteEntera; i++) {
          console.log('Pagina actual -->' + i);
          for (let j = i*5; j < (i+1)*5; j++) {
              if(i >= 1){
                  let contador = (i*5)+j;                        
              }
              items.push(data.results[j]);
              cantidaItems ++;
          }
          paginas.push(items);
          items = [];
      }
      items = [];
      for (let i = cantidaItems; i < data.results.length; i++) {
          items.push(data.results[i])
      }
      paginas.push(items);
      console.log(paginas.length);
      globalThis.paginas = paginas;
      globalThis.paginaActua = 0;
      funcionBotones();
      mostrarVehiculo();
    }
  }
  api.open('GET', url, true);
  api.send();
}

function mostrarVehiculo(){

  let items = globalThis.paginas[globalThis.paginaActua];
  console.log(items);
  let detalles = '';
  document.querySelector(".tabla").innerHTML = detalles;
  for (let i = 0; i < items.length; i++) {
     detalles += "<tr>" +  
     "<td>" + items[i].name + "</td>" +
     "<td>" + items[i].model + "</td>" + 
     "<td>" + items[i].manufacturer + "</td>" +
     "<td>" + items[i].cost_in_credits + "</td>" +
     "<td>" + items[i].length + "</td>" +
     "<td>" + items[i].crew + "</td>" +
     "<td>" + items[i].passengers + "</td>" +
     "<td>" + items[i].cargo_capacity + "</td>" +
     "<td>" + items[i].consumables + "</td>" +
     "</tr>";
  }
  document.querySelector(".tabla").innerHTML = detalles;
  
}

function paginacionEspecie() {
  valor = document.getElementById("texto5").value;
  let url = `https://swapi.dev/api/species/?search=`+ valor;
  const api = new XMLHttpRequest();

  api.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      totPaginas = data.results.length;
      totPaginas /= 5;
      console.log(totPaginas + '<--');
      let parteEntera = parseInt(totPaginas);
      let parteDecimal = 5*( totPaginas - parteEntera)
      totPaginas = Math.ceil(totPaginas);
      
      let paginas = [] // Numero de Paginas.
      let items = [] // Items por pagina. 
      let cantidaItems = 0;
      for (let i = 0; i < parteEntera; i++) {
          console.log('Pagina actual -->' + i);
          for (let j = i*5; j < (i+1)*5; j++) {
              if(i >= 1){
                  let contador = (i*5)+j;                        
              }
              items.push(data.results[j]);
              cantidaItems ++;
          }
          paginas.push(items);
          items = [];
      }
      items = [];
      for (let i = cantidaItems; i < data.results.length; i++) {
          items.push(data.results[i])
      }
      paginas.push(items);
      console.log(paginas.length);
      globalThis.paginas = paginas;
      globalThis.paginaActua = 0;
      funcionBotones();
      mostrarEspecie();
    }
  }
  api.open('GET', url, true);
  api.send();
}

function mostrarEspecie(){

  let items = globalThis.paginas[globalThis.paginaActua];
  console.log(items);
  let detalles = '';
  document.querySelector(".tabla").innerHTML = detalles;
  for (let i = 0; i < items.length; i++) {
     detalles += "<tr>" +  
     "<td>" + items[i].name + "</td>" +
     "<td>" + items[i].classification + "</td>" + 
     "<td>" + items[i].designation + "</td>" +
     "<td>" + items[i].average_height + "</td>" +
     "<td>" + items[i].skin_colors + "</td>" +
     "<td>" + items[i].hair_colors + "</td>" +
     "<td>" + items[i].eye_colors + "</td>" +
     "<td>" + items[i].average_lifespan + "</td>" +
     "<td>" + items[i].language + "</td>" +
     "</tr>";
  }
  document.querySelector(".tabla").innerHTML = detalles;
  
}

function botonSiguientePersona() {
  funcionBotones();
  globalThis.paginaActua ++;
  mostrarPersona();
}
function botonAtrasPersona() {
  funcionBotones();
   globalThis.paginaActua --;
   mostrarPersona();
}

function botonSiguientePlaneta() {
  funcionBotones();
  globalThis.paginaActua ++;
  mostrarPlaneta();
}
function botonAtrasPlaneta() {
  funcionBotones();
   globalThis.paginaActua --;
   mostrarPlaneta();
}

function botonSiguienteFilme() {
  funcionBotones();
  globalThis.paginaActua ++;
  mostrarFilme();
}
function botonAtrasFilme() {
  funcionBotones();
   globalThis.paginaActua --;
   mostrarFilme();
}

function botonSiguienteNave() {
  funcionBotones();
  globalThis.paginaActua ++;
  mostrarNave();
}
function botonAtrasNave() {
  funcionBotones();
   globalThis.paginaActua --;
   mostrarNave();
}

function botonSiguienteVehiculo() {
  funcionBotones();
  globalThis.paginaActua ++;
  mostrarVehiculo();
}
function botonAtrasVehiculo() {
  funcionBotones();
   globalThis.paginaActua --;
   mostrarVehiculo();
}

function botonSiguienteEspecie() {
  funcionBotones();
  globalThis.paginaActua ++;
  mostrarEspecie();
}
function botonAtrasEspecie() {
  funcionBotones();
   globalThis.paginaActua --;
   mostrarEspecie();
}

function funcionBotones(){
  siguiente.style.display = 'inline';
  anterior.style.display = 'inline';
  if((globalThis.paginaActua != 0)) {  
      siguiente.disabled=false;
      anterior.disabled=false;
  }
  if (globalThis.paginaActua == (paginas.length-2) || globalThis.paginaActua == (paginas.length)) {
    siguiente.disabled=true;
    anterior.disabled=false;
  }

  if((globalThis.paginaActua == 0)) {  
    siguiente.disabled=false;
    anterior.disabled=true;
}

}