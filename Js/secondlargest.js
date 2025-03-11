let arr=[8,7,5,3,9,4]
let max=-Infinity
let sl=-Infinity
let third=-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        third=sl
        sl=max
        max=arr[i]
    }
    else if(arr[i]>sl&&max!==arr[i]){
        third=sl
        sl=arr[i]
    }
    else if(arr[i]>third&&sl!==arr[i]&&max!==arr[i]){
        third=arr[i]
    }
}

console.log('big',max)
console.log('second',sl)
console.log('third',third)