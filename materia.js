var alumnos = []
if (localStorage.getItem('estudiante1')) {
	const savedStudents = JSON.parse(localStorage.getItem('estudiante1'));
    for (let data of savedStudents) {
			let alumno = new Estudiante(data.nombre, data.apellido, data.edad);
			if (data.materia) alumno.materia = data.materia;
			if (data.calificacion) alumno.calificacion = data.calificacion;
    alumnos.push(alumno);
    }
}
console.log(alumnos)
function actualizarDropdownAlumnos() {
    const selectAlumno = document.getElementById('selectAlumno');
    selectAlumno.innerHTML = ''; // Limpia el dropdown

    alumnos.forEach((alumno, index) => {
        const option = document.createElement('option');
        option.value = index; // El valor será el índice del alumno en el array
        option.textContent = `${alumno.nombre} ${alumno.apellido}`;
        selectAlumno.appendChild(option);
    });
}

function inscribirMateria() {
    const materia = document.getElementById('materia').value;
    const selectAlumno = document.getElementById('selectAlumno');
    const alumnoSeleccionado = alumnos[selectAlumno.value];

    alumnoSeleccionado.inscribirMateria(materia);

    // Guardar en localStorage (si estás usando esa funcionalidad)
    localStorage.setItem('estudiante1', JSON.stringify(alumnos));
}

actualizarDropdownAlumnos()