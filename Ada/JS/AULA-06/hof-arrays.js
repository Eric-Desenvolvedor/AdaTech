const numeros = [1, 2, 3, 4, 5];

//forEach

numeros.forEach((itemNumero, index, arrayCompleto) => {
    console.log(itemNumero, index, arrayCompleto);
});

//find

const encontrar = numeros.find((itemNumero) => {
    return itemNumero > 3;
});

console.log(encontrar);

