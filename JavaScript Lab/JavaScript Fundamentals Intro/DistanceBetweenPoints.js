function distanceBetweenPoints([x1, y1, x2, y2]) {
    // Math.pow(), Returns base x to the exponent power y (that is, 'x' to the power 'y').
    let distanceX = Math.pow((Number(x2)- Number(x1)), 2);
    let distanceY = Math.pow((Number(y2)- Number(y1)), 2);
    return Math.sqrt(distanceX + distanceY);
}

console.log(distanceBetweenPoints([2, 4, 5, 0]));
console.log(distanceBetweenPoints(['2.34', '15.66', '-13.55', '-2.9985']));



