let arr=[-4,-6,9,0,74,5,7,-2,null,undefined,false]

for(let i=0;i<arr.length;i++){
    
}


// while(i<arr.length){
   
// }

let i=0
let sum=0
do{
    if(arr[i]>0){
        sum+=arr[i]
    }
    i++
}while(i<arr.length)

    // console.log(sum)

let sum1=arr.reduce((acc,cur)=>{
    if(cur>0){
        acc+=cur
    }
    return acc
},0)

console.log(sum1)