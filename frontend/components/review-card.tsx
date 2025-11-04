import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface ReviewCardProps {
  id: string
  userName: string
  userAvatar?: string
  rating: number
  date: string
  content: string
  helpful: number
}

export function ReviewCard({ userName, userAvatar, rating, date, content, helpful }: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={userAvatar || "/placeholder.svg"} alt={userName} />
              <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{userName}</p>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted-foreground"}`} />
            ))}
          </div>
        </div>

        <p className="text-foreground leading-relaxed">{content}</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <button className="hover:text-foreground transition-colors">Helpful ({helpful})</button>
        </div>
      </CardContent>
    </Card>
  )
}
