const array = [

   'um' ,
   'dois',
   'tres',
   'quatro',
   'cinco'

];

// array.pop()
// array.join('teste')

console.log(array);

// const teste = array.slice(2, 4);
// console.log(teste)



const array2 = [

   1,
   13,
   8,
   40,
   3

];

const teste2 = array2.sort(function(a, b) {return a-b}) // sort com números

function MaiorNumero (array2) { // pega o maior num
   return Math.max.apply(null, array2);
};

function MenorNumero(array2) { // pega o menor num
   return Math.min.apply(null, array2);
};

function MaiorQue20 (value, index, array2) { // pega os num maior que 20
   return value > 20
};

function MenorQue20 (value, index, array2) { // pega os num menor que 20
   return value < 20
};

console.log(MaiorNumero(array2));
