class Carro {

    constructor(n1, n2, n3, n4) {
        this.marca = n1;
        this.modelo = n2;
        this.ano = n3;
        this.dono = n4;
    }

    buzina() {
        return this.modelo + 'buzinou: PIIIIIIIIIIIIIIIIIIIIIIIIKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK';
    }

};


const lamborghini = new Carro('lamborghini', 'LP600', 2010, 'podin');

lamborghini.ano = 2008
console.log(lamborghini);

// console.log(lamborghini.marca);
