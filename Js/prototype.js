

function Person(name,age){
   
   this.name=name,
   this.age=age
}

Person.prototype.greet=function(){
    console.log(this.name,this.age)
}
    

const Person1= new Person('sasi','25')

Person1.greet()


