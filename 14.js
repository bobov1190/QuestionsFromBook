pi = 3.14;
let r, S;

function findingProc(l) {
    r = Math.round( l / (2 * pi) );
    console.log(r);

    S = Math.round( pi * r**2 );
    console.log(S);
}

findingProc(20)