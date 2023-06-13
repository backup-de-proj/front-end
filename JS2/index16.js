const carro = {

    marca: 'Lamborghini',
    modelo: 'LP700',
    motor: ['1.5', '1.7', '2.4'],
    ano: 2010

};


var json = JSON.stringify(carro)
console.log(json);
var json2 = JSON.parse(json);
console.log(json2.motor[2])


const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/')
ajax.send();

ajax.onload = function () {
    console.log(this.responseText);
};
