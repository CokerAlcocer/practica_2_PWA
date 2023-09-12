
let result = undefined;

console.log(result);
const waitUntil = message => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(message);
        }, 2000);
    });
}
// waitUntil('Puras promesas aquí').then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });
// console.log(result);

const multiplicar = (n1, n2) => {
    return new Promise((res, rej) => {
        setTimeout(() => res(n1 * n2), 1500);
    });
}

const dividir = (n1, n2) => {
    return new Promise((res, rej) => {
        setTimeout(() => rej(n1 / n2), 2000);
    });
}

const multiplicarLento = (n1, n2) => {
    return new Promise((res, rej) => {
        setTimeout(() => res(n1 * n2), 2000);
    });
}

const dividirRapido = (n1, n2) => {
    return new Promise((res, rej) => {
        setTimeout(() => res(n1 / n2), 1000);
    });
}

Promise.all([multiplicar(1, 2), dividir(1, 2), 'promesa', 34]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// Promise.race([multiplicarLento(1, 2), dividirRapido(1, 2)]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });