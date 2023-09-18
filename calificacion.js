var alumnos = []
if (localStorage.getItem('estudiante1')) {
	const savedStudents = JSON.parse(localStorage.getItem('estudiante1'));
    for (let data of savedStudents) {
			let alumno = new Estudiante(data.nombre, data.apellido, data.edad);
			if (data.materia) alumno.materia = data.materia;
            console.log(data.materia)
			if (data.calificacion) alumno.calificacion = data.calificacion;
    alumnos.push(alumno);
    }
}
console.log(alumnos)
function actualizarDropdownAlumnos() {
    const selectAlumno = document.getElementById('selectAlumno');
    const selectSignature = document.getElementById('selectSignature')
    selectAlumno.innerHTML = ''; // Limpia el dropdown

    alumnos.forEach((alumno, index) => {
        const option = document.createElement('option');
        option.value = index; // El valor será el índice del alumno en el array
        option.textContent = `${alumno.nombre} ${alumno.apellido}`;
        selectAlumno.appendChild(option);
    });
    actualizarDropdownMaterias(0)
}

function actualizarDropdownMaterias(indexAlumno) {
    const selectSignature = document.getElementById('selectSignature');
    selectSignature.innerHTML = ''; // Limpia el dropdown

    const materiasEstudiante = alumnos[indexAlumno].materia;
    materiasEstudiante.forEach((materia, index) => {
        const materiaOption = document.createElement('option');
        materiaOption.value = index;
        materiaOption.textContent = materia;
        selectSignature.appendChild(materiaOption);
    });
}
function calificacion() {
    const calificacion = parseInt(document.getElementById('calificacion').value);
    const selectAlumno = document.getElementById('selectAlumno');
    const alumnoSeleccionado = alumnos[selectAlumno.value];
    console.log(alumnoSeleccionado)
    const selectSignature = document.getElementById('selectSignature');
    const materiaSeleccionada = alumnoSeleccionado.materia[selectSignature.value];
    console.log(materiaSeleccionada)

    alumnoSeleccionado.asignarCalificacion(materiaSeleccionada, calificacion);

    // Guardar en localStorage (si estás usando esa funcionalidad)
    localStorage.setItem('estudiante1', JSON.stringify(alumnos));
}
document.getElementById('selectAlumno').addEventListener('change', (e) => {
    const indexAlumno = e.target.value;
    actualizarDropdownMaterias(indexAlumno);
});

actualizarDropdownAlumnos()