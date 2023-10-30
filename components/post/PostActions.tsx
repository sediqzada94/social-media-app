'use client'
import { Post, Profile, User } from '@prisma/client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from '../ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import  { useForm }  from 'react-hook-form'
import axios from 'axios'

import { fullName } from '@/lib/utils'
import { PostWithData } from '@/types/post'
import { CommentCreateRequest, createCommentSchema } from '@/lib/validators/comment-validator'


const PostActions = ( { post } : { post: PostWithData}) => {

  const { toast } = useToast();

 const form = useForm<CommentCreateRequest>({
     resolver: zodResolver(createCommentSchema),
     defaultValues: {
       replyText: '',
       file: ''
     },
   })

  const handleReply = async (values: CommentCreateRequest) => {
    try{
      const comment: Comment = await axios.post(`/api/posts/${post.id}/comment`, values)
      toast({
        description: "Reply was published successfully!"
      })
      form.reset()
     }catch(e) {
      toast({
        variant: 'destructive',
        description: "Something went wrong!"
      })
     }
  }


  return (
    <div className='flex flex-col p-2'>
        <div className='flex justify-between gap-y-1 items-center text-sm text-slate-700
        hover:text-slate-900 font-semibold'>
           <span className='text-xs'>You and { post.likes.length } others reacted </span>
           <span className='text-xs'> { post.comments.length } replies </span>
           <span className='text-xs'> { post.reposts.length } Reposts </span>
        </div>
        <div className='border my-2' />
        <div className='flex justify-between items-center gap-y-1 px-10'>
           <Button variant="ghost" size="sm">React</Button>
           <Dialog>
          <DialogTrigger asChild>
          <Button variant="ghost" size="sm">Reply</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Your reply to { fullName(post?.user?.profile) ??
                         post.user.username }'s post</DialogTitle>
            </DialogHeader>
            <div className=" py-4">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(handleReply)} className="space-y-8">
                <div>
                      <FormField
                      control={form.control}
                      name="replyText"
                      render={({ field }) => (
                          <FormItem>
                          <FormControl>
                          <Textarea placeholder='What is happening'
                              className='focus:ring-none'
                              { ...field }
                              />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                      />
                      <div className="flex justify-end  mt-4 gap-2">
                      <DialogClose asChild>
                        <Button type="button" variant="ghost">
                          Close
                        </Button>
                      </DialogClose>
                      <Button type="submit" disabled={ form.formState.isSubmitting }
                      className='flex justify-end bg-sky-500 hover:bg-sky-600'
                      >{ form.formState.isSubmitting ? "Reply..." : "Reply"}</Button> 
                      </div>
                      
                 </div>
            </form>
            </Form>
            </div>
            <DialogFooter>
            
            </DialogFooter>
          </DialogContent>
        </Dialog>
           <Button variant="ghost" size="sm">Repost</Button>
        </div>
        
    </div>
  )
}

export default PostActions