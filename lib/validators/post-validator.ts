import { z } from 'zod'

export const createPostSchema = z.object({
    privacy: z.enum(['PUBLIC', 'FRIENDS', 'PRIVATE']),
    text: z.string().min(1, { message: "The post content should be at least one character!" }),
    file: z.string().optional()
  })

export type PostCreateRequest = z.infer<typeof createPostSchema>