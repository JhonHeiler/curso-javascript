window.onload = iniciar;


function iniciar(){

   let btnCargar =document.getElementById("btnCargar");
   btnCargar.addEventListener("click", clickBtnCargar)
}

async function cargarUrl(url){
    let response = await fetch(url);
    return response.json();
   
}
async function clickBtnCargar(){
let fecha=document.getElementById('inputFecha').value;

let pais = document.getElementById('selectPais').value;
url=`https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`;

 let json= await cargarUrl(url);

 console.log(json)

 let estadisticas = json.dates[fecha].countries[pais];
 console.log(estadisticas)

 document.getElementById('sas').innerHTML =estadisticas.today_confirmed
}