// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado *4;
} 
//console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log ("El área del cuadrado es: " + areaCuadrado + "cm`2");
console.groupEnd();

// Código del triángulo
// console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log (
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 + "cm, " 
//     + ladoTriangulo2 + "cm, " 
//     + baseTriangulo + "cm"
// );
// console.log ("La altura del Triangulo es: " + alturaTriangulo + "cm");

//const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log ("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
function areaTriangulo (base, altura) {
    return (base * altura)/2;
}
// console.log ("El área del Triangulo es: " + areaTriangulo + "cm`2");

console.groupEnd();

// Código de la circungerencia
console.group("Círculos");


//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es : " + radioCirculo + "cm");


//Diámetro
function diametroCirculo (radio) {
    return radio * 2
}

//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del círculo es : " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("La constante PI es : " + PI );

//Perímetro o Circunferencia
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es : " + perimetroCirculo + "cm");
function perimetroCirculo (radio){
 const diametro = diametroCirculo (radio);
 return diametro * PI;
}

//Área
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El área del círculo es : " + areaCirculo + "cm´2");
function areaCirculo (radio){
return (radio * radio) * PI;
}

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularperimetrocuadrado() {
 const input = document.getElementById("InputCuadrado");
 const value = input.value;
 

 const perimetro = perimetroCuadrado (value);
 alert(perimetro + " cm");
}

function calcularareacuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
   
    const area = areaCuadrado (value);
    alert(area + " cm^2");
}


function calcularperimetrotriangulo() {
    const entrada = document.getElementById("InputLado1");
    const valor = entrada.value;

    const entrada2 = document.getElementById("InputLado2");
    const valor2 = entrada2.value;

    const entrada3 = document.getElementById("Inputbase");
    const valor3 = entrada3.value;
    

    const perimetroTri = perimetroTriangulo (valor, valor2, valor3);
    alert (perimetroTri + " cm")
}

function calcularareatriangulo() {
    const entrada = document.getElementById("InputLado1");
    const valor = entrada.value;

    const entrada2 = document.getElementById("InputLado2");
    const valor2 = entrada2.value;

    const entrada3 = document.getElementById("Inputbase");
    const valor3 = entrada3.value;
    

    const areaTri = areaTriangulo (valor, valor2, valor3);
    alert (areaTri + " cm^2")
}

function calcularperimetrocirculo () {
    const entradacirculo = document.getElementById("InputCirculo");
    const valorcirculo = entradacirculo.value;
    
   
    const perimetroCir = perimetroCirculo (valorcirculo);
    alert(perimetroCir + " cm");
}

function calcularareacirculo() {
    const entradacirculo = document.getElementById("InputCirculo");
    const valorcirculo = entradacirculo.value;
    
   
    const areaCir = areaCirculo (valorcirculo);
    alert(areaCir + " cm^2");
}
 function alturaTriangulo (ladoA, ladoB, ladoBase) {
    if (ladoA != ladoB ) {
        console.error ("Los Lados a y b no son iguales");
    } else {
    }
 }
 function alturaTrianguloIsoceles (trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
     if(trianguloGrandeLadoA != trianguloGrandeLadoB) {
         console.error("Los lados a y b no son iguales");
     } else {
         const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
         const tiranguloPequenoLadoBase = trianguloGrandeLadoA;

         const triangulopequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
         const trianguloPequenoLadoBaseCuadrado = tiranguloPequenoLadoBase * tiranguloPequenoLadoBase;
         
         const trianguloPequenoLadoA = Math.sqrt (trianguloPequenoLadoBaseCuadrado-triangulopequenoLadoBCuadrado);
         
         const trianguloGrandeAltura = trianguloPequenoLadoA;
         return trianguloGrandeAltura;
     }
 }
 //Intereactuando con HTML
 function alturaIsoceles(){
    const ingreso = document.getElementById("InputLadoA");
    const valor4 = ingreso.value;

    const ingreso2 = document.getElementById("InputLadoB");
    const valor5 = ingreso2.value;

    const ingreso3 = document.getElementById("InpuLadoBase");
    const valor6= ingreso3.value;
    

    const alturaIso = alturaTrianguloIsoceles (valor4, valor5, valor6);
    alert (alturaIso + " cm")
 }