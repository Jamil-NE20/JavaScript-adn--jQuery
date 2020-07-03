
  

function sumAndVat(arr) {
  var sum = 0;
    // for/of loop
    for(let price of arr) {
        sum += Number(price);
    }
    
    console.log(`Sum = ${sum}`);
    console.log(`VAT = ${sum * 0.2}`);
    console.log(`Total = ${sum * 1.2}`); 
}

sumAndVat([1.20, 2.60, 3.50]);
sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);




