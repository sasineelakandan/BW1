let arr=[1,1,1,2,3,5,5,6,7,8,9]

for(let i=0;i<arr.length;i++){
    let start=i
    if(arr[i]%2!==0&&arr[i+1]%2!==0){
        while(arr[i]%2!==0&&i<arr.length){
            i++
        }
        arr.splice(start,i-start)
        i=Math.max(0,start)
    }
}

console.log(arr)