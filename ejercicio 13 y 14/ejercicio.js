// //ejercicio 1
// const sumar = (a,b)=>{
//     if(typeof(a)!='number' || typeof(b)!=='number'){
//         return console.log("error ingrese un numero");
//     }
//     else{
//         return a+b;
//     }
// }

// console.log(sumar(10,"20"))



const sumar = (a,b)=>{
    if(typeof(a)!='number' || typeof(b)!=='number'){
        throw new SyntaxError ("only numbers");
    }
    else{
        return a+b;
    }    
}

try{
    console.log(sumar(10,"20"));
}
catch(err){
    console.error(err);
}

