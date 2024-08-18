const button = document.querySelector("#saludar-button");
const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const div = document.querySelector("#resultado-div");

button.addEventListener("click", () => {
  const nombre = nombreInput.value;
  const genero = generoSelect.value;
  let saludo = `Hola...querid@, ${nombre}`;

  if (genero === "masculino") {
    saludo = `Hola, Señor ${nombre}`;
  } else if (genero === "femenino") {
    saludo = `Hola, Señora ${nombre}`;
  }

  div.innerHTML = `<p>${saludo}</p>`;
});
