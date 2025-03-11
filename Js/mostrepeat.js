let arr=[1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4]

let freq={}

for(let i=0;i<arr.length;i++){
    if(freq[arr[i]]){
        freq[arr[i]]+=1
    }else{
        freq[arr[i]]=1
    }
}
let count=0
let key=''
for(let i in freq){
    
   if(freq[i]>count){
    count=freq[i]
    key=i
   } 
}
console.log(count)
console.log(key)
