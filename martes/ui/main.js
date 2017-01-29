$("#fecha").datepicker();//para poner fecha en el input

$(function(){
  $("#arrastre").draggable(); //arrastra el elemento

  $("#canasta").droppable({
    drop: function(event,ui){
      $(this).addClass("ui-state-highlight").find("p").html("Anotaste una canasta");
    }
  });

});
