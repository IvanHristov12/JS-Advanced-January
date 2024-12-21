function solve() {
  let resultRef = document.getElementById("result");
  let textValue = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  textValue = textValue.toLowerCase();
  let result = "";
  let textArr = textValue.split(" ");

  //  -------TEST EXAMPLES-------- 
  // "this is an example", "Camel Case"
  // "secOND eXamPLE", "Pascal Case"
  // "Invalid Input", "Another Case"

  switch (convention) {
    case "Camel Case":
        result = textArr.shift();

        textArr.forEach(word => {
          result += word[0].toUpperCase() + word.substring(1).toLowerCase();
        })
      break;
    case "Pascal Case":
        textArr.forEach(word => {
          result += word[0].toUpperCase() + word.substring(1).toLowerCase();
        })
      break;
    default:
      result = "Error!"
  }

  resultRef.textContent = result;
}