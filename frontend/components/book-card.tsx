import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface BookCardProps {
  id: string
  title: string
  author: string
  coverImage: string
  rating: number
  reviewCount: number
  category: string
  description: string
}

export function BookCard({ id, title, author, coverImage, rating, reviewCount, category, description }: BookCardProps) {
  return (
    <Link href={`/books/${id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
        <CardContent className="p-0">
          <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg bg-muted">
            <img
              src={coverImage || "/placeholder.svg"}
              alt={`Cover of ${title}`}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 space-y-3">
            <div className="space-y-1">
              <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-sm text-muted-foreground">{author}</p>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
            <span className="text-muted-foreground">({reviewCount} reviews)</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
