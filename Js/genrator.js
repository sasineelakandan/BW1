function*gn(){
    for(let i=1;i<=100;i++){
        if(i%2==0){
            yield i
        }
    }
}
let gen=gn()
let start=new Date()

while(true){
    
const {done,value}=gen.next()
    if(done||new Date()-start>6){
        break
    }
    console.log(value)
}