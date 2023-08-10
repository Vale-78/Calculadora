
function traerNumero(id){
    return document.getElementById(id).value;
}
// ouput truncarlo Limitar número de dígitos...pasar a string y contarlos

function calcular(){
    const n1= traerNumero("number1");
    const n2= traerNumero("number2");   
    var valorNumerico1 = Number(n1);
    var valorNumerico2 = Number(n2);

    if((isNaN(valorNumerico1)) || (isNaN(valorNumerico2))) {
        //Podría haber usado imput type="number" y todo solucionado pero opté por usar validación.
        alert ('Uno o ambos valores ingresados no son numéricos');
    } else if((n1 === '') || (n2 ==='')){
        alert ('Debes ingresar un valor en ambos campos');
    } else{
        const select = document.getElementById("operacion");
        const options=document.getElementsByTagName("option");
            if(select.value == "suma"){
               let result = suma(valorNumerico1,valorNumerico2);
               document.getElementById("resultado").innerHTML = result;
            }else if(select.value == "resta"){
                let result = resta(valorNumerico1,valorNumerico2);
                document.getElementById("resultado").innerHTML = result;
            }else if(select.value == "multiplicacion"){
                let result = multiplicacion(valorNumerico1,valorNumerico2);
                document.getElementById("resultado").innerHTML = result;
            }else if(select.value == "division"){
                let result = division(valorNumerico1,valorNumerico2);
                if(valorNumerico2 === 0){
                    document.getElementById("resultado").innerHTML = "La operación no es válida";
                } else{
                document.getElementById("resultado").innerHTML = result;
                }
            }               
    }
    function suma (a, b){
        return a + b;
    }
    function resta (a, b){
        return a - b;
    }
    function multiplicacion(a, b){
        return a * b;
    }
    function division(a, b){
        return a / b;
    }
}
 