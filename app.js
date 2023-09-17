const saveStudents = JSON.parse(localStorage.getItem('estudiante1'));
var newArr=saveStudents

const formulario = document.getElementById('form')
const header = document.getElementById('header')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    const {value: nameInput} = document.getElementById('first-name')
    const {value: lastNameInput} = document.getElementById('last-name')
    const {value: ageInput} = document.getElementById('age')
    const estudiante1 = new Estudiante( nameInput, lastNameInput, ageInput);
console.log(estudiante1)
console.log(addDataStudent(estudiante1))
localStorage.setItem('estudiante1', JSON.stringify(newArr));

// window.location.href = "index2.html"
})
function addDataStudent(student){

    newArr.push(student)
    return newArr

}


class Estudiante {
    constructor(nombre,apellido,edad){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad = edad; 
        this.materia = undefined;
        this.calificacion = undefined;
        this.curso = undefined;
    }
    prueba(){
        return (`Nombre del alumno ${this.nombre}`);
    }

    
}






console.log(saveStudents);



