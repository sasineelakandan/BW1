let arr=[5,6,4,3,2,9,7,1,8]

let sawped

do{
    sawped=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
           
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            sawped=true
        }
    }
}while(sawped)


console.log(arr)

