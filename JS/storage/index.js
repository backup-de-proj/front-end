// inserir dado
localStorage.setItem('nome', 'eu');


// restart sem perder dados


// resgatar item
const name = localStorage.getItem('nome');
console.log(name);


// resgate a item que não existe


// remover dado
localStorage.removeItem('nome');


// limpar todos os dados
localStorage.setItem('a', 1);
localStorage.setItem('b', 2);

localStorage.clear();



// sessionSTORAGE

// adicionar dado
sessionStorage.setItem('num', 123);


// reinicar ou fechar e perder dados


// pegar dado
const n = sessionStorage.getItem('num');
console.log(n);


// remover dado
sessionStorage.removeItem('num');


// limpar TODOS os dados
sessionStorage.clear();



// testando
const obj = {
    name: 'eu',
    idade: 22,
    job: 'programmer'
};
localStorage.setItem('obj', JSON.stringify(obj));

const pegarObj = localStorage.getItem('obj');

const personObj = JSON.parse(pegarObj);
console.log(personObj);



localStorage.clear();
