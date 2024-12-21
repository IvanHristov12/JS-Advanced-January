function calc() {
    // TODO: sum = num1 + num2
    let inputField1 = Number(document.getElementById("num1").value);
    let inputField2 = Number(document.getElementById("num2").value);
    let sum = document.getElementById("sum");

    sum.value = inputField1 + inputField2;
}
