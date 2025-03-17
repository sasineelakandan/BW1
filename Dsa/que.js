// class Queue{
//     constructor(){
//         this.item=[]
//     }

//     enque(val){
//         this.item.push(val)
//     }
   
//     deque(val){
//         this.item.shift()
//     }

//     peek(){
//         console.log(this.item[0])
//     }

//     printAll(){
//         console.log(this.item)
//     }

// }

// const queue=new Queue()

// queue.enque(10)
// queue.enque(20)
// queue.enque(30)
// queue.enque(40)
// queue.enque(50)

// queue.deque()

// queue.printAll()

let str='a1bb1c3dd11'
let result=''

 for(let i=0;i<str.length;i++){
    let char=str[i]
    let count=''
    while(i+1<str.length&&Number(str[i+1])){
        count+=str[++i]

    }
    count=Number(count)

    for(let i=1;i<=count;i++){
        result+=char
    }
 } 

    


console.log(result)

