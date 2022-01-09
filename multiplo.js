const multiplo = (a, b)=> {
    if (a % b === 0) {
        return 'multiplo'
    }else if (b % a === 0) {
        return 'multiplo'
    }else {
        return console.error('a e b não são multiplos');
    }
}
