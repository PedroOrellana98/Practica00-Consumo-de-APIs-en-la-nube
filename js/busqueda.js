var el = document.querySelector('#boton');
if (el) {
  el.addEventListener('click', function(){
    obtenerDatos();
  });
}

function obtenerDatos() {
valor = parseInt(document.getElementById("texto").value);

if (isNaN(valor)) {
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
}else if (!isNaN(valor)){

  let url = `https://swapi.dev/api/people/`+ valor + `/`;
  const api = new XMLHttpRequest();
  api.open('GET', url, true);
  api.send();
  api.onreadystatechange = function (){
    if (this.status == 200 && this.readyState == 4){
      let datos = JSON.parse(this.responseText);
      /*console.log(datos.result);
      let film = document.querySelector('#film');
      film.innerHTML = '';*/
      let people = document.querySelector('#people');
      people.innerHTML = '';
      
      people.innerHTML += `<td>${datos.name}</td>`+
      `<td>${datos.height}</td>` +
      `<td>${datos.mass}</td>` +
      `<td>${datos.hair_color}</td>` +
      `<td>${datos.skin_color}</td>` +
      `<td>${datos.eye_color}</td>` +
      `<td>${datos.birth_year}</td>` +
      `<td>${datos.gender}</td>`
      /*for (let i of datos.result) {
       film.innerHTML += `<td>${i.title}</td>`
      }*/
      }
    }
  }
}
