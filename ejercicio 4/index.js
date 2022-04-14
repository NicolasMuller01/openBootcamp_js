coparativas:
for (let numeros = 1;numeros<=10;numeros++){
  if(numeros===1){
    console.log(numeros);
    continue;
  }
  for(let i = 2;i<numeros;i++){
    if(numeros!==1 && numeros%i===0){
      console.log(numeros)
      continue coparativas
    }
  }
  console.log("es primo")
}