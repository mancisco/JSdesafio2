const validPass = (frmPassword) => {
    let dig1 = frmPassword.dig1.value;
    let dig2 = frmPassword.dig2.value;
    let dig3 = frmPassword.dig3.value;
    console.log(dig1, dig2, dig3);
    let pass = dig1 + dig2 + dig3;
    console.log(pass);
    if (pass === "911") {
        alert("password 1 correcto");
        return true;
    }
    console.log(pass);
    if (pass === "714") {
        alert("password 2 correcto");
        return true;
    }
    alert("Contraseña incorrecta");
    return false;
}
