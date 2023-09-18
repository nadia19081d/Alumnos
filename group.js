var alumnos = []
//let grupoA = new Grupo('A');
//let grupoB = new Grupo('B');
var grupos=[]
//grupos.push(grupoA)
//grupos.push(grupoB)

if(localStorage.getItem("grupos")){
	const savedGroups = JSON.parse(localStorage.getItem("grupos"));
	for(let data of savedGroups){
		let grupo = new Grupo(data.nombreGrupo); 
			console.log(data.alumnos)
			if(data.alumnos) grupo.alumnos = data.alumnos;
			grupos.push(grupo)
			console.log(grupos)
	}
}
if (localStorage.getItem('estudiante1')) {
	const savedStudents = JSON.parse(localStorage.getItem('estudiante1'));
    for (let data of savedStudents) {
			let alumno = new Estudiante(data.nombre, data.apellido, data.edad);
            console.log(data.materia)
			if (data.materia) alumno.materia = data.materia;
			if (data.calificacion) alumno.calificacion = data.calificacion;
    alumnos.push(alumno);
    }
}

const selectGroups = document.getElementById('selectGroup')
function GruposSelect (){
	const selectGroups = document.getElementById('selectGroup')
	selectGroups.innerHTML = '';
	grupos.forEach((grupo,index)=>{
		const grupoOption = document.createElement('option');
		grupoOption.value = index;
		grupoOption.textContent = `${grupo.nombreGrupo}`;
		selectGroups.appendChild(grupoOption)
	})

}


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

function agregarAlumno(){
  const selectAlumno = document.getElementById('selectAlumno');
  const alumnoSeleccionado = alumnos[selectAlumno.value];
  console.log(alumnoSeleccionado)
  const selectGroup = document.getElementById('selectGroup');
	console.log(selectGroup)
	console.log(grupos)
	console.log(selectGroup.value)
  const grupoSeleccionado = grupos[selectGroup.value];
	console.log(grupoSeleccionado)
	grupoSeleccionado.agregarAlumno(alumnoSeleccionado)
	localStorage.setItem('grupos', JSON.stringify(grupos))

}



actualizarDropdownAlumnos()
GruposSelect ()
