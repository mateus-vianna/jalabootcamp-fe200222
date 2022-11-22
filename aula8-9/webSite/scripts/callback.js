
const sum = (a,b) => { 
 console.log("Sum: ", a+b)
 return a+b
}

const minus = (a,b) => {
    console.log("Minus: ", a-b)
    return a-b
}

const multi = (a,b) =>{
    const m = a*b
    console.log("Multi: ", m)
    return m
}

const calculator = (a,b, callback1, callback2, callback3) =>{
    !!callback1 && !!callback2 && !!callback3 ? console.log('All functions exist') : console.log("Not all functions exist")
    if(callback1)
        "First function enabled",callback1(a,b)
    if(callback2)
        "Second function enabled",callback2(a,b)
    if(callback3)
        "Third function enabled",callback3(a,b)
    console.log('All ansewrs should have been received')
}


calculator(4,5,sum, minus, multi)


const betterCalc = (a,b, array) => { 
    array.push(sum(a,b), minus(a,b), multi(a,b))
}

const operations = []

betterCalc(4,9,operations)

console.log(operations.join("\n"))
