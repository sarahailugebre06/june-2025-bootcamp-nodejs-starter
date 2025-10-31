// "use client"

// import { use } from "react"
// import Link from "next/link"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { ReviewCard } from "@/components/review-card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Star, ArrowLeft, BookOpen, Calendar, User } from "lucide-react"

// // Mock data - will be replaced with API calls
// const mockBookDetails: Record<
//   string,
//   {
//     id: string
//     title: string
//     author: string
//     coverImage: string
//     rating: number
//     reviewCount: number
//     category: string
//     description: string
//     publishedDate: string
//     pages: number
//     isbn: string
//     publisher: string
//     fullDescription: string
//     ratingBreakdown: { stars: number; count: number; percentage: number }[]
//     reviews: {
//       id: string
//       userName: string
//       userAvatar?: string
//       rating: number
//       date: string
//       content: string
//       helpful: number
//     }[]
//   }
// // > = {
// //   "1": {
// //     id: "1",
// //     title: "Educated: A Memoir",
// //     author: "Tara Westover",
// //     coverImage: "/educated-memoir-book-cover.jpg",
// //     rating: 4.8,
// //     reviewCount: 234,
// //     category: "Biography",
// //     description:
// //       "A powerful memoir about a young woman who leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
// //     publishedDate: "February 20, 2018",
// //     pages: 334,
// //     isbn: "978-0399590504",
// //     publisher: "Random House",
// //     fullDescription:
// //       "Tara Westover was seventeen the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her 'head-for-the-hills bag'. In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father's junkyard. Her father forbade hospitals, so Tara never saw a doctor or nurse. Gashes and concussions, even burns from explosions, were all treated at home with herbalism. The family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara's older brothers became violent. When another brother got himself into college, Tara decided to try a new kind of life. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University. Only then would she wonder if she'd traveled too far, if there was still a way home.",
// //     ratingBreakdown: [
// //       { stars: 5, count: 180, percentage: 77 },
// //       { stars: 4, count: 40, percentage: 17 },
// //       { stars: 3, count: 10, percentage: 4 },
// //       { stars: 2, count: 3, percentage: 1 },
// //       { stars: 1, count: 1, percentage: 1 },
// //     ],
// //     reviews: [
// //       {
// //         id: "r1",
// //         userName: "Sarah Johnson",
// //         rating: 5,
// //         date: "March 15, 2024",
// //         content:
// //           "This book completely changed my perspective on education and family. Tara's journey is both heartbreaking and inspiring. Her resilience and determination to pursue knowledge despite overwhelming obstacles is truly remarkable. A must-read for anyone interested in memoirs or education.",
// //         helpful: 45,
// //       },
// //       {
// //         id: "r2",
// //         userName: "Michael Chen",
// //         rating: 5,
// //         date: "March 10, 2024",
// //         content:
// //           "One of the most powerful memoirs I've ever read. Westover's writing is honest and raw, never shying away from the difficult truths of her upbringing. The book raises important questions about family loyalty, education, and self-discovery.",
// //         helpful: 32,
// //       },
// //       {
// //         id: "r3",
// //         userName: "Emily Rodriguez",
// //         rating: 4,
// //         date: "March 5, 2024",
// //         content:
// //           "A compelling and well-written memoir that highlights the transformative power of education. While some parts were difficult to read due to the family dynamics, the overall message is incredibly inspiring.",
// //         helpful: 28,
// //       },
// //     ],
// //   },
// // }
// >
// export default function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params)
  
//   const book = mockBookDetails[id] || mockBookDetails["1"]
// const fetchBookDetails = async (id: string) => {
//   const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
//   const data = await res.json();

