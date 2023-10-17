'use client'

import React from 'react'
import { Logo } from './Logo'
import { Button } from '@/components/ui/button'
import CustomCard from '@/components/CustomCard'
import Link from 'next/link'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { useRouter } from 'next/navigation'
  
const NewFriends = () => {
   const router = useRouter()

   const handleClick = () => {
    router.push('profile')
   }

  return (
    <CustomCard
           cardTitle='New Friends'
           cardDescription='Your new friends'
           >
          { Array.from({length:3}).map( (_, i) => (
            <div className='flex items-center py-2 gap-x-3' key={i}>
                <Logo height={40} width={40} />
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex flex-col'>
                        
                        <HoverCard>
                            <HoverCardTrigger>
                                <button onClick={handleClick}
                                 className='text-xs font-semibold hover:underline text-slate-800 hover:text-slate-900'>
                                  Ezatullah Master
                                </button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                          
                                The React Framework – created and maintained by @vercel.
                           
                            </HoverCardContent>
                        </HoverCard>

                        <span className=' text-[12px]'>
                            Master of computer science
                        </span>
                    </div>
                <Button variant="default" size="sm"  className=' text-xs py-1'>Message</Button>
                {/* <Image /> */}
                </div>
                
            </div>
            ))
            }
    </CustomCard>
  )
}

export default NewFriends