function isosceles(n) {
    let space = " ";
    let output ="";
    hash = "#";
    for (let i = 1; i < n; i++) { 
        hash += "##"
        output += space.repeat(n -i) + hash + space.repeat(n-i) + "\n";
    }
    return space.repeat(n) + "#\n" + output;
} console.log(isosceles(5))