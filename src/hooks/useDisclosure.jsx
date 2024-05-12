import React, { useState } from 'react'

function UseDisclosure() {
    const [isOpen,setOpen]=useState(false);


    const onOpen=()=>{
      setOpen(true);
    
    }
    
    const onClose=()=>{
    setOpen(false);
    }
    return {isOpen,onClose,onOpen}
}

export default UseDisclosure;
