'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from './Logo'
import { Button } from '@/components/ui/button'
import CustomCard from '@/components/CustomCard'

const RightSidebar = () => {
 return (
    <section className='relative border-l h-full space-y-4 overflow-scroll'>
        <div className='flex flex-col w-full  p-2 pb-10'>
          <CustomCard
           cardTitle='New Friends'
           cardDescription='Master of computer science'
           >
          { Array.from({length:3}).map( (_, i) => (
            <div className='flex items-center py-2 gap-x-3'>
                <Logo height={40} width={40} />
                <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col'>
                    <Link href={"#"} className='text-md font-semibold hover:underline text-slate-700 hover:text-slate-900'>
                        Ezatullah Master
                    </Link>
                    <span className=' text-xs'>
                        Master of computer science
                    </span>
                </div>
                <Button variant="default"  className='rounded-full text-xs py-1'>Message</Button>
                {/* <Image /> */}
                </div>
                
            </div>
            ))
            }
          </CustomCard>
          <CustomCard
           cardTitle='New Friend Requests'
           cardDescription='Your Recent Friend requests'
           >
          { Array.from({length:3}).map( (_, i) => (
            <div className='flex items-center py-2 gap-x-3'>
                <Logo height={40} width={40} />
                <div className='flex flex-col'>
                    <Link href={"#"} className='text-sm font-semibold hover:underline text-slate-700 hover:text-slate-900'>
                        Ezatullah Master
                    </Link>
                    <span className=' text-xs'>
                        Master of computer science
                    </span>
                </div>
                <div className='flex gap-1'>
                    <Button variant="default" size="sm" className='rounded-full text-xs py-1'>Accept</Button>
                    <Button variant="destructive" size="sm" className='rounded-full text-xs py-1'>Reject</Button>
                </div>
                {/* <Image /> */}
            </div>
            ))
            }
          </CustomCard>
          <CustomCard
           cardTitle='Suggested Friends'
           cardDescription='You may know them'
           >
          { Array.from({length:3}).map( (_, i) => (
            <div className='flex items-center py-2 gap-x-3'>
                <Logo height={40} width={40} />
                <div className='flex flex-col'>
                    <Link href={"#"} className='text-sm font-semibold hover:underline text-slate-700 hover:text-slate-900'>
                        Ezatullah Master
                    </Link>
                    <span className=' text-xs'>
                        Master of computer science
                    </span>
                </div>
                <div className='flex gap-1'>
                    <Button variant="default" size="sm" className='rounded-full text-xs py-1 truncate'>Send Request</Button>
                  
                </div>
                {/* <Image /> */}
            </div>
            ))
            }
          </CustomCard>
          
        </div>
    </section>
 )
}

export default RightSidebar