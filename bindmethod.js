const person1={
    name:"manish",
    age:24,
    class:12,
}
const person2={
    name:"gaurav",
    age:23,
    class:11,
}
const person3={
    name:"ritik",
    age:22,
    class:10,
    detail:function(country,hometown){
        return this.name +" "+ this.age +" "+ india +" "+ hometown
    }
}
var result= person1.detail.bind(person2())
console.log(result())
console.log(result())
console.log(result())