// src/types.ts
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  joinedDate?: string
  stats?: {
    reviewsWritten?: number
    booksRead?: number
    helpfulVotes?: number
    averageRating?: number
  }
}