//   return {
//     id: data.id,
//     title: data.volumeInfo.title,
//     author: data.volumeInfo.authors?.join(", ") || "Unknown Author",
//     coverImage: data.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg",
//     rating: data.volumeInfo.averageRating || 0,
//     reviewCount: data.volumeInfo.ratingsCount || 0,
//     category: data.volumeInfo.categories?.[0] || "Uncategorized",
//     description: data.volumeInfo.description || "No description available",
//     publishedDate: data.volumeInfo.publishedDate || "Unknown",
//     pages: data.volumeInfo.pageCount || 0,
//     publisher: data.volumeInfo.publisher || "Unknown",
//     isbn: data.volumeInfo.industryIdentifiers?.[0]?.identifier || "Unknown",
//     fullDescription: data.volumeInfo.description || "No description available",
//     // for rating breakdown and reviews, you can mock for now
//     ratingBreakdown: [
//       { stars: 5, count: 0, percentage: 0 },
//       { stars: 4, count: 0, percentage: 0 },
//       { stars: 3, count: 0, percentage: 0 },
//       { stars: 2, count: 0, percentage: 0 },
//       { stars: 1, count: 0, percentage: 0 },
//     ],
//     reviews: [], // you can fetch from your backend if available
//   };
// };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-1">
//         {/* Back Button */}
//         <section className="py-6 border-b border-border">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <Button variant="ghost" asChild className="gap-2">
//               <Link href="/books">
//                 <ArrowLeft className="h-4 w-4" />
//                 Back to Books
//               </Link>
//             </Button>
//           </div>
//         </section>

//         {/* Book Details */}
//         <section className="py-12">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//               {/* Left Column - Book Cover */}
//               <div className="lg:col-span-1">
//                 <div className="sticky top-24">
//                   <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted shadow-xl">
//                     <img
//                       src={book.coverImage || "/placeholder.svg"}
//                       alt={`Cover of ${book.title}`}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div className="mt-6 space-y-3">
//                     <Button className="w-full" size="lg">
//                       Write a Review
//                     </Button>
//                     <Button variant="outline" className="w-full bg-transparent" size="lg">
//                       Add to Reading List
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column - Book Info */}
//               <div className="lg:col-span-2 space-y-8">
//                 {/* Title and Author */}
//                 <div className="space-y-4">
//                   <div className="flex flex-wrap items-center gap-3">
//                     <Badge variant="secondary">{book.category}</Badge>
//                   </div>
//                   <h1 className="text-3xl md:text-4xl font-bold text-balance">{book.title}</h1>
//                   <p className="text-xl text-muted-foreground">by {book.author}</p>
//                 </div>

//                 {/* Rating Overview */}
//                 <Card>
//                   <CardContent className="pt-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       {/* Average Rating */}
//                       <div className="flex flex-col items-center justify-center text-center space-y-2">
//                         <div className="text-5xl font-bold text-primary">{book.rating}</div>
//                         <div className="flex items-center gap-1">
//                           {Array.from({ length: 5 }).map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`h-5 w-5 ${
//                                 i < Math.floor(book.rating) ? "fill-accent text-accent" : "text-muted-foreground"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                         <p className="text-sm text-muted-foreground">{book.reviewCount} reviews</p>
//                       </div>

//                       {/* Rating Breakdown */}
//                       <div className="space-y-2">
//                         {book.ratingBreakdown.map((item) => (
//                           <div key={item.stars} className="flex items-center gap-3">
//                             <span className="text-sm font-medium w-12">{item.stars} star</span>
//                             <Progress value={item.percentage} className="flex-1" />
//                             <span className="text-sm text-muted-foreground w-12 text-right">{item.count}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Book Details */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   <Card>
//                     <CardContent className="pt-6 text-center space-y-2">
//                       <Calendar className="h-5 w-5 mx-auto text-muted-foreground" />
//                       <p className="text-sm font-medium">Published</p>
//                       <p className="text-xs text-muted-foreground">{book.publishedDate}</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardContent className="pt-6 text-center space-y-2">
//                       <BookOpen className="h-5 w-5 mx-auto text-muted-foreground" />
//                       <p className="text-sm font-medium">Pages</p>
//                       <p className="text-xs text-muted-foreground">{book.pages}</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardContent className="pt-6 text-center space-y-2">
//                       <User className="h-5 w-5 mx-auto text-muted-foreground" />
//                       <p className="text-sm font-medium">Publisher</p>
//                       <p className="text-xs text-muted-foreground">{book.publisher}</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardContent className="pt-6 text-center space-y-2">
//                       <BookOpen className="h-5 w-5 mx-auto text-muted-foreground" />
//                       <p className="text-sm font-medium">ISBN</p>
//                       <p className="text-xs text-muted-foreground">{book.isbn}</p>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 {/* Description */}
//                 <div className="space-y-4">
//                   <h2 className="text-2xl font-bold">About This Book</h2>
//                   <p className="text-foreground leading-relaxed">{book.fullDescription}</p>
//                 </div>

