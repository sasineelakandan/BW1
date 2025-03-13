

function mypromise(){
   return new Promise((res,rej)=>{
        let data=false
        setTimeout(()=>{
            if(data){
             res('data is comming')
            }else{
             rej('data not comming')
            }
        })
    })
}


async function handlepromise() {
  try{
     const result=await mypromise()
     if(result){
        console.log(result)
     }
  }catch(err){
    console.log(err)
  }     
    
}

handlepromise()