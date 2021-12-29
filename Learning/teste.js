/*
// function soma(a, b) {
//     return a + b; // 8
// } // aqui está delcarando a função, só isso não acontece nada, precisa chamar!

// soma(3, 5); // aqui está chamando a função

function returnEvenValues(array) { // essa função retorna valores pares
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]); // se for par, aparece na lista
        } else {
            console.log(`${array[i]} não é par!`); // se não for par, diz que não é par
        }
    }
    console.log("os números pares são: ", evenNums);
}

let array = [1, 2, 4, 5, 7, 8]; // atribui os valores de array

returnEvenValues(array); // chama a função
*/