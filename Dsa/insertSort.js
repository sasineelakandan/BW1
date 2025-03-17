let arr=[5,6,4,3,2,9,7,1,8]

for(let i=0;i<arr.length;i++){
    let insert =arr[i]
    let j=i-1

    while(j>=0&&arr[j]>insert){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=insert
}

console.log(arr)

