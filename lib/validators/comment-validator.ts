import { z } from 'zod'

export const createCommentSchema = z.object({
    replyText: z.string().min(1, { message: "The reply content should be at least one character!" }),
    file: z.string().optional()
  })

export type CommentCreateRequest = z.infer<typeof createCommentSchema>