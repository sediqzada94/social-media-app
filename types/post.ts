import {  Post, Profile, User, Like, Comment, Repost } from "@prisma/client";

export type PostWithData = Post & {
        user: User & {
            profile: Profile | null
        },
        likes: Like[] | [],
        comments: Comment[] | [],
        reposts: Repost[] | []
}