function solve(month, year){
    const date = new Date(year, month, 0);
    console.log(date.getDate());
}
solve(1, 2012)