const button = document.querySelector("#saludar-button");
const nombreInput = document.querySelector("#nombre");
const div = document.querySelector("#resultado-div");

button.addEventListener("click", () => {
  const nombre = nombreInput.value;
  div.innerHTML = `<p>Hola..querido usuario, ${nombre}</p>`;
});
