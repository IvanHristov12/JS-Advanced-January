function solve(n, m){
    let num1 = Number(n);
    let num2 = Number(m);

    let sum = 0;

    for (let start = num1; start <= num2; start++){
        sum += start;

    }
    console.log(sum);
}
solve('1', '5' )