//ejercicio A
class Figura {
    #color;
    constructor(color){
       this.#color = color;
    }
    getColor(){
        return console.log(this.#color);
    }
    //ejercicio C
    calcularArea(){
            return -1;
    }
}

const figura1 = new Figura("blue");
figura1.getColor();
figura1.calcularArea()


//ejercicio B
class Circulo extends Figura{
    constructor(radio,color){
        super(radio,color)
            this.radio = radio;
    }
    calcularArea(){
        return console.log(this.radio*3.14)
    }
}

class Rectangulo extends Figura{
    constructor(base,altura,color){
        super(base,altura,color);
        this.base=base;
        this.altura=altura;
    }
    calcularArea(){
        return console.log(this.base*this.altura)
    }
}

const circulo1 = new Circulo(30,"rojo")
circulo1.calcularArea()

const rectangulo1 = new Rectangulo(17,10,"verde");
rectangulo1.calcularArea()