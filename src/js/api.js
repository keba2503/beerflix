console.log('hola')

const formularioBuscar = document.querySelector('#search-form');



formularioBuscar.addEventListener('submit', (e) => {
  e.preventDefault();
  // Obtener datos del formulario
  const texto = document.querySelector('#buscador').value;


  console.log(texto)

});