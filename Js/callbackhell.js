// function getUser() {
//     return new Promise((res,rej)=>{
//       setTimeout(() => {
//           console.log('hello');
//          res('hello')
//      }, 1000);  
//     })
// }

// function getPosts(data) {
//      console.log("Posts fetched");
//      return new Promise((res,rej)=>{
//           setTimeout(() => {
//                console.log(data+' wold')
//             res(data+' wold')
//          }, 1000);  
//         })
// }

// function getComments(data) {
//  return new Promise((res,rej)=>{
//           setTimeout(() => {
//                 console.log(data+' GM')
//             res(data+' GM')
//          }, 1000);  
//         })
// }


// getUser().then(getPosts).then(getComments).catch((err)=>{
//  console.log(err)
// })

// function getUser(callback) {
//     console.log("Users fetched");
//     setTimeout(() => {
//         callback(); 
//     }, 1000);
// }

// function getPosts(callback) {
//     console.log("Posts fetched");
//     setTimeout(() => {
//         callback(); 
//     }, 1000);
// }

// function getComments(callback) {
//     console.log("Comments fetched");
//     setTimeout(() => {
//         callback();  
//     }, 1000);
// }


// getUser(() => {
//     getPosts(() => {
//         getComments(() => {
//             console.log("Final Result: All tasks completed");
//         });
//     });
// });




// function getUsers(){
//     console.log('getusers')
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('hello')
//           },1000)
//       })
// }

// function getPosts(data){
//     console.log('getPosts')
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//            res(data+'world')
//           },1000)
//       })
// }


// function getComments(data){
//     console.log('getComments')
//  return  new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(data +'gm')
//       },1000)
//   })
// }


// getUsers().then(getPosts).then(getComments).then((data)=>{console.log(data)})




function getUser(callback){
   console.log('user fetched')
   return new Promise((res,rej)=>{
    setTimeout(()=>{
        res('hello')
       },1000)
   })
}


function getPosts(data){
    console.log('user getPosts')
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(data+'world')
           },1000)
     })
 }

 function getComments(data){
    console.log('user getComments')
    return new Promise((res,rej)=>{
       setTimeout(()=>{
        res(data+'gm')
       },1000)
     })
 }


 getUser().then(getPosts).then(getComments).then((data)=>{console.log(data)})