function extractText() {
    let list = document.getElementById("items");
    const textArea = document.getElementById("result");
    list = Array.from(list.children);

    let result = "";
    for (let item of list ){

        result += `${item.innerHTML}\n`
    }
    textArea.textContent = result;


}