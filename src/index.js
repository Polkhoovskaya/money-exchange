// first step - define type of return value
// review requirements
// try to solve at least 1 test

// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
    let rest = currency;
    const hValue = 50;
    const hCount = Math.floor(currency / 50);

    if (hCount > 0) {
        result['H'] = hCount;
    } 

    rest = currency - hCount*hValue;
    //console.log('h rest', rest)

    const qValue = 25;
    const qCount = Math.floor(rest / qValue);

    if (qCount > 0) {
        result['Q'] = qCount;
    }

    rest = rest - qCount*qValue;


    const dValue = 10;
    const dCount = Math.floor(rest / dValue);

    if (dCount > 0) {
        result['D'] = dCount;
    }
    rest = rest - dCount*dValue;

    const nValue = 5;
    const nCount = Math.floor(rest/nValue);
    // console.log('pCount', pCount)
    if (nCount > 0) {
        result['N'] = nCount;
    }
    rest = rest - nCount*nValue;

    const pValue = 1;
    const pCount = rest/pValue;
    // console.log('pCount', pCount)
    if (pCount > 0) {
        result['P'] = pCount;
    }
   
    return result;
}
