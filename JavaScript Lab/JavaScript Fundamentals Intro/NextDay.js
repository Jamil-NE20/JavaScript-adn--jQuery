function nextDay([year, month, day]) {
    let oneDay = 24 * 60 * 60 * 1000;
    let toDay = new Date (year, month - 1, day);
    let nextDay = new Date(toDay.getTime() + oneDay);
    // join(); return a array into an string using separation, array.join(separator);
    return [nextDay.getFullYear(), nextDay.getMonth()+1, nextDay.getDate()].join('-');
        
}
console.log(nextDay([2016, 9, 30]));