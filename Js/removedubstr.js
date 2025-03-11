let str='vfjhvkjfehdkihrskjkdght'

let freq={}
let str2=''
for(let i=0;i<str.length;i++){
    if(freq[str[i]]){
        continue
    }else{
        str2+=str[i]
        freq[str[i]]=true
    }
}




const obj = { a: 10, b: 25, c: 7, d: 30 };

let max=-Infinity
let key=''
for(let i in obj){
   if(obj[i]>max){
     max=obj[i]
     key=i
   }

}
console.log(key)
