const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

let operacion = '';
let resultado = 0;

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;

        if (valor === 'C') {
            operacion = '';
            resultado = 0;
            pantalla.value = '';
        } else if (valor === '=') {
            resultado = eval(operacion);
            pantalla.value = resultado;
            operacion = '';
        } else {
            operacion += valor;
            pantalla.value = operacion;
        }
    });
});