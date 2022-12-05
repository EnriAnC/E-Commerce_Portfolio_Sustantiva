
//--------------EJERCICIO 1----------------
// let nota = prompt("ingrese una nota")
// if (Number(nota) == nota){
//     if (nota < 0){
//         alert("Ingrese un número positivo")
//     }
//     else if (nota < 4){
//         alert("reprobado") 
//     }
//     else if (nota < 5){
//         alert("insuficiente")
//     }
//     else if (nota <  6){
//         alert("Bien")
//     }
//     else if (nota <= 7){
//         alert("Excelente")
//     }
//     else{
//         alert("Ingresa solo números del 1 al 7")
//     }
    
// } else {
//     alert("Ingrese un número válido")
// }


//---------------EJERCICIO 2---------------
// let num1 = prompt("Ingrese un número")
// let num2 = prompt("Ingrese otro número")

// if (Number(num1) == num1 && Number(num2) == num2){
//     num1 = parseFloat(num1)
//     num2 = parseFloat(num2)
//     if (num1 > num2){
//         let suma = num1 + num2
//         let resta = num1 - num2
//         alert("suma: "+ suma)
//         alert("resta: "+ resta)
//     }
//     else if (num1 == num2){
//         alert("los numeros son iguales")
//     }
//     else if (num1 < num2){
//         let resultado = num1*num2 / 2
//         alert("resultado: "+ resultado)
//     }
// }

// const rutRegistrado = "12132132-2"
// const nombreRegistrado = "Link"
// let saldoUsuario = (-2000)

// const rutIngresado = prompt("Ingrese su rut")
// const nombreIngresado = prompt("Ingrese su nombre")

// if(rutIngresado == rutRegistrado && nombreIngresado == nombreRegistrado){
//     if (saldoUsuario > 0){
//         alert(rutRegistrado + " tiene " + saldoUsuario)
//     }
//     else if (saldoUsuario == 0){
//         alert(rutRegistrado + " tiene un saldo 0<br>")
//     }
//     else{
//         alert(rutRegistrado + " tiene un saldo deudor de "+saldoUsuario)
//     }
// } else {
//     alert("Usted no registra cuenta bancaria")
// }

//---------RETO 5 OBLIGATORIO
// let listaUsuario = [];
// let usuario = [];
// cantidadUsuarios = 4 // prompt("Seleccione cantidad de usuarios a ingresar:")
// cantidadUsuarios= new Array(cantidadUsuarios)
// for (let i = 0; i < 4; i++){
//     console.log(i)
//     nombre = 'enrique' // prompt("Ingrese nombre:")
//     id = '64231' // prompt("Ingrese id:")
//     añoNacimiento = '1997' // prompt("Ingrese año de nacimiento:")
//     listaUsuario = agregarUsuarioALista(listaUsuario, nombre, id, añoNacimiento)
// }
// function agregarUsuarioALista(listaUsuario, nombre, id, añoNacimiento){
//     usuario = []
//     usuario['id'] = id;
//     usuario['añoNacimiento'] = `${añoNacimiento}`;
//     let contraseña = usuario['añoNacimiento'] + Math.floor(Math.random()*100);
//     usuario['contraseña'] = contraseña;
//     // let usuario = [
//     //     ["id", "pablo"],
//     //     ["añoNacimiento", "1990"],
//     //     ["contraseña", "1234"]
//     // ]
//     listaUsuario[nombre] = usuario
//     return listaUsuario
// }
// // listaUsuario = agregarUsuarioALista(listaUsuario, 'eddd', '1232', '2000')
// // agregarUsuarioALista(listaUsuario, 'pablo', '1202', 1997)
// console.log(listaUsuario)


    // var date = new Date();
    // var ultimoDia = new Date(date.getFullYear(), date.getMonth(0) + 1, 0).getDate();
    // console.log(ultimoDia)
    // let mesActual = date.getMonth()
    // const meses = [1,2,3,4,5,6,7,8,9,10,11,12]
    // let cantidadDeDíasPorMes = []

    // for (const i of meses) {

    //     var ultimoDia = new Date(date.getFullYear(), date.getMonth(0) + i + -10, 0).getDate();
    //     cantidadDeDíasPorMes.push(ultimoDia)
    //     console.log(`Los días del mes ${i} son ${ultimoDia}`)
    
    // }
    // console.log(cantidadDeDíasPorMes)
    // let mes = prompt("Para éste año 2022\nIngrese el mes cual desea saber la cantidad de días:")


// ------EJERCICIO 1-----------
// let string = "12345"

// let array1 = string.split('');
// const arrayLength = array1.length
// for (let i = 1; i <= arrayLength; i++) {
//     array1.reverse()
//     console.log(array1.join(''))
//     array1.reverse()
//     array1.pop()
// }

// //- ----------EJERCICIO2----------
// let array2 = []
// for (let i = 1; i <= 255; i++) {
//     array2.push(i);
    
// }
// console.log(array2)

// // ------EJERCICIO 3-------------

// let suma = 0
// for (let i = 1; i <= 1000; i++) {
//     if (i%2 == 0){
//         suma += i
//     }
    
// }
// console.log("La suma de pares es: "+suma)



// // ------EJERCICIO 4-------------


// suma = 0
// for (let i = 1; i <= 5000; i++) {
//     if (i%2 != 0){
//         suma += i
//     }
    
// }
// console.log("La suma de impares es: "+suma)


// // ------EJERCICIO 5 --------------
// let array3 = [5,1,2,4,-5,2,4-2]
// suma = 0
// for (const num of array3) {
//     suma += num
// }
// console.log("La suma dentro del arreglo es: " + suma)


// //-------EJERCICIO 6---------------

// let array4 = [2,5,2,8,5,10,44,2,11,42,62,24,-1,-65,-76,-99,3]
// console.log("El numero mayor en el arreglo es: "+ Math.max(...array4))

// let numMayor = array4[0];
// for (let num of array4) {
//     if (num > numMayor){
//         numMayor = num
//     }
// }
// console.log("El otro numero mayor es: "+ numMayor)


//------------------------------------------------------------------

// function descuentoItem(monto, descuento){
//     monto = monto*1.19
//     total = monto - monto/100*descuento
//     // total = total*1.19
//     return total
// }

// console.log(descuentoItem(2500, 20))


// let matrizEmpleadosSueldoBruto = [
//     ['Juan', 412000],
//     ['Diego', 522000]
// ]

// let matrizEmpleadosSueldoLiquido = []
// for (i in matrizEmpleadosSueldoBruto){
//     descuentoSueldoBruto = matrizEmpleadosSueldoBruto[i][1] - matrizEmpleadosSueldoBruto[i][1]*0.10 - matrizEmpleadosSueldoBruto[i][1]*0.07

//     matrizEmpleadosSueldoLiquido.push([matrizEmpleadosSueldoBruto[i][0], descuentoSueldoBruto])
        
// }

// console.log("Sueldo bruto empleados:\n",matrizEmpleadosSueldoBruto)
// console.log("Sueldo liquido empleados:\n",matrizEmpleadosSueldoLiquido)



// matrizEmpleadosSueldoLiquido = []
// for (empleado of matrizEmpleadosSueldoBruto){
//     descuentoSueldoBruto = empleado[1] - empleado[1]*0.10 - empleado[1]*0.07

//     matrizEmpleadosSueldoLiquido.push([empleado[0], descuentoSueldoBruto])
// }

// console.log("Sueldo bruto empleados:\n",matrizEmpleadosSueldoBruto)
// console.log("Sueldo liquido empleados:\n",matrizEmpleadosSueldoLiquido)

