import React from 'react'
import { Logo } from './Logo'
import { Button } from '@/components/ui/button'
import CustomCard from '@/components/CustomCard'
import Link from 'next/link'
const NewFriendRequests = () => {
  return (
    <CustomCard
           cardTitle='New Friend Requests'
           cardDescription='Your new friend requests'
           >
          { Array.from({length:3}).map( (_, i) => (
            <div className='flex items-center py-2 gap-x-3' key={i}>
                <Logo height={40} width={40} />
                <div className='flex flex-col'>
                    <div className='flex flex-col mb-1'>
                        <Link href={"#"} className='text-xs font-semibold hover:underline text-slate-800 hover:text-slate-900'>
                            Ezatullah Master
                        </Link>
                        <span className=' text-[12px]'>
                            Master of computer science
                        </span>
                    </div>
                    <div>
                        <Button variant="default" size="xs" className=' text-xs py-1 mr-1'>Message</Button>
                        <Button variant="destructive" size="xs" className=' text-xs py-1'>Reject</Button>
                    </div>
                {/* <Image /> */}
                </div>
                
            </div>
            ))
            }
    </CustomCard>
  )
}

export default NewFriendRequests