function com(a,b) {
    if ( a !== 0 && b !== 0 ) {
        console.log(a + b);
        console.log(a * b);
        console.log(Math.abs(a));
        console.log(Math.abs(b));
    } else {
        console.log("Одно значение равно нулю")
    }
}

com(0,4)