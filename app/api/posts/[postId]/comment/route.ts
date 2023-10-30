import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { postId: string } }){
    const { replyText, file } = await req.json();
    try{
        const comment = await prisma.comment.create({
            data: {
                text: replyText,
                imageUrl: file,
                userId: '651b9fd035feca15c1665f31',
                postId: params.postId,
            }
         })
        return NextResponse.json(comment);
    }catch(error){
        console.log("COMMENT_CREATE_ERROR", error)
        return NextResponse.json({status: 500, message: "Internal server error"})
    }
    
     }
    