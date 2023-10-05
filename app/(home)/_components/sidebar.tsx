'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import SidebarItem from './sidebar-item'
import { homeRoutes, videoRoutes, groupRoutes } from '@/routes/routes'

const Sidebar = () => {
  const pathname = usePathname()

  const sidebarRoutes = pathname === '/'
   ? homeRoutes
   : pathname.includes('videos') 
   ? videoRoutes
   : pathname.includes('groups') 
   ? groupRoutes 
   : []


  return (
    <div className='relative border-r h-full p-4 space-y-4 hover:overflow-y-scroll'>
        <div className=' flex flex-col w-full p-4 '>
           { sidebarRoutes.map(route =>(
            <SidebarItem
            key={route.link}
            icon={route.icon}
            label={route.label}
            link={route.link}  
            />  
           )) 
           }
        </div>
        <div>
        Samiullah Sediqzada
        </div>
       
        
    </div>
  )
}

export default Sidebar