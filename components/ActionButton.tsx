import React from 'react'
import { Button } from './ui/button'
import { MoreHorizontal } from 'lucide-react'

const ActionButton = () => {
  return (
    <Button variant="ghost" className='rounded-full p-2 flex items-center justify-center'>
         <MoreHorizontal />
    </Button>
  )
}

export default ActionButton