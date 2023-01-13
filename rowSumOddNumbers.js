function rowSumOddNumbers(n) {
	const sp = (n * (n - 1)) + 1; //1
    let total = 0;

    for(let index = 0; index < n; index++){
        total += sp + (2 * index)
    }
    
    console.log(total);
}

rowSumOddNumbers(3);


// 1, 3, 7, 13, 21, 31, 43

//1, 2, 3, 4, 5, 6, 7