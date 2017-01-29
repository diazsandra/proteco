//KEY MAP AIzaSyA2_PqfPRThw7-uftfTOeaSbYfbNNNESJU
$(document).ready(function(){

  var imagenes = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg'];

  $(".imgFondo").css('background-image','url('+imagenes[Math.floor(Math.random()*5)]+')');

  $("#mandar").click(function(){
    var direccion = $("#direc").val();


  //var direccion = "Mieres39Cerrodelaestrella";
  //direccion.trim();
  //document.write(direccion);
  var link = "https://maps.googleapis.com/maps/api/geocode/json?address="+ direccion +"&key=AIzaSyA2_PqfPRThw7-uftfTOeaSbYfbNNNESJU"
  //document.write(link)

  $.ajax({
    dataType: "json",
    url: link,
    success: recibirDatos
  });

  function recibirDatos(json){
    var informacion = json;
    //console.log(informacion.results[0].address_components[6].long_name);
    var codigoPostal= informacion.results[0].address_components[6].long_name;
    //alert(codigoPostal);

    $("#respuesta").append('<div class="offset-m3 col m6 card-panel grey lighten-3"><h6 class="center-align">Tu código postal es: '+codigoPostal+'</h6></div>')
    (codigoPostal);
  }

});

});
