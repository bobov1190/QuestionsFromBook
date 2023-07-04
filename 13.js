pi = 3.14;

function triangle(r1,r2) {
    if (r1 > r2) {

        s1 = Math.round( pi * r1 );
        console.log(s1);

        s2 = Math.round( pi * r2 );
        console.log(s2);

        s3 = Math.round( pi * (r1 + r2) );
        console.log(s3);

    } else {
        console.log("Nothing Special");
    }
}

triangle(4,3)