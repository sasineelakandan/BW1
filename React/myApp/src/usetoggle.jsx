import React, { useState } from 'react'

const usetoggle = () => {

   const [change, setChange]=useState(false)
   function toggle(){
     setChange((prev)=>!prev)

   }

  return [change,toggle]
   
  
}

export default usetoggle