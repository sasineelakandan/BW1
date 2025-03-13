class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}



class linklist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }


    append(val){
        let node=new Node(val)
        if(this.size==0){
            this.head=node
           
        }else{
            this.tail.next=node
        }
        this.tail=node
        this.size++
    }
    reverse(){
        let curr=this.head
        let prev=null
        while(curr!==null){
            let temp=curr.next
            curr.next=prev
            prev=curr
            curr=temp
        }
        this.head=prev
    }
    mid(){
        let slow=this.head
        let fast=this.head
        while(fast!=null&&fast.next!=null){
            slow=slow.next
            fast=fast.next.next
        }
        let val=slow.val
        let curr=this.head
        while(curr.next!=null){
            if(curr.next.val==val){
                curr.next=curr.next.next
                this.size--
            }
            curr=curr.next
        }
    }

    delete(val){

        if(this.head.val==val){
            this.head=this.head.next
            this.size--
        }

        let curr=this.head
        while(curr!==null){
            if(curr.next.val==val){
                curr.next=curr.next.next
                this.size--
            }
            curr=curr.next
        }
    }

    merge(list1){
       let curr=this.head
      while(curr.next!=null){
        curr=curr.next
      }
      curr.next=list1

      
    }

    uniq(){
        let curr=this.head
        while(curr!=null&&curr.next!=null){
            if(curr.val==curr.next.val){
                curr.next=curr.next.next
                this.size--
            }
            curr=curr.next
        }
    }
}

const list=new linklist()


list.append(10)
list.append(10)
list.append(20)
list.append(20)
list.append(30)
list.append(30)
list.append(40)
list.append(40)
list.reverse()
list.uniq()

console.log(JSON.stringify(list.head))


