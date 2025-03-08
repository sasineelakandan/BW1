let arr=[1,2,1,4,5]
 let sorted=true
for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        sorted=false
        break
    }
}

if(sorted){
    console.log('soreted')
}else{
    console.log('not sorted')
}