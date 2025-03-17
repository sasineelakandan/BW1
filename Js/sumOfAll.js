
const ab = [{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34}]

// let sum=0
// for(let i=0;i<ab.length;i++){
//     let obj=ab[i]

//     for(let j in obj){
//         if(Array.isArray(obj[j])){
//             sum+=obj[j].reduce((a,c)=>a+c)
//         }else{
//             sum+=obj[j]
//         }
//     }
// }

function recursion(arr,i=0,sum=0){
  if(i>=arr.length){
     return sum
  }

  let current=arr[i]
  console.log(current.a)
    sum+=current.a.reduce((a,b)=>a+b,0)
    sum+=current.n

    return recursion(arr,++i,sum)


}

console.log(recursion(ab))


let arr=[1,2,3,4,5,6,7,[2,4,5],[3,[5,6,7]]]


// function recursion(arr,res=[]){
    
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             recursion(arr[i],res)
//         }else{
//             res.push(arr[i])
//         }
//     }

//     return res
  
   
  
//   }
  
//   console.log(recursion(arr))