let data = new Date();
// console.log(data);

let ano = data.getFullYear();
// console.log(ano);

let mes = data.getMonth();
// console.log(mes);

let dia = data.getDay();
// console.log(dia);

let diaMes = data.getDate();
// console.log(diaMes);

let horas = data.getHours();
// console.log(horas);

let minutos = data.getMinutes();
// console.log(minutos);

let segundos = data.getSeconds();
// console.log(segundos);

let milisegundos = data.getMilliseconds();
// console.log(milisegundos);

let dataBr = data.toLocaleString('pt-BR'); 
// console.log(dataBr);

let sla = data.getUTCHours();
// console.log(sla);

let vencimento = new Date(2022, 0, 15)

let time = data.getTime();
// let maht = Math.ceil(time)
// console.log(time);


if (mes <= 6) {
    // console.log('janeiro - junho');
}else {
    // console.log('julho - dezembro');
};
