let arr=[1,2,0,7,8,9,10,0,8]
let j=0
for(let i=0;i<arr.length;i++){
    if(!arr[i]==0){
        if(i!=j){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
        j++
    }
}

console.log(arr)