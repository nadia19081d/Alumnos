class Estudiante {
	constructor(nombre,apellido,edad){
			this.nombre= nombre;
			this.apellido= apellido;
			this.edad = edad; 
			this.calificacion = {};
			this.materia = [];
			this.grupo = undefined;
	}
	
	inscribirMateria(materia) {
	this.materia.push(materia);
	}

	asignarCalificacion(materia, calificacion) {
	this.calificaciones[materia] = calificacion;
	}

	promedio() {
	let suma = 0;
	let materias = Object.keys(this.calificaciones);
	for (let materia of materias) {
		suma += this.calificaciones[materia];
	}
	return suma / materias.length;
}

}
