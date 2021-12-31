window.onload = iniciar;
function iniciar() {
    //boton Agregar escucha el click
    var btbAgregar = document.getElementById("btbAgregar");
    btbAgregar.addEventListener("click", clickBtnAgregar)
    //renderizar la nota


     //boton borrar escucha el click
     var btnBorrarNotas = document.getElementById("btnBorrarNotas");
     btnBorrarNotas.addEventListener("click", clickBtnBorrar)
     //renderizar la nota
    mostrarNotas()
}

function clickBtnBorrar() {
    localStorage.clear();
    mostrarNotas()
}

function clickBtnAgregar() {
    //traemos lo que hay en txtNota
    var Nota = document.getElementById("txtNota").value;

    var notas = [];
    if (localStorage.notas){
        notas = JSON.parse(localStorage.notas); 
    }
    notas.push(Nota);
    localStorage.notas = JSON.stringify(notas); //tranformamos en texto
    // lo asignamos al localStorage
   /*  localStorage.nota = Nota; */
    mostrarNotas()
}

function mostrarNotas(){
    // trae el Div notas
    var divNota= document.getElementById("divNotas");
    //le asina las notas desde el localStorage
    var notas = [];
    if (localStorage.notas){
        var notas = JSON.parse(localStorage.notas);  // lo convertimos nuevamente en un arrreglo
    }
  
    var html = "";
    for (var nota of notas) {
        html += nota + "<br/>"
    }
    divNota.innerHTML =  html;
}