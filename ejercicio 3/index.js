let arrPar =[];
let arrImp = [];

for (let i = 1;i<=100;i++){
    if(i%2===1){
        arrImp.push(i);
    }
    else{
        arrPar.push(i);
    }
}

console.log(`numeros pares:${arrPar}`);

console.log(`numeros impares:${arrImp}`);