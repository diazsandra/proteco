/*
if (jQuery) {
  alert("Sí tenemos jquery!");
}
*/

//siempre empezar con $
/*
$(".circulo").click(function(){
  alert("Soy el círculo");
});

$("#cuadrado").click(function(){
  alert("Soy un cuadrado");
});

$("div").click(function(){
  alert("Soy un div");
});

$("p").click(function(){
  alert("Soy un párrafo");
});
*/

//Ejemplo para cambiar el iframe
/*
$(".circulo").click(function(){
  //$("p").html("Texto reemplazado");
  //alert($("iframe").attr("src"););
  $("iframe").attr("src","http://edition.cnn.com/");
  $(".circulo").click(function(){
    $("iframe").attr("src","http://www.eluniversal.com.mx/");
  });
});
*/


/*
$("button").click(function(){
    $(".circulo").css({
      'width':'300px',
      'height':'300px'
    }); //para definir un objeto
});
*/
/*
$("button").click(function(){
    $(".circulo").addClass("circulo2"); //para agregar clases
});
*/

/*
$("button").click(function(){
    $(".circulo").fadeOut(4000); //para ocultar
});
*/


$(".circulo").hover(function(){
  $(this).animate({
    'width':'300px',
    'height':'300px'
  },4000);
});
