function Login() {
  let username = prompt("Ingrese su nombre de usuario (MÍNIMO 8 CARACTERES)");
  if (username.length < 8) {
    return alert(
      "Tu usuario tiene que tener 8 carácteres mínimo, volvé a intentarlo."
    );
  } else if (username.length > 7) {
        let pin = prompt("Ingrese su PIN (MÍNIMO 6 NÚMEROS)");
        if (pin.length < 6) {
            return alert("Tu PIN tiene estar formado por 6 números");
        }
        else if (pin.length >= 6); {
            alert("Login exitoso")
        }
    }
}

function ejercicioFor() {
    let numero = prompt ("Ingrese un numero del 1 al 10");
    parseInt(numero, 10)
    for (numero; numero > 0; numero--)
    alert("Clickeame " + numero + " veces más" )
}

ejercicioFor()