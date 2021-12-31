//Ejecuta la funcion depues que se carga el HTML COMPLETAMENTE
window.onload = iniciar;

function iniciar (){
    //BUSCA EL ELMENTO EN HTML
   var btnCalcular =  document.getElementById("btnCalcular");
   //CUANDO LE DEN CLICK LLAMA A LA FUNCION
  btnCalcular.addEventListener("click", clickBtnCalcular)
}
//ir la palabra reservada click
function clickBtnCalcular() {
    var txtPeso =  document.getElementById("txtPeso");
    var peso = txtPeso.value
    var txtAltura =  document.getElementById("txtAltura");
    var altura= txtAltura.value

    var masacorporal = peso/ (altura * altura)
    alert("su masa es: "+ Math.round(masacorporal))

}