function limpiar() {
  var pantalla = document.getElementById("pantalla");
  pantalla.setAttribute("value", "");
}
function escribir(simbolo) {
  var pantalla = document.getElementById("pantalla");
  datosDePantalla = pantalla.getAttribute("value");
  if (datosDePantalla == null) {
    datosDePantalla = "";
  }
  datosDePantalla = datosDePantalla + simbolo;
  pantalla.setAttribute("value", datosDePantalla);
}
function calcular() {
  var pantalla = document.getElementById("pantalla");
  var datosDePantalla = pantalla.getAttribute("value");
  console.log(datosDePantalla);
  try {
    var resultado = eval(datosDePantalla);
  } catch (error) {
    alert("No se ha podido procesar los siguientes datos: " + datosDePantalla);
    pantalla.setAttribute("value", "");
    document.getElementById("botones").style.backgroundColor = "black";
    return;
  }
  pantalla.setAttribute("value", resultado);
}
