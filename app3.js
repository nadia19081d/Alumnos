var alumnos =[]
const formulario = document.getElementById('form')
const header = document.getElementById('header')
formulario.addEventListener('submit', (evento) => {
	evento.preventDefault();
	const {value: nameInput} = document.getElementById('first-name');
	const {value: lastNameInput} = document.getElementById('last-name');
	const {value: ageInput} = document.getElementById('age');
	
	const estudiante1 = new Estudiante(nameInput, lastNameInput, ageInput);
	alumnos.push(estudiante1);
	// Añadir el estudiante al arreglo
	console.log(estudiante1)
	localStorage.setItem('estudiante1', JSON.stringify(alumnos)); // Guardar el arreglo completo

	window.location.href = "index2.html";
});

if (localStorage.getItem('estudiante1')) {
	const savedStudents = JSON.parse(localStorage.getItem('estudiante1'));
    for (let data of savedStudents) {
			let alumno = new Estudiante(data.nombre, data.apellido, data.edad);
      if (data.materias) alumno.materias = data.materias;
      if (data.calificaciones) alumno.calificaciones = data.calificaciones;
      alumnos.push(alumno);
    }
}

console.log(alumnos)