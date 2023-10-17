'use client'

import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from './ui/input'
import { Paperclip } from 'lucide-react'
import { Logo } from '@/app/(home)/_components/Logo'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from './ui/button'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import  { useForm }  from 'react-hook-form'
import axios from 'axios'
import { User } from '@prisma/client'
import { PostCreateRequest, createPostSchema } from '@/lib/validators/post-validator'
import { useRouter } from 'next/navigation'


const CreatePost = () => {
     const { toast } = useToast();
     const router = useRouter()

    const form = useForm<PostCreateRequest>({
        resolver: zodResolver(createPostSchema),
        defaultValues: {
          privacy: "PUBLIC",
          text: "",
          file: ""
        },
      })
  async function createPost(values: PostCreateRequest){
       try{
        const user: User = await axios.post('/api/posts', values)
        toast({
          description: "Post was published successfully!"
        })
        form.reset()
        router.refresh()
       }catch(e) {
        toast({
          variant: 'destructive',
          description: "Something went wrong!"
        })
       }
       
   
    }
  return (
    <div className='flex flex-col px-4 py-8 mt-5 border-b'>
      
          
            <Form {...form}>
            <form onSubmit={form.handleSubmit(createPost)} className="space-y-8">
              <div className='flex gap-3'>
                <Logo />
             <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Who can see this post</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PUBLIC" key="public">All</SelectItem>
                        <SelectItem value="FRIENDS" key="friends">Friends</SelectItem>
                        <SelectItem value="PRIVATE" key="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
        />
              </div>
                <div>
                      <FormField
                      control={form.control}
                      name="text"
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
                      <div className="flex justify-between mt-4">
                      <FormField
                      control={form.control}
                      name="file"
                      render={({ field }) => (
                          <FormItem>
                          <FormControl>
                              <Input type='file' { ...field } id='file' className='hover:cursor-pointer'/>
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                      />
                      <Button type="submit" disabled={ form.formState.isSubmitting }
                      className='flex justify-end bg-sky-500 hover:bg-sky-600'
                      >{ form.formState.isSubmitting ? "Posting..." : "Post"}</Button> 
                      </div>
                      
                 </div>
            </form>
            </Form>
    </div>
  )
}

export default CreatePost