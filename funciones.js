function buscarPorNombre(nombre) {
    return alumnos.filter(alumno => alumno.nombre === nombre);
  }
  
  function buscarPorApellido(apellido) {
    return alumnos.filter(alumno => alumno.apellidos.includes(apellido));
  }
  
  function promedioAlumno(nombre) {
    let alumnoEncontrado = buscarPorNombre(nombre)[0];
    return alumnoEncontrado.promedio();
  }
  
  function promedioGrupo() {
    let suma = 0;
    for (let alumno of alumnos) {
      suma += alumno.promedio();
    }
    return suma / alumnos.length;
  }

  
  function ordenarAlumnosPorCalificacion(ascendente=true) {
    return alumnos.sort((a, b) => {
      if (ascendente) {
        return a.promedio() - b.promedio();
      } else {
        return b.promedio() - a.promedio();
      }
    });
  }