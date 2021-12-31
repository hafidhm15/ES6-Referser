class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    pesan(){
        return `hello ${this.name}`
    }
}

class Member extends Person {
    constructor(name, age, memberId){
    super(name, age)
    this.memberId = memberId
    }
}

const hafidh = new Member("hafidh",21, 32);

console.log(hafidh.memberId)