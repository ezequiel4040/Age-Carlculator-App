// Seleccionamos el formulario y los elementos de texto para mostrar los resultados
const form = document.querySelector('form');
const textYear = document.querySelector('#years');
const textMonth = document.querySelector('#months');
const textDay = document.querySelector('#days');

// Añadimos un evento 'submit' al formulario
form.addEventListener('submit', (e) => {
  // Prevenimos el comportamiento por defecto del formulario (recargar la página)
  e.preventDefault();

  // Obtenemos los valores de día, mes y año del formulario
  const dayValue = form.DD.value;
  const monthValue = form.MM.value;
  const yearValue = form.YYYY.value;
  
  // Creamos un objeto Date con la fecha de nacimiento
  const fechaNacimiento = new Date(yearValue, monthValue, dayValue); 
  // Obtenemos la fecha actual
  const fechaActual = new Date();

  // Calculamos la edad usando la función calcularEdad
  const result = calcularEdad(fechaNacimiento, fechaActual);
  // Mostramos los resultados en los elementos de texto correspondientes
  textYear.textContent = result.year;
  textMonth.textContent = result.month;
  textDay.textContent = result.day;
});

// Función para calcular la edad
function calcularEdad(fechaNacimiento, fechaActual) {
  // Calculamos la diferencia en años, meses y días
  let year = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  let month = fechaActual.getMonth() - fechaNacimiento.getMonth();
  let day = fechaActual.getDate() - fechaNacimiento.getDate();

  // Ajustamos los días y meses si es necesario
  if (day < 0) {
      month--;
      day += new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
  }
  
  if (month < 0) {
      year--;
      month += 12;
  }
  
  // Devolvemos un objeto con los años, meses y días calculados
  return {year, month, day};
}



