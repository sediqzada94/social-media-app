import React from 'react'
import { prisma } from '@/lib/prisma'
import SinglePost from './SinglePost'
import { PostWithUserWithProfile } from '@/types/post'

const Posts = async() => {

  const posts = await prisma.post.findMany({
    orderBy:{
      createdAt: 'desc'
    },
    include: {
      user:{
        include:{
          profile:true
        }
      }
    }
  })

  return (
    <div className=''>
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