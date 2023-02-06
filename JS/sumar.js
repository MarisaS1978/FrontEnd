

document.getElementById('sumar').addEventListener('click',function(){
    let NumeroA = document.getElementById('numero1').value;
 console.log('El valor del numero A es: '+ NumeroA);
    let NumeroB = document.getElementById('numero2').value;
    console.log('El valor del numero B es: '+ NumeroB);
   
    let resultado = sumar(parseInt(NumeroA),parseInt(NumeroB));
    console.log('El resultado de la suma es: '+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display= 'block';
   
})


function sumar(a,b){
    return a + b;
}