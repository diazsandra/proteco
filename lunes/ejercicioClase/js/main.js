document.getElementById("inicia").onclick=function(){
  function colorRandom(){
      var posibilidades = "0123456789ABCDEF";
      var color = "#";

      for (var i = 0; i < 6; i++) {
        color += posibilidades[Math.floor(Math.random()*15)];
      }
      return color;
  }

  function alturaRandom() {
    var resultado = Math.floor(Math.random()*350);
    return resultado;
  }

  function largoRandom(){
    var resultado = Math.floor(Math.random()*90);
    return resultado;
  }

  var altura = alturaRandom();
  var largo = largoRandom();
  var randomColor = colorRandom();

  document.getElementById("objetivo").style.cssText="background-color:"+randomColor+";left:"+largo+"%;top:"+altura+"px;";

  document.getElementById("objetivo").onclick=function(){
    alert("bien!");
  }

}
