pi = 3.14;
let d, r;

function findingProc(s) {
    r = Math.round( Math.sqrt(s / pi) );
    console.log(r);

    d = r * 2;
    console.log(d);
}

findingProc(100)