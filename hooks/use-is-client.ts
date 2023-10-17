import React, { useEffect, useState } from 'react'

const useIsClient = () => {
    const [isClient, setIsClinet] = useState(false)

      useEffect( ( ) => {
         setIsClinet(true)
      }, [isClient])
  
  return isClient
}

export default useIsClient