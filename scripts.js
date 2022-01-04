var visor, funçao ,oper,expressao;
var number1 = [];
var simbol =[];
var resultadoAnterior;
var number2, novoNumero = true;


function catchNumber(number){
    visor = document.querySelector('#Visor');
    if(novoNumero == true){
        visor.innerHTML = number;
        novoNumero = false;
    } else{
        visor.innerHTML += number;
    }
}

function deleteNVisor(){    
    visor.innerHTML = 0;
    novoNumero = true;
}

function deleteOVisor(){    
    expressao.innerHTML = " ";
    deleteNVisor();
}

function calcula(){
    var finalExpression = " ";
    number1.push(visor.innerHTML.trim());
    var indicesTotais = simbol.length + number1.length;
    console.log(indicesTotais);
      for( var i= 0; i <= indicesTotais; i++){
        finalExpression += number1[i] + simbol[i];
      }
    console.log(finalExpression);
}


// Envia pro visor de operação

function parcialOperation(operation){
    expressao = document.querySelector('#operação');
    novoNumero = true;
    number1 = visor.innerHTML.trim();
    simbol = operation;
    console.log(number1);
    console.log(simbol);    
    if(operation == 'squareroot' || operation == 'potencia'){
        if(operation == 'squareroot'){
            expressao.innerHTML += `${visor.innerHTML.trim()} sqrt( `;
            //resultadoAnterior = 
        }
        if(operation == 'potencia'){
            expressao.innerHTML += `${visor.innerHTML.trim()} pot( `;
            /* 
 
            */
        }
    } else {
        expressao.innerHTML += `${visor.innerHTML.trim()} ${operation} `;
        visor.innerHTML = ' ';  
    }
 
}