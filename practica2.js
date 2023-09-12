
// PRIMER EJERCICIO
const first = () => {
    return new Promise((res, rej) => {
        setTimeout(res(Math.floor(Math.random() * (100 - 1) + 1)), 0);
    });
}

const second = num => {
    return new Promise((res, rej) => {
        setTimeout(() => res(num * num), 3000);
    });
}

const third = num => {
    return new Promise((res, rej) => {
        setTimeout(() => res(Math.sqrt(num)), 1000);
    });
}

first().then(res => {
    console.log(res);
    second(res).then(res => {
        console.log(res);
        third(res).then(res => {
            console.log(res);
        }).catch(console.log);
    }).catch(console.log);
}).catch(console.log);


// SEGUNDO EJERCICIO
const URL = [
    'https://reqres.in/api/users', 
    'https://pokeapi.co/api/v2/pokemon', 
    'https://reqres.in/api/users?page=2'
];

const multi = urls => {
    let responses = [];
    URL.forEach(url => {
        fetch(url).then(res => res.json()).then(data => responses.push(data)).catch(console.log);
    });

    return new Promise((res, rej) => {
        setTimeout(() => res(responses), 0);
    });
}

multi(URL).then(console.log).catch(console.log);


// TERCER EJERCICIO
// ESTE BLOQUE SIMULA EL OBJETO DE FUNCIONES REGRESANDO UNA LISTA CON FUNCIONES
const functions = () => {
    let f = [];
    URL.forEach(item => f.push(() => {
        return fetch(item).then(res => res.json()).then(res => res).catch(console.log)
    }));

    return f;
}

const parallel = arrFunc => {
    let promises = [];
    arrFunc.forEach(f => {
        promises.push(new Promise((res, rej) => setTimeout(res(f()), 0)));
    });
    
    console.log(promises);
    return promises;
}

Promise.all(parallel(functions())).then(console.log).catch(console.log);


// CUARTO EJERCICIO
const delayed = n => {
    let promises = [];

    for(let i = 0; i < n; i++) {
        promises.push(
            new Promise((res, rej) => {
                setTimeout(() => {
                    console.log(i + 1);
                    res(i + 1)
                }, (i + 1) * 1000);
            })
        )
    }

    return promises;
}

Promise.all(delayed(5)).then(() => {
    console.log('Todas las promesas se resolvieron');
}).catch(console.log);


//  QUINTO EJERCICIO
let promise = new Promise((res, rej) => {
    setTimeout(() => rej('Promesa cancelada'), 3000);
    setTimeout(() => res('Promesa hecha'), 5000);
});

promise.then(console.log).catch(console.log);