//                 {/* Reviews Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center justify-between">
//                     <h2 className="text-2xl font-bold">Reader Reviews</h2>
//                     <Link href={`/books/${book.id}/write-review`}>
//   <Button>Write a Review</Button>
// </Link>
//                   </div>
                        
//                   <div className="space-y-4">
//                     {book.reviews.map((review) => (
//                       <ReviewCard key={review.id} {...review} />
//                     ))}
//                   </div>

//                   {book.reviewCount > book.reviews.length && (
//                     <div className="text-center pt-4">
//                       <Button variant="outline">Load More Reviews</Button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReviewCard } from "@/components/review-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Star, ArrowLeft, BookOpen, Calendar, User } from "lucide-react"

type RatingBreakdown = {
  stars: number
  count: number
  percentage: number
}

type Review = {
  id: string
  userName: string
  userAvatar?: string
  rating: number
  date: string
  content: string
  helpful: number
}

type Book = {
  id: string
  title: string
  author: string
  coverImage: string
  rating: number
  reviewCount: number
  category: string
  description: string
  publishedDate: string
  pages: number
  isbn: string
  publisher: string
  fullDescription: string
  ratingBreakdown: RatingBreakdown[]
  reviews: Review[]
}

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const { id } = params
  const [book, setBook] = useState<Book | null>(null)

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        const data = await res.json()

        setBook({
          id: data.id,
          title: data.volumeInfo.title,
          author: data.volumeInfo.authors?.join(", ") || "Unknown Author",
          coverImage: data.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg",
          rating: data.volumeInfo.averageRating || 0,
          reviewCount: data.volumeInfo.ratingsCount || 0,
          category: data.volumeInfo.categories?.[0] || "Uncategorized",
          description: data.volumeInfo.description || "No description available",
          publishedDate: data.volumeInfo.publishedDate || "Unknown",
          pages: data.volumeInfo.pageCount || 0,
          isbn: data.volumeInfo.industryIdentifiers?.[0]?.identifier || "Unknown",
          publisher: data.volumeInfo.publisher || "Unknown",
          fullDescription: data.volumeInfo.description || "No description available",
          ratingBreakdown: [
            { stars: 5, count: 0, percentage: 0 },
            { stars: 4, count: 0, percentage: 0 },
            { stars: 3, count: 0, percentage: 0 },
            { stars: 2, count: 0, percentage: 0 },
            { stars: 1, count: 0, percentage: 0 },
          ],
          reviews: [],
        })
      } catch (error) {
        console.error("Failed to fetch book:", error)
      }
    }

    fetchBookDetails()
  }, [id])

  if (!book) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Back Button */}
        <section className="py-6 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/books">
                <ArrowLeft className="h-4 w-4" />
                Back to Books
              </Link>
            </Button>
          </div>
        </section>

        {/* Book Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Cover */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted shadow-xl">
                    <img
                      src={book.coverImage}
                      alt={`Cover of ${book.title}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-6 space-y-3">
                    <Button className="w-full" size="lg">
                      Write a Review
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      Add to Reading List
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column - Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Title */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary">{book.category}</Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-balance">{book.title}</h1>
                  <p className="text-xl text-muted-foreground">by {book.author}</p>
                </div>

                {/* Rating Overview */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="text-5xl font-bold text-primary">{book.rating}</div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(book.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{book.reviewCount} reviews</p>
                      </div>

                      <div className="space-y-2">
                        {book.ratingBreakdown.map((item) => (
                          <div key={item.stars} className="flex items-center gap-3">
                            <span className="text-sm font-medium w-12">{item.stars} star</span>
                            <Progress value={item.percentage} className="flex-1" />
                            <span className="text-sm text-muted-foreground w-12 text-right">{item.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Description */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">About This Book</h2>
                  <p className="text-foreground leading-relaxed">{book.fullDescription}</p>
                </div>

                {/* Reviews */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Reader Reviews</h2>
                    <Link href={`/books/${book.id}/review`}>
                      <Button>Write a Review</Button>
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {book.reviews.map((review) => (
                      <ReviewCard key={review.id} {...review} />
                    ))}
                  </div>

                  {book.reviewCount > book.reviews.length && (
                    <div className="text-center pt-4">
                      <Button variant="outline">Load More Reviews</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// "use client"

// import { use,useEffect,useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { ReviewCard } from "@/components/review-card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Star, ArrowLeft, BookOpen, Calendar, User } from "lucide-react"

// type Book = {
//   id: string
//   title: string
//   authors: string[]
//   categories: string[]
//   description: string
//   coverImage: string
//   rating: number
//   reviewCount: number
//   publishedDate?: string
//   pages?: number
//   isbn?: string
//   publisher?: string
//   fullDescription?: string
//   ratingBreakdown?: { stars: number; count: number; percentage: number }[]
//   reviews?: {
//     id: string
//     userName: string
//     userAvatar?: string
//     rating: number
//     date: string
//     content: string
//     helpful: number
//   }[]
// }

// export default function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params)
//   const router = useRouter()
//   const [book, setBook] = useState<Book | null>(null)

//   useEffect(() => {
//     const fetchBook = async () => {
//       const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
//       const data = await res.json()
//       const fetchedBook: Book = {
//         id: data.id,
//         title: data.volumeInfo.title,
//         authors: data.volumeInfo.authors || ["Unknown"],
//         categories: data.volumeInfo.categories || ["Uncategorized"],
//         description: data.volumeInfo.description || "",
//         coverImage: data.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg",
//         rating: data.volumeInfo.averageRating || 0,
//         reviewCount: data.volumeInfo.ratingsCount || 0,
//       }
//       setBook(fetchedBook)
//     }
//     fetchBook()
//   }, [id])

//   if (!book) return <p>Loading book details...</p>

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <Button variant="ghost" asChild className="mb-6">
//           <Link href="/books">
//             <ArrowLeft className="h-4 w-4" />
//             Back to Books
//           </Link>
//         </Button>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           <div className="lg:col-span-1">
//             <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted shadow">
//               <img src={book.coverImage} alt={book.title} className="object-cover w-full h-full" />
//             </div>
//           </div>

//           <div className="lg:col-span-2 space-y-6">
//             <Badge variant="secondary">{book.categories[0]}</Badge>
//             <h1 className="text-3xl font-bold">{book.title}</h1>
//             <p className="text-lg text-muted-foreground">by {book.authors.join(", ")}</p>

//             <Card>
//               <CardContent className="pt-6">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="text-5xl font-bold text-primary">{book.rating}</div>
//                   <div className="flex items-center gap-1">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`h-5 w-5 ${i < Math.floor(book.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
//                       />
//                     ))}
//                   </div>
//                   <p className="text-sm text-muted-foreground">{book.reviewCount} reviews</p>
//                 </div>
//               </CardContent>
//             </Card>

//             <div>
//               <h2 className="text-2xl font-bold">About This Book</h2>
//               <p>{book.description}</p>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }
