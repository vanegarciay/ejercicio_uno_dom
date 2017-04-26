function enlace(){
    var numEnlaces = document.getElementsByTagName("a");
    var contenedor = document.getElementById("num_enlaces");
    contenedor.innerHTML = "<br>" + numEnlaces.length;
    }

 //"<p> El total de Enlaces es : </p>" +