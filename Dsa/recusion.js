let str='sasi'

// function recursion(str ,start=0,end=str.length-1){

//     if(start>=end){
//         return true
//     }

//     if(str[start]==str[end]){
//        return  recursion(str,++start,--end)
//     }else{
//         return false
//     }
// }


// console.log(recursion(str))


// function palindrome(str){
//     for(let i=0;i<str.length;i++){
//         if(str[i]!=str[str.length-1-i]){
//              return false
//         }
//     }
//     return true
// }




// function palindrome(str){
//     let start=0
//     let end=str.length-1
//     while(start<=end){
//         if(str[start]!==str[end]){
//            return false
//         }
//         ++start
//         --end
//     }
//     return true
// }

// console.log(palindrome(str))



// function recursion(str,i=str.length-1){
//    if(i<0) {
//      return ''
//    }

//    return str[i]+=recursion(str,--i)
   
// }

// console.log(recursion(str))


// function recursion(arr,i=0,sum=0){
//   if(i>=arr.length){
//     return sum
//   }

//   sum+=arr[i]
//   return recursion(arr,++i,sum)

// }

function recursion(arr,t,start=0,end=arr.length-1){
   
    if(start>end){
      return -1
    }

    let mid=Math.floor((start+end)/2)
      if(arr[mid]==t){
         return mid
      }

      if(arr[mid]<t){
        return recursion(arr,t,++start,end)
      }else{
        return recursion(arr,t,start,--end)
      }
    
 
  
  }
  let arr=[5,6,4,3,2,9,7,1,8]
  arr.sort((a,b)=>a-b)

console.log(recursion(arr,8))



