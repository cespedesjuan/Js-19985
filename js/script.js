let username = prompt("Ingrese su username (MÍNIMO 8 CARACTERES)");
if (username.length < 8) {
    alert("Tu usuario debe contener mas de 8 caracteres, vuelva a intentar")
    alert("Login fallido, vuelva a intentar")
}
else if (username.length > 7) {
    let pin = prompt("Ingrese su PIN (6 O MÁS NUMEROS UNICAMENTE)");
    if (pin.length < 6) {
        alert("Tu PIN debe contener más de 6 números")
        alert("Login fallido, vuelva a intentar")
    }
    else if (pin.length > 5) {
        alert("Login exitoso")
    }
}