
// 1. nesting with var
for(var i = 0; i < 10; i++) {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }    
}

console.log('now with let');

// 2. nesting with let
for(let j = 0; j < 10; j++) {
    for(let j = 0; j < 10; j++) {
        console.log(j);
    }    
}


