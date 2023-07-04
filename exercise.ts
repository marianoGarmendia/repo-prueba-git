interface Persona {
    nombre: string,
    age: number,
    email: string,
    student: boolean,
   
}

const alumno :Persona = {
    nombre: "Mariano",
    age: 36,
    email: "mar@gmail.com",
    student: true,
    
    
}

function printInfo(student:Persona){
console.log(`Nombre: ${student.nombre}`)
console.log(`Edad: ${student.age}`)
console.log(`Email: ${student.email}`)
console.log(`Alumno activo: ${student.student}`)
}


function main(){
    printInfo(alumno)
}
main()