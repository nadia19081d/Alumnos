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

var grupos=[]

if(localStorage.getItem("grupos")){
	const savedGroups = JSON.parse(localStorage.getItem("grupos"));
	for(let data of savedGroups){
		let grupo = new Grupo(data.nombreGrupo); 
			console.log(data.alumnos)
			if(data.alumnos) {

				
				const alumnosComoClase = data.alumnos.map(alumno => {
					const alumnoClase = new Estudiante(alumno.nombre, alumno.apellido, alumno.edad)
					alumnoClase.calificacion = alumno.calificacion
					alumnoClase.materia = alumno.materia
					return alumnoClase
				})
				
				console.log('clase alumnos')
				console.log(alumnosComoClase)
				grupo.alumnos = alumnosComoClase
			}
			grupos.push(grupo)
	}
}
console.log("Grupos")
console.log(grupos)

const main = document.getElementById('contenedor')
console.log(alumnos)

const table = document.createElement("table")
table.innerHTML = `

<thead>
	<th>Name</th>
	<th>Last name</th>
	<th>Age</th>
	
	<th>Assignatures</th>
	<th id ="average">Average</th>
</thead>
`


function cambia(){
	//Vamor a tomar la cosa que se seleciono en el selector ya sea el fullname o grupo
	let estudiante = select.estudiante[select.estudiante.selectIndex].value
	if(estudiante !=0){
		//Esta definido el estudiante

	}
}
const tableBody = document.createElement("tbody")

main.appendChild(table)
table.appendChild(tableBody)
function searchBar() {
	const input = document.getElementById("myInput");
	const filter = input.value.toUpperCase();
	const tableRows = tableBody.getElementsByTagName("tr");
	

	for (let i = 0; i < tableRows.length; i++) {
			const tableData = tableRows[i].getElementsByTagName("td")[1];
			const tableDataApellido = tableRows[i].getElementsByTagName("td")[2];
			if (tableData || tableDataApellido) {
					const txtValue = tableData.textContent || tableData.innerText;
					const txtValueApellido = tableDataApellido.textContent || tableDataApellido.innerText;
					if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValueApellido.toUpperCase().indexOf(filter) > -1 ) {
							tableRows[i].style.display = "";
					} else {
							tableRows[i].style.display = "none";
					}
			}
	}
}

	
		searchBar();

grupos.forEach(grupo => {
	grupo.alumnos.sort((estudiante1, estudiante2) => estudiante1.nombre.localeCompare(estudiante2.nombre, 'es', { sensitivity: 'base' }));
	grupo.alumnos.forEach(alumno => {
			const tableRow = document.createElement("tr");
			
			const groupTD = document.createElement('td');
			groupTD.innerHTML =  grupo.nombreGrupo;

			const nombreTD = document.createElement('td');
			nombreTD.innerHTML = alumno.nombre;

			const appellidoTD = document.createElement('td');
			appellidoTD.innerHTML = alumno.apellido;

			const edadTD = document.createElement('td');
			edadTD.innerHTML = alumno.edad;

			const materiaTD = document.createElement('td');
			materiaTD.innerHTML = alumno.materia.join(", ");

			const promedioTD = document.createElement('td');
			promedioTD.innerHTML = alumno.promedio()
			

			tableRow.appendChild(groupTD);
			tableRow.appendChild(nombreTD);
			tableRow.appendChild(appellidoTD);
			tableRow.appendChild(edadTD);
			tableRow.appendChild(materiaTD);
			tableRow.appendChild(promedioTD);

			tableBody.appendChild(tableRow);
	});
	
});

const averageButton = document.getElementById("average")
				
averageButton.onclick = function() {
	// Limpiar la tabla primero

	tableBody.innerHTML = "";

	// Ordenar los alumnos por promedio
	alumnos.sort((a, b) => a.promedio() - b.promedio());

	alumnos.forEach(alumno => {
			const tableRow = document.createElement("tr");
			const nombreTD = document.createElement('td');
			nombreTD.innerHTML = alumno.nombre;

			const appellidoTD = document.createElement('td');
			appellidoTD.innerHTML = alumno.apellido;

			const edadTD = document.createElement('td');
			edadTD.innerHTML = alumno.edad;

			const materiaTD = document.createElement('td');
			materiaTD.innerHTML = alumno.materia.join(", ");

			const promedioTD = document.createElement('td');
			promedioTD.innerHTML = alumno.promedio()
			
			tableRow.appendChild(nombreTD);
			tableRow.appendChild(appellidoTD);
			tableRow.appendChild(edadTD);
			tableRow.appendChild(materiaTD);
			tableRow.appendChild(promedioTD);

			tableBody.appendChild(tableRow);
	});
}
