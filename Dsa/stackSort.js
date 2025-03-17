let arr=[5,6,4,3,2,9,7,1,8]

let tempstack=[]
while(arr.length){
let temp=arr.pop()
   

    while(tempstack.length&&temp<tempstack[tempstack.length-1]){
       arr.push(tempstack.pop())
    }
    tempstack.push(temp)
    
}
console.log(tempstack)
