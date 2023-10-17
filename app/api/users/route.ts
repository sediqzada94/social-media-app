import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req:Request) {
     const users = await prisma.user.findMany({})
     return NextResponse.json({ status: 200, data: JSON.stringify(users)})
}

export async function POST(req:Request) {
     return NextResponse.json(req)
     const user = await prisma.user.findMany({})
     return NextResponse.json(user)

}