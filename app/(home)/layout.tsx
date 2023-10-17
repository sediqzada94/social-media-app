import React from 'react'
import Sidebar from './_components/sidebar'
import Navbar from './_components/navbar'
import RightSidebar from './_components/right-side-bar'

const HomeLayout = ({
     children 
     }:
     { children: React.ReactNode
     }) => {
        return (
            <div className="h-full">
                <div className="h-14  fixed inset-y-0 w-full z-50">
                    <Navbar />
                </div>
                <div className="hidden lg:flex mt-16 h-full w-72 flex-col fixed inset-y-0 z-50">
                    <Sidebar />
                </div>
                <main className=" md:pl-72 pr-80 mt-16 h-full">
                    {children}
                </main>
                <div className="hidden md:flex h-full w-80 flex-col fixed right-0 top-16 z-50">
                   <RightSidebar />
                </div>
            </div>
        )
}

export default HomeLayout