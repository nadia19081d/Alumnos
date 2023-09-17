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



const main = document.getElementById('contenedor')
console.log(alumnos)

const table = document.createElement("table")
table.innerHTML = `

<thead>
	<th>Name</th>
	<th>Last name</th>
	<th>Age</th>
	
	<th>Course</th>
	<th>Grade</th>
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
			const tableData = tableRows[i].getElementsByTagName("td")[0];
			const tableDataApellido = tableRows[i].getElementsByTagName("td")[1];
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


/*function grades(grade, estudiante, index_de_estudiante_en_saved_students){
	
	const select = document.createElement("select")
	const defaultOption = document.createElement('option')
	defaultOption.value = 0
	select.appendChild(defaultOption)
	
	
	grade.forEach(gradeForStudnet=> {
		const option = document.createElement("option")
		option.value= gradeForStudnet
		option.text = gradeForStudnet
		select.appendChild(option)
		
	})
	select.value = estudiante.calificacion;
	select.addEventListener("change", function() {
		console.log('event')
		const opcionSeleccionada = select.options[select.selectedIndex];
		const textoSeleccionado = opcionSeleccionada.textContent;
		
		console.log(`El estudiante ${estudiante.nombre} tiene la calificacion de  ${textoSeleccionado}`);
		console.log(index_de_estudiante_en_saved_students)
		console.log(alumnos)
		const currentStudent = alumnos[index_de_estudiante_en_saved_students];
		
		currentStudent.calificacion = textoSeleccionado;
		console.log(currentStudent)
		console.log(alumnos)
		localStorage.setItem('estudiante1', JSON.stringify(alumnos));	
	});
	return select 
	
	
	
} */
function mostrar_estudiantes(estudiantes) {
	estudiantes.sort((estudiante1, estudiante2) => estudiante1.nombre.localeCompare(estudiante2.nombre, 'es', { sensitivity: 'base' }));
	estudiantes.forEach((student, index) => {
		// const gropus_saved = JSON.parse(localStorage.getItem('groups'));
		
		const nombreTD = document.createElement('td')
		nombreTD.innerHTML = student.nombre
		const appellidoTD = document.createElement('td')
		appellidoTD.innerHTML = student.apellido
		const edadTD = document.createElement('td')
		edadTD.innerHTML = student.edad
		const materiaTD = document.createElement('td')
		materiaTD.innerHTML = student.materia
		const gradesTD = document.createElement('td')
		gradesTD.innerHTML = student.calificacion
		const groupTD = document.createElement('td')
		groupTD.innerHTML = student.grupo;
		
		const tableRow = document.createElement("tr")
		tableRow.appendChild(nombreTD)
		tableRow.appendChild(appellidoTD)
		tableRow.appendChild(edadTD)
		tableRow.appendChild(materiaTD)
		tableRow.appendChild(gradesTD)
		tableBody.appendChild(tableRow)

	})

};
	
		searchBar();
		mostrar_estudiantes(alumnos)
		
/* function groups(group, estudiante, index_de_estudiante_en_saved_students){
	const select = document.createElement("select")

	const defaultOption = document.createElement('option')

	defaultOption.value = 0

	select.appendChild(defaultOption)
	
	group.sort((group1, group2) => group1.localeCompare(group2, 'es', { sensitivity: 'base' }));
	
	group.forEach(grupo=> {
		const option = document.createElement("option")
		option.value= grupo
		option.text = grupo
		select.appendChild(option)
	})
	select.value = estudiante.curso;
	
	select.addEventListener("change", function() {
		console.log('event')
		const opcionSeleccionada = select.options[select.selectedIndex];
		const textoSeleccionado = opcionSeleccionada.textContent;
		
		console.log(`Al estudiante ${estudiante.nombre} se le cambio al grupo ${textoSeleccionado}`);
		console.log(index_de_estudiante_en_saved_students)
		console.log(alumnos)
		const currentStudent = alumnos[index_de_estudiante_en_saved_students];
		
		currentStudent.curso = textoSeleccionado;
		currentStudent.group = undefined;
		console.log(currentStudent)
		console.log(alumnos)
		localStorage.setItem('estudiante1', JSON.stringify(alumnos));
	});

	return select
}
*/








