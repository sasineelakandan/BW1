let arr=[5,6,4,3,2,9,7,1,8]


function mergesort(arr){
    if(arr.length<=1){
        return arr
    }

    let mid=Math.floor(arr.length/2)
    let left=mergesort(arr.slice(0,mid))
    let right=mergesort(arr.slice(mid))
    return merge(left,right)
}

function merge(arr1,arr2){
    let res=[]
 while(arr1.length&&arr2.length){
    if(arr1[0]<arr2[0]){
      res.push(arr1.shift())  
    }else{
        res.push(arr2.shift())
    }

 }
  return [...res,...arr1,...arr2]
}




console.log(mergesort(arr))