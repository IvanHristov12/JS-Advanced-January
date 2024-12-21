function demo(a, b){
    
    for (let i = b; i > 0; i--){
        if ( (a % i == 0) && (b % i == 0)){
            console.log(i);
            break;
        }
    }
    
}
demo(2154, 458)