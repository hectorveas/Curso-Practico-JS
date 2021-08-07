//codigo cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//codigo triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base,altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//codigo circulo
console.group("Circulos");

const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

//interaccion con HTML

//cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  
  const area = areaCuadrado(value);
  alert(area);
}

//triangulo
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
      console.error("Los lados a y b no son iguales");
  } else {
      const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
      const trianguloPequenoLadoBase = trianguloGrandeLadoA;

      const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
      const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

      const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

      const trianguloGrandeAltura = trianguloPequenoLadoA;
      return trianguloGrandeAltura;
  }
}

function calcularPerimetroTriangulo() {
  const input = document.getElementById("InputTriangulo1");
  const ladoA = parseInt(input.value);

  const input2 = document.getElementById("InputTriangulo2");
  const ladoB = parseInt(input2.value);

  const input3 = document.getElementById("InputTrianguloBase");
  const Base = parseInt(input3.value);

  const perimetro = perimetroTriangulo(ladoA,ladoB,Base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input = document.getElementById("InputTrianguloBase");
  const base = parseInt(input.value);

  const input2 = document.getElementById("InputTrianguloAltura");
  const altura = parseInt(input2.value);
  
  const area = areaTriangulo(base,altura);
  alert(area);
}

//circulo
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  
  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  
  const area = areaCirculo(value);
  alert(area);
}