let a={name:'sasi',age:'25'}

const handler={
    get:(obj,props)=>{
       return props in obj?obj[props]:'property not found'
    }
}

const proxy= new Proxy(a,handler)

console.log(proxy.name)
console.log(proxy.age)
console.log(proxy.city)