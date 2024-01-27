function encriptar(){
  let texto = document.querySelector('#texto').value;
  let textoCifrado = texto.replace(/e/gi, "enter")
                      .replace(/i/gi, "imes")
                      .replace(/a/gi, "ai")
                      .replace(/o/gi, "ober")
                      .replace(/u/gi, "ufat");
  document.querySelector(".txt-encriptado").value = textoCifrado;
  document.querySelector("#texto").value;
}
// let boton1 = document.querySelector(".btn-encriptar"); boton1.onclick = encriptar;

function desencriptar() {
  let texto = document.querySelector('#texto').value;
  let textoCifrado = texto.replace(/enter/gi, "e")
                      .replace(/imes/gi, "i")
                      .replace(/ai/gi, "a")
                      .replace(/ober/gi, "o")
                      .replace(/ufat/gi, "u");
  document.querySelector(".txt-encriptado").value = textoCifrado;
  document.querySelector("#texto").value;
}