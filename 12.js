let c;
let P;

function triangle(a,b) {
    c = Math.round(Math.sqrt( a**2 + b**2 ))
    console.log(c)

    P = a + b + c
    console.log(P)
}

triangle(6,7)