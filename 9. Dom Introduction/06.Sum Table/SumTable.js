function sumTable() {
    let test = Array.from(document.querySelectorAll("td:nth-child(2)"));
    
    let result = document.getElementById("sum");
    let sum = 0;
    for(let num of test){
        sum += Number(num.textContent);
    }
    result.textContent = sum;
    console.log(result);
}