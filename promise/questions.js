
const timerPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello from promise');
    }, 1000);
})

const timerPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('timer error'));
    }, 1000);
})

timerPromise1.then((msg) => {
    console.log(msg); // 1. what will be printed? 
});

timerPromise2.then(() => {}, (err) => {
    console.log(err.message); // 2. what will be printed here?
});

timerPromise2.catch((err) => {
    console.log(err.message); // 3. what will be printed here
});

