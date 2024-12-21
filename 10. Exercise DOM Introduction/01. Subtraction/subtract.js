function subtract() {

    const firstNumRef = document.getElementById("firstNumber");
    let num1 = Number(firstNumRef.value);

    const secondNumRef = document.getElementById("secondNumber");
    let num2 = Number(secondNumRef.value)

    let result = num1 - num2;

    let resultRef = document.getElementById("result");
    resultRef.textContent = result;
    

}
