var nameplayer = prompt('Introduzca su nombre','');


//Todo el módulo se encuentra dentro de una función
//conocida como función inmediata, en este caso
//también anónima que provoca que todo se ejecute
//de una vez.
(function(){
    if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else{
    window.attachEvent("onload", iniciar);
    }
    //Variables utilizadas para interactuar
    //con los elementos img presentes en la página
    var imagenDado1;
    var imagenDado2;
    var imagenDado3;
    //Registrar componentes de escucha del evento clic
    //al presionar el botón denominado botonTirar y obtener
    
    //todos los elementos img presentes en el documento
    function iniciar(){
    var boton = document.getElementById("botonTirar");
    if(boton.addEventListener){
    boton.addEventListener("click", tirarDados,
    false);
    }
    else{
    boton.attachEvent("onclick", tirarDados);
    }
    imagenDado1 = document.getElementById("dado1");
    imagenDado2 = document.getElementById("dado2");
    imagenDado3 = document.getElementById("dado3");
    }
    function mostrartabla(){
        var resultados = document.getElementById("enviar");
        if(resultados.addEventListener){
            resultados.addEventListener("click", function(){
                jugador.mostrar();
            }, false);
        }
        else{
            resultados.attachEvent("onclik", function(){
                jugador.mostrar();
            });
        }
    }

    function tirarDados(){
    establecerImagen(imagenDado1);
    establecerImagen(imagenDado2);
    establecerImagen(imagenDado3);
    }
    function establecerImagen(imgDado){
    var valorDado = Math.floor(1+Math.random()*6);
    //Estableciendo el atributo src de la imagen
    imgDado.setAttribute("src", "img/dice" + valorDado
    + ".png");
    //Estableciendo el atributo alt de la imagen
    imgDado.setAttribute("alt", "Imagen del dato con el valor " + valorDado);
    }

    function intentosDado(intentos){
        var intentos = 3;
        var boton = 0;
        for(boton; boton<intentos; boton++){
            tirarDados();

        if(boton>3){
            alert('Sobrepaso los intentos');
            return 0;
        }
        }
    }

    var jugador = new Object();
    //Propiedades del objeto
    jugador.nombre = nameplayer;
    jugador.puntuaje = "";
    jugador.fecha = "";

    //Métodos del objeto
    jugador = function( namejudador, puntuaje, fecha){
	jugador.nombre = namejugador;
    jugador.puntuaje = puntuaje;
    jugador.fecha = fecha;
    }

    jugador.mostrar = function(){
        mostrartabla();
        var tabla = "";
        var info = document.getElementById('infoju');
        tabla += "<table class=\"carinfo\">\n";
        tabla += "<thead>\n\t<tr>\n";
        tabla += "\t\t<th colspan=\"2\">Datos del Jugador</th>\n";
        tabla += "\t</tr>\n</thead>\n";
        tabla += "<tbody>\n\t";
        tabla += "\t<tr>\n\t\t<td>Jugador: </td>\n";
        tabla += "\t\t<td>" + jugador.nombre + "</td>\n\t</tr>\n";
        tabla += "\t<tr>\n\t\t<td>Puntuaje: </td>\n";
        tabla += "\t\t<td>" + jugador.puntuaje + "</td>\n\t</tr>\n";
        tabla += "\t<tr>\n\t\t<td>Fecha: </td>\n";
        tabla += "\t\t<td>" + jugador.fecha + "</td>\n\t</tr>\n";
        tabla += "\t</tbody>\n</table>\n";
        info.innerHTML = tabla;
    }
    })();