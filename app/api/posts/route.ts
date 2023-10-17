import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req:Request) {
     const posts = await prisma.post.findMany({})
     return NextResponse.json(posts)
}

export async function POST(req:Request) {
    
     const { privacy, text, file } = await req.json()
     try{
        const user = await prisma.post.create({
            data:{
                text,
                privacy,
                userId: '651b9fd035feca15c1665f31',
                images: {
                    create: {
                        imageUrl: file
                    }
                }
    
            }
         })
         return NextResponse.json(user)
     }catch(error){
         console.log("POST_CREATE_ERROR", error)
         return NextResponse.json({status: 500, message: "Internal server error"})
     }
   

}