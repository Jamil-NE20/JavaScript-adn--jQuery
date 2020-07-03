function countLetter (string, letter) {
    let count = 0;
    // (for/of loop)
    for ( let char of string) {
        if (char ==letter) {
            count++;
        }
    }
    return count;
}
console.log(countLetter('hello', 'l'));
console.log(countLetter('panther', 'n'));
