
const h1 = document.querySelector('h1');
const input1= document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn=document.querySelector('#btncalcular');
const result=document.querySelector('#result');
const form=document.querySelector('#formulario');
let resultado=0;

form.addEventListener('submit',btnOnclick);

function btnOnclick(event){
    event.preventDefault();
    resultado = parseInt(input1.value) + parseInt(input2.value);
    result.innerText ="Resultado: " + resultado;
}