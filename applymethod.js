const person1 ={
    name:"gaurav",
    age:24,
    }
const person2 ={
    name:"ritik",
    age:24,
    detail:function(country,hometown){
        return this.name +" "+ this.age +" "+ hometown +" "+country 
    }
}
console.log(person2.detail.apply(person1,["mahow","india"]))
