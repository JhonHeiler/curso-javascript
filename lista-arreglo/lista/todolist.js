//Ejecuta la funcion depues que se carga el HTML COMPLETAMENTE
window.onload = iniciar;
var list_tarea = []
function iniciar (){
    //BUSCA EL ELMENTO EN HTML
   var btnAgregar =  document.getElementById("btnAgregar");
   //CUANDO LE DEN CLICK LLAMA A LA FUNCION
   btnAgregar.addEventListener("click", clickBtnbtnAgregar)
}
//ir la palabra reservada click
function clickBtnbtnAgregar() {
    var txtTarea =  document.getElementById("txtTarea");
    var tarea= txtTarea.value
    list_tarea.push(tarea);

    //console.log(list_tarea)
   mostrarTareas();
}
function mostrarTareas(){
    var listado =  document.getElementById("listado");
    var html= "";
    for(var i=0; i<list_tarea.length;i++){
        html+= list_tarea + "<br/>"
        
   }
   listado.innerHTML=html;
}