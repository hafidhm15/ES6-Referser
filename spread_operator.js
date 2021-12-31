//array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const all = [...favorites, ...others]

console.log(all);


//objek
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

//rest parameter
const add = (a,b, ...rest) => {
    let total= 0;
    for(let i = 0; i< rest.length; i++){
        total += rest[i]
    }
    return a+b +total
}

console.log(add(1,4,5,6))

