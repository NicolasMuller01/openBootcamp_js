var moment = require('moment'); // require
moment().format(); 

const saludar = (palabra)=>{
    return console.log(`hola ${palabra}`);
}

const hora = () =>{
    const hora = moment().format('LT');
    return console.log(hora);
}

hora()