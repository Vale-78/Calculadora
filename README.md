# CALCULADORA SIMPLE
## AUTOR: Inés Valeria Foglino

## Herramientas
Este proyecto integra HTML, CSS Y JavaScript. 

## Características

Aquí podrás resolver operaciones básicas tales como: 

* SUMA 
* RESTA
* MULTIPLICACIÓN
* DIVISIÓN


## Casos de prueba:

#### División por cero
<< Entrada1: 2;  Entrada2: 0;  Operación: División; 
* Salida: "La operación no es válida".

#### Ingreso de valores no numéricos
<< Entrada1: 23F23;  Entrada2: 5;  Operación: Todas; 
* Salida: "Uno o ambos valores ingresados no son numéricos".

#### Campos vacíos
<< Entrada1:  ;  Entrada2: 25;  Operación: Todas; 
* Salida: "Debes ingresar un valor en ambos campos".

#### Más de un punto
<< Entrada1: 2.345.03  ;  Entrada2: 10;  Operación: Todas; 
* Salida: "Uno o ambos valores ingresados no son numéricos".

#### Caso general
<< Entrada1: 3;  Entrada2: 10;  Operación: División; 
* Salida: o.3.

<< Entrada1: 8;  Entrada2: 235;  Operación: Multiplicación; 
* Salida: 1880.


## Algoritmo principal.
```javascript
function calcular(){
    (...)

    if((isNaN(valorNumerico1)) || (isNaN(valorNumerico2))) {
        alert ('Uno o ambos valores ingresados no son numéricos');
    } else if((n1 === '') || (n2 ==='')){
        alert ('Debes ingresar un valor en ambos campos');
    } else{
       (...)
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
       (...)
    }
 }
```

## Cómo correr la aplicación _"Calculadora"_?

Para ejecutar esta aplicación, simplemente se necesita clonar el proyecto y ejecutar el archivo html.
Sino, accede directamente desde aquí:
    [GitHub Pages](https://vale-78.github.io/Calculadora/).


## Contribuciones

Cualquier tipo de aportes son bienvenidos.

1. <a href='https://help.github.com/articles/fork-a-repo/'>**(Fork)**</a> Bifurque el repositorio en GitHub.
2. <a href='https://help.github.com/articles/cloning-a-repository/'>**(Clone)**</a> Clone el proyecto en su propia máquina.
3. <a href='https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository'>**(Commit)**</a> Confirmar cambios en la rama de desarrollo. <a href='https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell'>**(development branch)**</a>.
4. <a href='https://help.github.com/articles/pushing-to-a-remote/'>**(Push)**</a> Empuje su trabajo de regreso a su repositorio en git.
5. <a href='https://help.github.com/articles/about-pull-requests/'>**(Pull request)**</a> Envíe una solicitud de extracción para que pueda revisar sus cambios. 

## Impresión de pantalla

![](./assest/MiCalcu.png)