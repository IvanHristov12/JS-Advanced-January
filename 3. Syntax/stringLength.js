function stringLength(str1, str2, str3){
    let sum = str1.length + str2.length + str3.length;
    let average = sum / 3;
    console.log(sum);
    console.log(Math.floor(average));
}
stringLength('chocolate', 'ice cream', 'cake')