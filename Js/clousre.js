function count(){
    let count=1

    return function inside(){
        return count++
    }
}

const increment=count()

console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())