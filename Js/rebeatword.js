function numbertoChar(str) {
    let result = "";
   
     
 for(let i=0;i<str.length;i++){
    let char=str[i]
      let count=''
  
    while(i+1<str.length&&!isNaN(str[i+1])){
        count+=str[++i]
    }
   count=parseInt(count)
   for(let i=1;i<=count;i++){
    result+=char
 }
 }

 

 return result
    
}

console.log(numbertoChar("a2b3c4e11"));
