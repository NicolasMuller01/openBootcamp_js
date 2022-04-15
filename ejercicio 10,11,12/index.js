//Ejercicio A
// const sumar = (a,b)=>{
//     return a+b;
// }
// const restar = (a,b)=>{
//     return a-b;
// }
// const multiplicar = (a,b) =>{
//     return a*b;
// }
// const dividir = (a,b)=>{
//     if(b!=0){
//         return a/b;
//     }
//     else{
//         return console.log("no se puede dividir por 0");
//     }     
// }



//Ejercicio B & C
const eliminarUltimo = (arr)=>{
    if(arr.length === 0 || !Array.isArray(arr)){
        return console.log("El dato no es un array o el Array esta vacio")
    }
    else{
        arr.pop()
        return arr
    }
}

console.log(eliminarUltimo([]))


