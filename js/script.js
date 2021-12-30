// SEGUNDA ENTREGA FINAL + JQUERY (EVENTOS Y SELECTORES)    

function compraDeEntradas () {
    function Artista (nombre, fecha, horario, costo) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.horario = horario;
        this.costo = costo;
    }
    var seleccionEntrada = prompt("Escriba el número que le corresponde a la banda que desea ver \r\n 1. Mi Amigo Invencible\r\n 2.Las Ligas Menores \r\n 3.Los Besos");
    if (seleccionEntrada === "1") {
        let nuevoArtista = new Artista(nombre = "Mi Amigo Invencible", fecha ="05/01/2022", horario = "20:30 PM", costo = "900$");
        $("body").append("<header><h1>Compra de entradas</h1></header>");
        $("body").append("<h2>¡Usted ha elegido ver a Mi Amigo Invencible el día 5 de Enero del año 2022 a las 20:30<h2>")
        $("body").append("<div><button id='boton1'>DIRECCION DEL LUGAR</button></div>");
        $("body").append("<div class='alert alert-success' role='alert'>  Compra realizada con éxito!</div>");
        console.log("seleccionEntrada")
        sessionStorage.setItem("banda", "Mi Amigo Invencible")
    }
    else if (seleccionEntrada === "2") {
        let nuevoArtista = new Artista(nombre = "Las Ligas Menores", fecha = "15/01/2022", horario = "21:30 PM", costo = "900$")
        $("body").append("<header><h1>Compra de entradas</h1></header>");
        $("body").append("<h2>¡Usted ha elegido ver a Las Ligas Menores el día 15 de Enero del año 2022 a las 21:30")
        $("body").append("<div><button id='boton1'>DIRECCION DEL LUGAR</button></div>");
        $("body").append("<div class='alert alert-success' role='alert'>  Compra realizada con éxito!</div>")
        sessionStorage.setItem("banda", "Las Ligas Menores")   
    }
    else if (seleccionEntrada === "3") {
        let nuevoArtista = new Artista(nombre = "Los Besos", fecha = "18/01/2022", horario = "17:00 PM", costo = "600$");
        $("body").append("<header><h1>Compra de entradas</h1></header>");
        $("body").append("<h2>¡Usted ha elegido ver a Los Besos el día 18 de Enero del año 2022 a las 17:00<h2>");
        $("body").append("<div><button id='boton1'>DIRECCION DEL LUGAR</button></div>");
        $("body").append("<div class='alert alert-success' role='alert'>  Compra realizada con éxito!</div>");
        sessionStorage.setItem("banda", "Los Besos");
    }
}
compraDeEntradas()