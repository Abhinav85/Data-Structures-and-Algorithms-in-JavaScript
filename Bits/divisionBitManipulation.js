var remainder = 0;
division = (dividend,divisor) => {
    var quotient = 1, neg = 1;

    if(dividend * divisor < 0) neg = -1;

    if(dividend == Number.MIN_SAFE_INTEGER && divisor == -1) return Number.MAX_SAFE_INTEGER;

    var tempDividend = Math.abs(dividend);
    var tempDivisor = Math.abs(divisor);


    if(tempDividend === tempDivisor) return 1*neg;
    else if(tempDividend < tempDivisor){
        remainder = neg * tempDividend;
        return 0;
    }

    while(tempDivisor << 1 <= tempDividend){
        tempDivisor = tempDivisor << 1;
        quotient = quotient << 1;
    }

    if(dividend < 0)
        quotient = quotient*neg + division(-(tempDividend-tempDivisor), divisor);
    else
        quotient = quotient*neg + division(tempDividend-tempDivisor, divisor);
    return quotient;

}

console.log(division(-2147483648,-8));