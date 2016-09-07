window.addEventListener("load", function() {
   var button = document.getElementById("calcular");
   button.addEventListener("click", function() {
        var segundos = parseInt(document.getElementById("segundos").value);
      setInterval (changeColor, 3000);
    });
    function changeColor() {
       
       var colorHex = "#"+Math.floor(Math.random()*16777215).toString(16);
       document.body.style.backgroundColor = colorHex;

    }
});