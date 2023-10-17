import { Post } from '@prisma/client'
import React from 'react'

const SinglePost = ({ post }: { post: Post}) => {
  return (
    <div
    className='py-20'>
      { post.text }
      </div>
  )
}

export default SinglePost