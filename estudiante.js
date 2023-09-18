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
	this.calificacion[materia] = calificacion;
	}

	promedio() {
	let suma = 0;
	let materias = Object.keys(this.calificacion);
	for (let materia of materias) {
		suma += this.calificacion[materia];
	}
	return suma / materias.length;
}

}

class Grupo {
    constructor(nombreGrupo) {
        this.nombreGrupo = nombreGrupo;
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        if (alumno instanceof Estudiante) {
            this.alumnos.push(alumno);
        } else {
            console.error('El objeto proporcionado no es una instancia de Estudiante');
        }
    }
}
