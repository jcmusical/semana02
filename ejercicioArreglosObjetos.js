function calcular() {
    var number1, number2, resultado

    /*number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value

    resultado = Number(number1) * Number(number2)
    document.getElementById("resultado").value = resultado

    Swal.fire("Su resultado: " + resultado);*/

    /* Array */
    //var numeros = []
    //var numeros2 = array()

    //var numeros = ["Nombre", 1 , "Cristhian"]
    //alert(numeros[1])

    /* Objeto */
    var carros   = {
                        "Color" : "Rojo",
                        "Tipo": "Camioneta",
                        "Capacidad": 7,
                        "ColorAdicional": [
                            "Amarillo",
                            "Verde"
                        ]
                    }   
    console.log("Carro 1: ")
    console.log(carros)
    console.log(carros.Tipo)
    console.log(carros.ColorAdicional[1])

    console.log("Este es mi arreglo: " + carros)
    console.log("El tipo del carro es: " + carros.Tipo + " El color adicional es: " + carros.ColorAdicional[1])
    
    
    var alumnosMatri   = [
                        {
                            "rut" : "1-9",
                            "nombre": "Camioneta",
                            "apellido": 7,
                            "ColorAdicional": [
                                "Amarillo",
                                "Verde"
                            ]
                        },
                        {
                            "rut" : "Azul",
                            "nombre": "Minivan",
                            "apellido": 5,
                            "matricula": [
                                "1-9",
                                "AE600"
                            ],
                            cod_curso
                        }  
                    ]
        
        console.log("Carro 2: ")
        console.log(carros2)
        console.log(carros2[1].Tipo)
        console.log(carros2[1].ColorAdicional[0])
        
     
}