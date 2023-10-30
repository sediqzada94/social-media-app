import React from 'react'
import { prisma } from '@/lib/prisma'
import SinglePost from './SinglePost'
import { PostWithData} from '@/types/post'

const Posts = async() => {

  const posts: PostWithData[] = await prisma.post.findMany({
    orderBy:{
      createdAt: 'desc'
    },
    include: {
      user:{
        include:{
          profile:true
        }
      }, 
      likes: true,
      comments: true,
      reposts: true
    }
  })

  return (
    <div className=''>
        {
         posts.map((post: PostWithData) => {
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