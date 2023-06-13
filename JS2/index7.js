function click() {
    alert('click1');
}

function dblclick() {
    alert('click2');
}

function over() {
    let div = document.getElementById('teste');

    div.style.background = 'green';
}

function out() {
    let div2 = document.getElementById('teste');

    div2.style.background = 'blue';
}

// function move() {
//     let div3 = document.getElementById('teste');
//     let p = document.getElementById('txt');

//     p.append('o mouse moveu <br>');
// }

function down() {
    let div4 = document.getElementById('teste');

    // alert('pressionou');
}

function up() {
    let div5 = document.getElementById('teste');

    div5.style.background = 'yellow';
}

// function focus() {
//     let input = document.getElementById('input').value= " ";

//     // input.inner
// }

function change() {
    // alert('mudou');
}

function blur() {
    let body = document.getElementById('body');

    body.style.background = 'grey';
}

function tecla_pressionada() {
    let input = document.getElementById('input').value;
    console.log(input)
}

function tecla_clicada() {
    let input = document.getElementById('input').value;
    console.log(input)
}

function carregar() {
    // alert('carregou')
}

function resize() {
    console.log('Houve um rend.')
}
