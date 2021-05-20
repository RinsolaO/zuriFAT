// FIRST TASK
function convertFahrToCelsius (parameter) {
    fahrToFloat = parseFloat(parameter)
        if (typeof parameter == 'number' || typeof parameter == 'string') {

        const calc1 = 5 / 9;
        const calc2 = fahrToFloat - 32 ;
        const calcFahr = ((calc2 * calc1).toFixed(4));
        return calcFahr;
    } else {
        return `${parameter} is not a valid number but a/an ${typeof parameter}`;
    }
}


//SECOND TASK

function checkYuGiOh (n) {
    const pushArray = [];
    if (n > 0) {
        for (i = 1; i <= n; i++ ) {
             if ( (i % 2 == 0) && (i % 3 == 0) && (i % 5 == 0)) {
                pushArray.push('yu-gi-oh');
            } else if ( (i % 2 == 0) && (i % 3 == 0)) {
                pushArray.push('yu-gi');
            } else if ( (i % 2 == 0) && (i % 5 == 0)) {
                pushArray.push('yu-oh');
            } else if ( i % 2 == 0) {
                pushArray.push('yu');
            } else if ( i % 3 == 0) {
                pushArray.push('gi');
            } else if ( i % 5 == 0) {
                pushArray.push('oh');
            } else {
                pushArray.push(i) 
            }
        }
    } else if (typeof n !== 'number') {
        return `invalid parameter: ${n}`
    }
        return pushArray;
}

console.log (convertFahrToCelsius(0));
console.log (checkYuGiOh(30));