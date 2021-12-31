const fruits = [
    {
        id:1,
        name: "apple",
        price: 2000
    },
    {
        id:2,
        name: "banana",
        price: 2000
    },
    {
        id:3,
        name: "cheery",
        price: 4000
    }
]

const fruitsName = fruits.map(item => item.name)
console.log(fruitsName)

//filter
const apple = fruits.filter(item => item.name !== "Apple")
console.log(apple)

//find
const cherry = fruits.find(item => item.name === "cheery")
console.log(cherry)

//reduce
const totalPrice = fruits.reduce((total, currentItem) => total + currentItem.price, 0)

console.log(totalPrice)