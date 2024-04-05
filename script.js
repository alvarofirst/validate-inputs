// Expresiones regulares de email y  nombre -> (adicional)
let patternEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
let patterName = /^[a-zA-Z]+$/;

function sendData(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // se validan los campos y si son true ambos se muestra la alerta 👍
  if (validateName(name) && validateEmail(email)) {
    alert("Datos validos! ➡️➡️➡️👍👍");
  }
}

/*
    Se validan los datos por medio de las expressiones regualres
    si no coincicen con la expresion se muestra la alerta correspodiente 
 */

function validateName(name) {
  let isValidName = patterName.test(name);

  if (!isValidName) {
    return alert(" Error, ingresa  un nombre valido ");
  }
  return true;
}

function validateEmail(email) {
  let isValidEmail = patternEmail.test(email);

  console.log(isValidEmail);
  if (!isValidEmail) {
    return alert(" Error, ingresa  un email valido ");
  }
  return true;
}
