import React, { useState } from 'react'

const Child = ({SetName}) => {

   const [name,setChange]=useState('')

   SetName(name)

  return (
    <div>
   <input   onChange={(e)=>{setChange(e.target.value)}} type="text" />

    </div>
    
  )
}

export default Child