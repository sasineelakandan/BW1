




class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class Linklist{

    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    append(val){
        let node= new Node(val)
        if(this.size==0){
            this.head=node
        }else{
            this.tail.next=node
        }
        this.tail=node
        this.size++
    }

    prepend(val){
        let node= new Node(val)
        if(this.size==0){
            this.tail=node
        }else{
            node.next=this.head
            
        }
        this.head=node
        this.size++
    }

    reverse(){
        let curr=this.head
        let prev=null
        while(curr!=null){
          let temp=curr.next
          curr.next=prev
          prev=curr
          curr=temp
        }
        this.head=prev
    }

    mid(val){
        let slow=this.head
        let fast=this.head
        while(slow!=null&&fast.next!=null){
            slow=slow.next
            fast=fast.next.next
        }
        let curr=this.head
        let midval=slow.val
        // while(curr.next!=null){
        //     if(curr.next.val==val){
        //         curr.next=curr.next.next
        //         this.size--
        //     }
        //     curr=curr.next
        // }
       let node =new Node(val)
        while(curr.next!=null){
            if(curr.next.val==midval){
              node.next = curr.next.next
              curr.next.next=node
            }
            curr=curr.next
        }
    }

    sort() {
        if (!this.head || !this.head.next) return;
    
        let swapped;
        do {
            swapped = false;
            let curr = this.head;
            while (curr.next!=null) {
                if (curr.val > curr.next.val) {
                    [curr.val, curr.next.val] = [curr.next.val, curr.val]; 
                    swapped = true;
                }
                curr = curr.next;
            }
        } while (swapped);
    }

    delete(val){

        if(this.head.val==val){
            this.head=this.head.next
            this.size--
        }

        let curr=this.head
        while(curr.next!=null){
            if(curr.next.val==val){
                curr.next=curr.next.next
                this.size--
            }
            curr=curr.next
        }
    }
    uniq(){

        let curr=this.head
        while(curr!=null){
            if(curr.val==curr.next.val){
                curr.next=curr.next.next
                this.size--
            }
            curr=curr.next
        }
    }
    sum(){

        let val1=this.head.val
        let val2=this.head.next.val
        let val3=this.tail.val
        let val4=0
        let val5=0
        let curr =this.head
        console.log(this.tail.val)
        while(curr.next!=null){
            curr=curr.next
          if(curr.val==this.tail.val){
             break
             
          }
          
          val4=curr.val
          
         
        }
        let curr2=this.head
        while(curr2.next!=null){
            curr2=curr2.next
          if(curr2.val==val4){
             break
             
          }
          
          val5=curr2.val
          
         
        }
        
       return val1+val2+val3+val4+val5
    }

    merge(list){
     
        let curr=this.head
        while(curr.next!=null){
            
            curr=curr.next
        }

        curr.next=list2

    }

    
    
}

const list=new Linklist()
const list2=new Linklist()


list2.append(10)
list2.append(10)
list2.append(20)
list2.append(20)
list2.append(30)
list2.append(30)
list2.append(40)
list2.append(40)

list.prepend(10)
list.prepend(40)
list.prepend(50)
list.prepend(30)
list.prepend(60)
list.prepend(70)
list.prepend(20)
// list.reverse()
list.merge(list2)




console.log(JSON.stringify(list.head))


