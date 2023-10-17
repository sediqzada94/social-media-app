'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from './Logo'
import { Button } from '@/components/ui/button'
import CustomCard from '@/components/CustomCard'
import NewFriends from './new-friends'
import NewFriendRequests from './new-friend-requests'
import SuggestedFriends from './suggested-friends'
import useIsClient from '@/hooks/use-is-client'

const RightSidebar = () => {
  const isClient = useIsClient()
 return (
    <section className='relative border-l h-full space-y-4 overflow-scroll'>
        <div className='flex flex-col w-full pt-2 pb-10'>
         { isClient &&
         <>
          <NewFriends />
          <NewFriendRequests />
          <SuggestedFriends />
         </>
        }
        </div>
    </section>
 )
}

export default RightSidebar