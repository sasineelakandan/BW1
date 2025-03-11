// function palindrome(str){

//     for(let i=0;i<str.length;i++){
//         if(str[str.length-1-i]!==str[i]){
//             return false
//         }

//     }
//     return true

// }




// function palindrome(str){

//     let start=0
//     let end=str.length-1
//     while(start<end){
//         if(str[start]!==str[end]){
//             return false
//         }
//         start++
//         end--
//     }
//     return true

// }
// console.log(palindrome('malayalam'))


const str='malayalam'

const b=str.split('').reverse().join('')
console.log(b)
if(str==b){
   console.log('palindrome')
}else{
    console.log('not palindrome')
}