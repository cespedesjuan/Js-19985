// SEGUNDA ENTREGA FINAL + JQUERY (EVENTOS Y SELECTORES)    
function compraDeEntradas () {
    function Artista (nombre, fecha, horario, costo) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.horario = horario;
        this.costo = costo;
    }
    $("#formBanda").submit(function (e) {
        e.preventDefault();
       let seleccionEntrada = $("#banda").val();
       if (seleccionEntrada === "1") {
           let nuevoArtista = new Artista(nombre = "Mi Amigo Invencible", fecha ="05/01/2022", horario = "20:30 PM", costo = "900$");
           $("#formBanda").remove()
           $("table").remove();
           $("body").append(`<h2>¡Usted ha elegido ver a ${nuevoArtista.nombre} el día 5 de Enero del año 2022 a las 20:30<h2>`)
           $("body").append("<div class='botonDiv1'><button id='boton1' class='boton'>DIRECCION DEL LUGAR</button></div>");
           $("body").append("<div class='botonDiv2'><button id='boton2' class='boton'>UBICACIÓN DEL LUGAR</button></div>");
           $("body").append("<div style='display: none' class='alert alert-success' role='alert'>  Compra realizada con éxito!</div>");
           sessionStorage.setItem("banda", "Mi Amigo Invencible")
        }
        else if (seleccionEntrada === "2") {
            let nuevoArtista = new Artista(nombre = "Las Ligas Menores", fecha = "15/01/2022", horario = "21:30 PM", costo = "900$")
            $("#formBanda").remove()
            $("table").remove();
            $("body").append("<h2>¡Usted ha elegido ver a Las Ligas Menores el día 15 de Enero del año 2022 a las 21:30</h2>")
            $("body").append("<div class='botonDiv1'><button id='boton1' class='boton'>DIRECCION DEL LUGAR</button></div>");
            $("body").append("<div class='botonDiv2'><button id='boton2' class='boton'>UBICACIÓN DEL LUGAR</button></div>");
            $("body").append("<div style='display: none' class='alert alert-success' role='alert'>  Compra realizada con éxito!</div>")
            sessionStorage.setItem("banda", "Las Ligas Menores")   
        }
        else if (seleccionEntrada === "3") {
            let nuevoArtista = new Artista(nombre = "Los Besos", fecha = "18/01/2022", horario = "17:00 PM", costo = "600$");
            $("#formBanda").remove();
            $("table").remove();
            $("body").append("<h2 style='display: none'>¡Usted ha elegido ver a Los Besos el día 18 de Enero del año 2022 a las 17:00</h2>");
            $("body").append("<div class=' botonDiv1'><button id='boton1' class='boton'>DIRECCION DEL LUGAR</button></div>");
            $("body").append("<div class='botonDiv2'><button id='boton2' class='boton'>UBICACIÓN DEL LUGAR</button></div>");
            $("body").append("<div style='display: none' class='alert alert-success' role='alert'>  Compra realizada con éxito!</div>");
            sessionStorage.setItem("banda", "Los Besos");
        }
        $(".alert-success").slideDown("slow", function(){
            $(".alert-success").delay(2000)
            $(".alert-success").slideUp(500)
        })
        $("#boton1").on("click", function() {
            $(".botonDiv1").append("<p style='display: none' class='textoDireccion'>Tronador 2476</p>")
            $("#boton1").animate({
                width:"13%",
            })
            .delay(200)
            $("#boton1").animate({
                width:"15%",
            })
            $(".textoDireccion").fadeIn("slow")
            $("#boton1").animate({
                left:400, 
            })
        })

    })
}
compraDeEntradas()