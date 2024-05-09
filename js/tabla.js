
function logica() {
    var alumnosmat  =   [
                        {   
                            "rut" : "'1-9",
                            "nombre" : "Pedro",
                            "apellido" : "Pérez",
                            "cod_curso" : ["AE600"],
                            "descripcion" : ["Algoritmos y Estructura de datos"]
                        },
                        {   
                            "rut" : "'2-7",
                            "nombre" : "Juan",
                            "apellido" : "Jara",
                            "cod_curso" : [
                                "BD253",
                                "AE600"
                            ],
                            "descripcion" : [
                                "Bases de datos",
                                "Algoritmos y Estructura de datos"
                            ]
                        },
                        {   "rut" : "3-5",
                            "nombre" : "Diego",
                            "apellido" : "Díaz",
                            "cod_curso" : ["BD253"],
                            "descripcion" : ["Bases de datos"]
                        },
                        {
                            "rut" : "'4-4",
                            "nombre" : "María",
                            "apellido" : "Martínez",
                            "cod_curso" : ["BD253"],
                            "descripcion" : ["Bases de datos"]
                        },
     ]
     console.log(alumnosmat)
     //console.log(alumnosmat.cod_curso[0])
     console.log(alumnosmat[1].cod_curso)
     console.log(alumnosmat[1].descripcion[0])
    
     //Uso de las comillas invertidas `` (uso avanzado de la instrucción)
     alert(`El código inscrito del primer alumno es : ${alumnosmat[0].cod_curso}`)
     //Uso del operador de concatenación + (uso básico de la instrucción)
     alert('Los códigos inscritos del segundo alumno son : ' + alumnosmat[1].cod_curso)

     //Utilizando la librería sweetalert2.
     Swal.fire(
        {
        title: "Los códigos inscritos del segundo alumno son:",
        text: alumnosmat[1].cod_curso,
        icon: "success"
        }
     );

}

