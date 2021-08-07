let lista = [
    100,
    200,
    500,
    600,
    700,
    800,
    900,
    1000,
    4000000
]

let lista2 = [100, 400, 300, 200, 800, 700, 600, 500]

const ordenarLista = (lista) => {
    lista.sort(function (a,b) {
        return a - b;
    })
    return lista;
}



const calcularMediana = (lista) => {

    let mitadLista = parseInt(lista.length / 2);

    let msj =  document.getElementById("resultado")

    let mediana;

    let esPar = (numerito) => {
        if(numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
}

    if (esPar(lista.length)) {
    
        let buffer1 = lista[(mitadLista - 1)];
        let buffer2 = lista[mitadLista]

        msj.innerText = "la mediana es: " + (buffer1 + buffer2) / 2;
    } else {
    
        mediana = lista[mitadLista];
        msj.innerText = "la mediana es: " + mediana;

    }

}

calcularMediana(ordenarLista(lista2))