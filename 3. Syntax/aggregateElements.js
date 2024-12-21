function solvearr(arr){

    let sum = 0;    
    arr.forEach(num => {
        sum += num;
    })

    let sum2 = 0;
    arr.forEach(num => {
        sum2 += 1/num;
    })

    let concat = [];
    let result = concat.concat(...arr)

    console.log(sum);
    console.log(sum2);
    console.log(result.join(""));
}
solvearr([1, 2, 3])