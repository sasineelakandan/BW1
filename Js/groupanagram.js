let arr=["bat", "tab", "cat", "act", "tac"]
let map=new Map()
for(let i=0;i<arr.length;i++){
    let sortedword=arr[i].split('').sort().join('')

    if(!map.has(sortedword)){
        map.set(sortedword,[])
    }

    map.get(sortedword).push(arr[i])


}

console.log(Array.from(map.values()))