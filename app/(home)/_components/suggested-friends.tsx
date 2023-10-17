import React from 'react'
import { Logo } from './Logo'
import { Button } from '@/components/ui/button'
import CustomCard from '@/components/CustomCard'
import Link from 'next/link'
const SuggestedFriends = () => {
  return (
    <CustomCard
           cardTitle='Suggested Friends'
           cardDescription='The people you may know'
           >
          { Array.from({length:3}).map( (_, i) => (
            <div className='flex items-center py-2 gap-x-3' key={i}>
                <Logo height={40} width={40} />
                <div className='flex flex-col '>
                    <div className='flex flex-col'>
                        <Link href={"#"} className='text-xs font-semibold hover:underline text-slate-800 hover:text-slate-900'>
                            Ezatullah Master
                        </Link>
                        <span className=' text-[12px]'>
                            Master of computer science
                        </span>
                    </div>
                <Button variant="default" size="sm"  className='w-full py-3 mt-1'>Send request</Button>
                {/* <Image /> */}
                </div>
                
            </div>
            ))
            }
    </CustomCard>
  )
}

export default SuggestedFriends