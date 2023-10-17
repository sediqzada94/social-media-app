import { Post } from '@prisma/client'
import React from 'react'
import { Button } from '../ui/button'

const PostActions = (post: { post: Post}) => {
  return (
    <div className='flex justify-between items-center p-2'>
        <div className='flex flex-col gap-y-1 justify-center items-center'>
           <span className='text-xs'> 4 likes </span>
           <Button variant="ghost" size="sm">Like</Button>
        </div>
        <div className='flex flex-col gap-y-1 justify-center items-center'>
           <span className='text-xs'> 4 Comments </span>
           <Button variant="ghost" size="sm">Comment</Button>
        </div>
        <div className='flex flex-col gap-y-1 justify-center items-center'>
           <span className='text-xs'> 4 Reposts </span>
           <Button variant="ghost" size="sm">Repost</Button>
        </div>
    </div>
  )
}

export default PostActions