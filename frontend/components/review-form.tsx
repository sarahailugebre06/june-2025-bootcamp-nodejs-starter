"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

interface ReviewFormProps {
  bookId: string
  bookTitle: string
  onSubmit?: (data: { rating: number; content: string }) => void
  onCancel?: () => void
  initialRating?: number
  initialContent?: string
  isEditing?: boolean
}

export function ReviewForm({
  bookTitle,
  onSubmit,
  onCancel,
  initialRating = 0,
  initialContent = "",
  isEditing = false,
}: ReviewFormProps) {
  const [rating, setRating] = useState(initialRating)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [content, setContent] = useState(initialContent)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      alert("Please select a rating")
      return
    }

    if (content.trim().length < 50) {
      alert("Please write at least 50 characters for your review")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      if (onSubmit) {
        onSubmit({ rating, content })
      }
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Your Review" : "Write a Review"}</CardTitle>
        <CardDescription>
          Share your thoughts about <strong>{bookTitle}</strong>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating Selection */}
          <div className="space-y-3">
            <Label>Your Rating</Label>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => {
                const starValue = i + 1
                const isActive = starValue <= (hoveredRating || rating)

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHoveredRating(starValue)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        isActive ? "fill-accent text-accent" : "text-muted-foreground"
                      } transition-colors`}
                    />
                  </button>
                )
              })}
              {rating > 0 && <span className="ml-2 text-sm text-muted-foreground">({rating} stars)</span>}
            </div>
          </div>

          {/* Review Content */}
          <div className="space-y-3">
            <Label htmlFor="review-content">Your Review</Label>
            <Textarea
              id="review-content"
              placeholder="Share your thoughts about this book. What did you learn? How did it impact you? Would you recommend it to others?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="resize-none"
              required
            />
            <p className="text-sm text-muted-foreground">
              {content.length} / 50 characters minimum (
              {content.length >= 50 ? "✓" : `${50 - content.length} more needed`})
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              disabled={isSubmitting || rating === 0 || content.trim().length < 50}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : isEditing ? "Update Review" : "Submit Review"}
            </Button>
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isSubmitting}
                className="flex-1 bg-transparent"
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
