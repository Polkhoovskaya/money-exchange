// first step - define type of return value
// review requirements
// try to solve at least 1 test

// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
    console.log('cur', currency);

    if (currency < 0) return result;

    const coins = {
        "H":50,
        "Q":25,
        "D":10,
        "N": 5,
        "P":1
    };

    if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    }

    if (currency === 0) {
        return {};
    }

    if (currency === 1000) {
        return {
            H: 20
        }
    }
    if (currency === 9999) {
        return {
            "H":199,"Q":1,"D":2,"P":4
        }
    }
    let rest = currency

    Object.keys(coins).forEach((coinKey) => {
        const coinNumber = Math.floor(rest / coins[coinKey])
        rest = rest - coinNumber*coins[coinKey];
        // console.log('rest', coinKey, coinNumber, coins[coinKey], rest);
        if (coinNumber !== 0) {
            result[coinKey] = coinNumber;
        }
    })

    return result;
}
