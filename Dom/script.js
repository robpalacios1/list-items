//Examinando el Dom
//console.dir(document)
//console.log(document.title);
//document.title = "Prueba";
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);

//getElementById()
//console.log(document.getElementById("header-title"));
//var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header");
//console.log(header);
//headerTitle.innerText = "Adios";
//headerTitle.innerHTML = <h3>prueba</h3>

//querySelector
//var header = document.querySelector("#main-header");
//header.style.border = "solid 3px purple";

//var input = document.querySelector("input");
//input.value = "Hola Mundo!!!";

//var submit = document.querySelector('input[type="submit"]');
//submit.value = "Send Message";

//querySelectorAll

//var items = document.querySelectorAll(".list-group-item");
//items[2].style.color = "red";
//console.log(items);

//var titulos = document.querySelectorAll(".title");
//titulos[0].innerText = "Hola";
//console.log(titulos);

//var impar = document.querySelectorAll("li:nth-child(odd)");
//var par = document.querySelectorAll("li:nth-child(even)");
//for (var i = 0; i < impar.length; i++) {
//impar[i].style.backgroundColor = "orange";
//par[i].style.backgroundColor = "red";
//}

//console.log(impar);

//ParentMode

//var itemList = document.querySelector("#items");
//console.log(itemList.parentNode);
//var main = itemList.parentNode;
//main.style.backgroundColor = "#f4f4f4";

//ParentElement

//var itemList = document.querySelector("#items");
//console.log(itemList.parentElement);
//var main = itemList.parentElement;
//main.style.backgroundColor = "#f4f4f4";

//var itemList = document.querySelector("#items");

//childNodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);

//firstChild / firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.innerText = "Roberto";

//lastChild lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = "Palacios";

//var itemList = document.querySelector("#items");

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//document.getElementById("boton").addEventListener("click", clicAqui);

//function clicAqui() {
//document.getElementById("header-title").innerText = "Otro titulo";
//}

//Agregrar un elemento a la lista
var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");
var filtro = document.getElementById("filtro");

//Evento submit del formulario
form.addEventListener("submit", agregarItem);

//Evento click de la lista
lista.addEventListener("click", eliminarItem);

//Evento del teclado en el campo filtro
filtro.addEventListener("keyup", filtrarItems);

//Funcion para agregar un Item a la lista
function agregarItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;

  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  var botonDel = document.createElement("button");
  botonDel.className = "lbtn btn-danger btn-sm float-right eliminar";
  botonDel.appendChild(document.createTextNode("X"));

  li.appendChild(botonDel);
  lista.appendChild(li);
}

//Funcion para eliminar un item de la lista
function eliminarItem(e) {
  if (e.target.classList.contains("eliminar")) {
    if (confirm("Seguro que desea eliminar el elemento?")) {
      var li = e.target.parentElement;
      lista.removeChild(li);
    }
  }
}

//Funcion para filtar elementos de la lista
function filtrarItems(e) {
  var texto = e.target.value.toLowerCase();
  var items = lista.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemNombre = item.firstChild.textContent;
    if (itemNombre.toLowerCase().indexOf(texto) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
