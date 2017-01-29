/*
alert("también funciona aquí");
document.write("podemos mostrar algo");
console.log("aquí abajo también se ve");
document.getElementById("texto").innerHTML="Este es el segundo texto";
*/
//Sólo una línea



/*
//se pueden separar las variables por un coma. Son variables de tipado dinámico
var x,y,z;
x = 5; //enteros
y = 6.3; //flotante
z = x+y; //flotante

a = number(); //para asignarle valor después

alert(z);
*/



/*
function tuNombreCompleto(nombre, apellido){
  var nombreCompleto = nombre + " " + apellido;
  document.write(nombreCompleto);
  return nombreCompleto;
}

var alumno = tuNombreCompleto("San","Díaz");

alert(alumno);
*/


/*
var miPrimerObjeto = {nombre:"Isela",apellido:"García"};
alert(miPrimerObjeto.nombre);
*/


/*
var persona = "Jorge";
var otraPersona = persona;

persona ="Amanda";

document.write(persona);
document.write(otraPersona);
*/
//-----


/*
var persona = {nombre:"Jorge"};
var otraPersona2 = persona;
//variables tipadas
persona.nombre ="Amanda";

document.write(persona.nombre);
document.write(otraPersona2.nombre);
*/


/*
var fruta = {
  nombre: "mango",
  color: "amarillo",
  dulce: 8,

  queDulceSoy:function(){
    alert("Soy muy dulce");
  }
}

fruta.queDulceSoy();
*/



/*
alert ("retardo");
document.getElementById("primero").innerHTML+="Sandra Díaz";
*/


/*
document.getElementById("botonConClick").onclick=function(){
  //alert("No me clickes, me haces cosquillas");
  document.getElementById("aparecerTexto").innerHTML="Este era un texto fantasma";

  //document.getElementById("aparecerTexto").style.color = "red";
  document.getElementById("aparecerTexto").style.cssText = "color:white; background-color:black;";
}
*/


/*
var nombre = "primeroP";
document.getElementById("priboton").onclick=function(){
  document.getElementById(nombre).innerHTML="Si resultó!";
}
*/


/*
document.getElementById("priboton").onclick=function(){
  var valor = document.getElementById("miInput").value;
  document.getElementById("vacio").innerHTML=valor;
}
*/


//Piedra Papel o Tijera
function generador(){
  var tiro = Math.round(Math.random()*2);
  var ppt;
  if (tiro == 0){
    ppt="piedra";
  } else if (tiro == 1) {
    ppt="papel";
  } else if (tiro == 2) {
    ppt="tijeras";
  } else ppt="error"
  return ppt;
}
function aveces(){
  var proba = Math.round(Math.random()*1);
  var pog;
  if (proba == 1){
    alert("Ganaste!");
  } else {
    alert("Perdiste :(");
  }
}

var opcion = prompt("¿Qué eliges: piedra, papel o tijera?");
if (opcion == generador()) {
  alert("Empate, eres bueno");
} else if (opcion != generador()) {
  aveces();
}
