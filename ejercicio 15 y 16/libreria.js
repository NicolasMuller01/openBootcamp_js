import moment from 'moment';

const saludar = (palabra)=>{
    return console.log(`hola ${palabra}`);
}

const hora = () =>{
    const hora = moment().format('LT');
    return hora;
}

export {saludar,hora};