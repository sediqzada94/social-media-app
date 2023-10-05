'use client'
import React from 'react'
import { Logo } from './Logo'
import { Home, Users, User, Search, Video, Group, MailCheck, Bell } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navbarRoutes = [
  {
      icon: Home,
      label: "Home",
      link: "/"
    },
  {
    icon: Video,
    label: "Videos",
    link: "/videos"
  },
  {
    icon: Users,
    label: "Groups",
    link: "/groups"
  },
  // {
  //   icon: Bell,
  //   label: "Notifications",
  //   link: "/notifications"
  // },
  // {
  //   icon: MailCheck,
  //   label: "Messages",
  //   link: "/messages"
  // },
  // {
  //   icon: User,
  //   label: "Friends",
  //   link: "/friends"
  // },

]
const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const onClick = (link: string) => {
    router.push(link)
  }
  return (
    <div className="h-full flex items-center justify-between px-10 py-8 shadow-md ">
      <div className='px-2 flex'>
            <Logo />
            <span className='hidden md:flex items-center justify-center text-xl font-medium ml-3'>Social Media</span> 
      </div>
     
      <div className='hidden md:flex md:gap-x-6'>
        { navbarRoutes.map( route => (
          <div className='flex flex-col'>
            <button
            onClick={ () =>  onClick(route.link) }
            className={cn('text-slate-600 hover:bg-slate-50 rounded-md p-4 hover:text-slate-700',
            pathname === route.link && "bg-slate-100")}
            key={route.link}> 
              { <route.icon /> }
            </button>
            <div className={cn("w-full border-b-[4px]  border-sky-500 mt-auto opacity-0 ",
             pathname === route.link && "opacity-100")} />
          </div>
        )) }
      </div>
      <div>
      <div>
        <Input type='text' placeholder='Search...' 
        onKeyUp = { (e) => console.log("YES")}
        className=''
        />
      </div>
      </div>
    </div>
  )
}

export default Navbar