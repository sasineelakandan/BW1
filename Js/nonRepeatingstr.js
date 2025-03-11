
let str='malaynalam'

let freq={}

for(let i=0;i<str.length;i++){
    if(freq[str[i]]){
        freq[str[i]]+=1
    }else{
        freq[str[i]]=1
    }
}
let uniq=''
for(let i in freq){
    if(freq[i]==1){
      uniq+=i  
    }
}

console.log(uniq)