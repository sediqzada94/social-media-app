import { formatDate, fullName } from '@/lib/utils'
import { Post, Profile, User } from '@prisma/client'
import  Link  from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { MoreHorizontal } from 'lucide-react'
import ActionButton from '../ActionButton'
import PostActions from './PostActions'

type PostWithUserWithProfile = Post & {
  user: User & {
    profile: Profile | null
  }
}

const SinglePost = ({ post }: { post: PostWithUserWithProfile}) => {
  return (
    <section
    className='pt-4 px-8 space-y-2 hover:bg-slate-50 transition duration-150 border-b hover:cursor-pointer'>
        <div className='flex justify-between'>
            <div className='flex gap-x-4 items-center'>
                <div className='p-2 rounded-full bg-slate-200'>
                <Link href='#' className='flex text-md font-semibold'>
                { post.user.username.charAt(0).toUpperCase() }
                </Link>
                </div>
                <div>
                    <Link href='#' className='flex text-md font-semibold hover:underline'>
                        { fullName(post?.user?.profile) ??
                         post.user.username }
                    </Link>
                    <span className='text-xs font-semibold text-slate-600 '>
                      { formatDate(post.createdAt!) }
                    </span>
                </div>
            </div>
            <ActionButton/>
        </div>
        <div className='p-2 text-base'>{ post.text }</div>
        <div className='p-2'>image</div>
        <PostActions post={post} />
      </section>
  )
}

export default SinglePost