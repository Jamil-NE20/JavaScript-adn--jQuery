function figureArea([w, h, W, H]) {
    let figArea1 = Number(w) * Number(h);
    let figArea2 = Number(W) * Number(H);
    // Math.min(); Returns the smallest of zero
    let commonArea = Math.min(Number(w), Number(W)) * Math.min(Number(H), Number(h));

    let resultArea = figArea1 + figArea2 - commonArea;
    return resultArea;
}
console.log(figureArea([2, 4, 5, 3]));
console.log(figureArea([13, 2, 5, 8]));