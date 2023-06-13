var interruptor = 'on';

if (interruptor == 'on') {
    console.log('on');
} else {
    console.log('off');
};

// ---------------------------------

var hr = new Date().getHours();
console.log(hr);

if (hr <= 12) {
    console.log('manhã');
} else {
    console.log('tarde - noite');
};
