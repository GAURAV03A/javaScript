const person1={
    name:"gaurav",
    age:24,
    detail:function(){
        return this.name +" "+ this.age
    }
}

const person2={
    name:"ritik",
    age:20,
}
const person3={
    name:"manish",
    age:24,
}
console.log (person1.detail.call(person2))


