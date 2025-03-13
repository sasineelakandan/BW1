

const promise1=new Promise((res,rej)=>rej('sasi'))
const promise2=new Promise((res,rej)=>rej('data not comming'))
const promise3=new Promise((res,rej)=>res('riyas'))


const result= Promise.race([promise1,promise2,promise3])

console.log(result.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)}))
