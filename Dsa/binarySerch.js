let arr=[5,6,4,3,2,9,7,1,8]


function binarySerch(arr,t){
    arr.sort((a,b)=>a-b)
    let start=0
    let end=arr.length-1
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]==t){
            return mid
        }
        if(arr[mid]<t){
          start=mid+1
        }else{
            end=mid-1
        }
    }
    return -1

}

console.log(binarySerch(arr,10))