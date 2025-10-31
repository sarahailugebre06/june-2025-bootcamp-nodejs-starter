import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Edit, Trash2 } from "lucide-react"

interface UserReviewCardProps {
  id: string
  bookId: string
  bookTitle: string
  bookAuthor: string
  bookCover: string
  rating: number
  date: string
  content: string
  helpful: number
}

export function UserReviewCard({
  id,
  bookId,
  bookTitle,
  bookAuthor,
  bookCover,
  rating,
  date,
  content,
  helpful,
}: UserReviewCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Book Cover */}
          <Link href={`/books/${bookId}`} className="shrink-0">
            <div className="w-24 h-32 rounded-md overflow-hidden bg-muted">
              <img src={bookCover || "/placeholder.svg"} alt={bookTitle} className="w-full h-full object-cover" />
            </div>
          </Link>

          {/* Review Content */}
          <div className="flex-1 space-y-3">
            <div>
              <Link href={`/books/${bookId}`} className="hover:text-primary transition-colors">
                <h3 className="font-semibold text-lg">{bookTitle}</h3>
              </Link>
              <p className="text-sm text-muted-foreground">{bookAuthor}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>

            <p className="text-sm text-foreground line-clamp-3 leading-relaxed">{content}</p>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {helpful} helpful
              </Badge>
            </div>
          </div>

          {/* Actions */}
          <div className="flex sm:flex-col gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Edit className="h-4 w-4" />
              <span className="hidden sm:inline">Edit</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 text-destructive hover:text-destructive bg-transparent"
            >
              <Trash2 className="h-4 w-4" />
              <span className="hidden sm:inline">Delete</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
