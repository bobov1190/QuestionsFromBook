function geometricProg(a,b) {
    if (a >= 0 && b >= 0) {
        console.log( Math.sqrt( a * b ) )
    } else {
        console.log("Ваши числа отрицательны")
    }
}

geometricProg(0,3)