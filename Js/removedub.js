const arr=[1,2,3,3,4,5,5,7,6,5]


// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]&&i!=j){
//             for(let k=i;k<arr.length;k++){
//                 arr[k]=arr[k+1]
//             }
//             i--
//             arr.length--
//         }
//     }
// }console.log(arr)

// let k= [...new Set(arr)]

// console.log(k)

// let b=arr.filter((val)=>arr.indexOf(val)==arr.lastIndexOf(val))
// console.log(b)

// remove Duplicate Elments
let nums = [1,5,6,1,5,6,5,1]
// output = [1,5,6]
// nums.sort((a,b)=>a-b)
// let arr2=[]
// for(let i=0;i<nums.length;i++){
//    if(nums[i]!==nums[i+1]&&!arr2.includes(nums[i])){
//     arr2.push(nums[i])
//    }
// }
// console.log(arr2)
const dup={}
let arr2=[]
for(let i=0;i<nums.length;i++){
  if(dup[nums[i]]){
    continue
  }else{
   arr2.push(nums[i])
   dup[nums[i]]=true
  }
}
console.log(arr2)




