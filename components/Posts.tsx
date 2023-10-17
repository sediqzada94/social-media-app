import React from 'react'
import { prisma } from '@/lib/prisma'
import SinglePost from './SinglePost'

const Posts = async() => {

  const posts = await prisma.post.findMany({
    orderBy:{
      createdAt: 'desc'
    }
  })

  return (
    <div className='p-4'>
        {
         posts.map((post) => {
          return (
            <>
              <SinglePost post={post} key={post.id}/>
            </>
          )
         })
        }
        
    </div>
  )
}

export default Posts