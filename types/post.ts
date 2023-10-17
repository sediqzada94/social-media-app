import { Post, Profile, User } from "@prisma/client";
import { type } from "os";




export type PostWithUserWithProfile = Post & {
        user: User & {
            profile: Profile
        }
}