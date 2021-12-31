function* generator(){
    yield 1
    yield 2
    yield 3
    return 4
}

// console.log(generator().next().value)
const gen = generator()
gen.next().value
gen.next().value
gen.next()
gen.next()
gen.next()

