
const collection = ['oyster', 'cody', 'tuna', 'wale', 'shark', 'sea horse']

console.log('Type of: ', typeof collection)
console.log('Collection size:', collection.length)

collection[2] = 'atuna'

console.log('Collection size after atuna:', collection.length)

collection[collection.length] = 'new fish'

console.log('Collection size after "new fish":', collection.length)

collection[12] = "not a fish"

console.log('Collection iten 9',console.log[9])

collection.forEach((item, index) =>
{
    console.log('%c%s', 'color: #00641e', `Position: ${index} - Item: ${item}` );
})


console.log(collection.join())

console.log(collection.join(" "))

collection.push('loobster', 'shrimp')

collection.unshift('jellyfish')

collection.shift()

collection.pop()

const newCollection = collection.find((item,index) => {
    if(item.length > 3){
        console.log('Index inside find', index)
        return item
    }
})

console.log(newCollection)
console.log(collection)

const superNewCollection = collection.filter(item => {
    return item.length > 7
})

console.log(superNewCollection)