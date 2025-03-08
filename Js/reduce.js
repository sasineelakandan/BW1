const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];

// {a:1,b:2,c:3}
const ans=arr.reduce((acc,cur)=>{
    // let value=Object.values(cur)[0]
    // let key=Object.keys(cur)[0]
    // let c={}
    // acc[key]=value
   return {...acc,...cur}
   
},{})

console.log(ans)