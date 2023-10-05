import { LucideIcon } from 'lucide-react'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface SidebarItemProps {
    icon: LucideIcon,
    label: string,
    link: string
}
const SidebarItem = ({
    icon: Icon,
    label,
    link
}: SidebarItemProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive = pathname === link
    
     const onClick = () =>{
      router.push(link)
    }
  return (
    <button
     onClick={onClick}
     type='button'
     className={cn("flex items-center gap-x-2 text-slate-800 text-md font-[500] pl-2 transition-all hover:text-slate-900 rounded-md hover:bg-slate-300/20"
    )}
     >
      <div className='flex items-center gap-x-3 py-3'>
        <Icon />
        { label }
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-amber-500 h-full transition-all"
         
        )}
      />
      
        
    </button>
  )
}

export default SidebarItem