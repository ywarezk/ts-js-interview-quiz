

const timerPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello from promise');
    }, 1000);
});

async function timerAndFetch() {
    try {
        const [msg, res] = await Promise.all([timerPromise1, fetch('https://nztodo.herokuapp.com/api/task?format=json')]);
        const json = await res.json();
    } catch(err) {
        return err.message;
    } 
}

timerAndFetch().catch((err) => {
    // 1. when will this be called
    console.log(err.message);
});