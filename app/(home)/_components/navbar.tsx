'use client'
import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { MessageCircle, Bell } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { navbarRoutes } from '@/routes/routes'
import { Input } from '@/components/ui/input'
import { useRouter, usePathname } from 'next/navigation'
import useIsClient from '@/hooks/use-is-client'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Navbar = () => {

  const router = useRouter()
  const pathname = usePathname()

  const isClient = useIsClient();

  const onClick = (link: string) => {
    router.push(link)
  }
 
  return (
    <div className="h-full flex items-center justify-between px-10 py-8 shadow-md bg-white z-50">
      <div className='px-2 flex'>
            <Logo />
            <span className='hidden md:flex items-center justify-center text-xl font-medium ml-3'>Social Media</span> 
      </div>
     
      <div className='hidden md:flex md:gap-x-6'>
        { navbarRoutes.map( route => (
          <div className='flex flex-col' key={route.link}>
            {
              isClient &&
              <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                <div
                    onClick={ () =>  onClick(route.link) }
                    className={cn('text-slate-600 hover:bg-slate-50 rounded-md p-4 hover:text-slate-700',
                    pathname === route.link && "bg-slate-100")}
                    key={route.link}> 
                    { <route.icon /> }
                </div>
                </TooltipTrigger>
                <TooltipContent>
                  { route.label }
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            }
               
           
            
              
            <div className={cn("w-full border-b-[4px]  border-sky-500 mt-auto opacity-0 ",
             pathname === route.link && "opacity-100")} />
          </div>
        )) }
      </div>
      <div>
      <div className='flex gap-3'>
        <Input type='text' placeholder='Search...' 
        onKeyUp = { (e) => console.log("YES")}
        className='hidden md:flex'
        />
        <Button variant='ghost' className='rounded-full p-2 text-slate-600 hover:text-slate-800 ml-4'>
          <MessageCircle size= '20px' />
        </Button>
        <Button variant='ghost' className='rounded-full p-2 text-slate-600 hover:text-slate-800'>
        <Bell size= '20px' />
        </Button>
        <Button variant='ghost' className='rounded-full p-2'>
          User
        </Button>
        
      </div>
      </div>
    </div>
  )
}

export default Navbar