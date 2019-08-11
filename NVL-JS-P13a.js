var primeNumbers=[2];

function findPrimeNumber(n) {
    if(n===1){
        primeNumbers=[n];
        console.log(primeNumbers)
    }else{
        for (let i = 3; i <= n ; i++) {
            isPrime(i)
        }
        console.log(primeNumbers)
    }
}

function isPrime(number){
    let prime;
    for (let i = 0; i < primeNumbers.length; i++) {
        if(number%primeNumbers[i]===0){
            prime = false
            break;
        }else{
            prime= true;
        }
    }
    if(prime){
        primeNumbers.push(number)
    }
}
findPrimeNumber(100);