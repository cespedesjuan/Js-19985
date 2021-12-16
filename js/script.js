//* ENTREGABLE NR 5 (OBJETOS) [lo puse en una función para que no se trigeree en el liveserver mientras adjunto la entrega 6!]
function Login() {
    function Usuario (username, password, edad) {
        this.username = username;
        this.password = password;
        this.edad = edad;
    }
    const usuario1 = new Usuario(prompt("Ingresa un usuario"), prompt("Ingresa una contraseña"), prompt("Ingresa tu edad"));

}



// PRIMER ENTREGA FINAL y entrega nr 8

function compraDeEntradas () {
    function Artista (nombre, fecha, horario, costo) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.horario = horario;
        this.costo = costo;
    }
    var seleccionEntrada = prompt("Escriba el número que le corresponde a la banda que desea ver \r\n 1. Mi Amigo Invencible\r\n 2.Las Ligas Menores \r\n 3.Los Besos")
    if (seleccionEntrada === "1") {
        let nuevoArtista = new Artista(nombre = "Mi Amigo Invencible", fecha ="05/01/2022", horario = "20:30 PM", costo = "900$")
        let infoSelec = document.createElement("h2")
        infoSelec.innerHTML = "<h2>¡Usted ha elegido ver a Mi Amigo Invencible el día 5 de Enero del año 2022 a las 20:30"
        document.body.appendChild(infoSelec)
    }
    else if (seleccionEntrada === "2") {
        let nuevoArtista = new Artista(nombre = "Las Ligas Menores", fecha = "15/01/2022", horario = "21:30 PM", costo = "900$")
        let infoSelec = document.createElement("h2")
        infoSelec.innerHTML = "<h2>¡Usted ha elegido ver a Las Ligas Menores el día 15 de Enero del año 2022 a las 21:30"
        document.body.appendChild(infoSelec)
    }
    else if (seleccionEntrada === "3") {
        let nuevoArtista = new Artista(nombre = "Los Besos", fecha = "18/01/2022", horario = "17:00 PM", costo = "600$")
        let infoSelec = document.createElement("h2")
        infoSelec.innerHTML = "<h2>¡Usted ha elegido ver a Los Besos el día 18 de Enero del año 2022 a las 17:00"
        document.body.appendChild(infoSelec);
    }
    else if (seleccionEntrada > 3 || seleccionEntrada < 1 ) {
        return console.log("Ingrese un numero válido")
    }
    let boton1 = document.getElementById("boton1");
    boton1.addEventListener("click",() => {
        let boton = document.createElement("h3")
        boton.innerHTML = "<h3> La dirección del predio es Tronador 4227<h3>"
        document.body.appendChild(boton);
        boton1.removeEventListener("click", "boton1")
    })
    }

compraDeEntradas()

