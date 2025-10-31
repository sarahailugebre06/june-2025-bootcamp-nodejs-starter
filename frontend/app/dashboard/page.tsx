// "use client"

// import { useState } from "react"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { UserReviewCard } from "@/components/user-review-card"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { BookOpen, Star, MessageSquare, TrendingUp, Edit } from "lucide-react"
// import { useAuth } from "@/src/context/AuthContext";
// // Mock user data
// const mockUser = {
//   name: "Sarah Johnson",
//   email: "sarah.johnson@example.com",
//   avatar: "/placeholder.svg",
//   joinedDate: "January 2024",
//   stats: {
//     reviewsWritten: 12,
//     booksRead: 28,
//     helpfulVotes: 156,
//     averageRating: 4.3,
//   },
// }

// // Mock user reviews
// const mockUserReviews = [
//   {
//     id: "ur1",
//     bookId: "1",
//     bookTitle: "Educated: A Memoir",
//     bookAuthor: "Tara Westover",
//     bookCover: "/educated-memoir-book-cover.jpg",
//     rating: 5,
//     date: "March 15, 2024",
//     content:
//       "This book completely changed my perspective on education and family. Tara's journey is both heartbreaking and inspiring. Her resilience and determination to pursue knowledge despite overwhelming obstacles is truly remarkable.",
//     helpful: 45,
//   },
//   {
//     id: "ur2",
//     bookId: "2",
//     bookTitle: "Atomic Habits",
//     bookAuthor: "James Clear",
//     bookCover: "/atomic-habits-cover.png",
//     rating: 5,
//     date: "March 10, 2024",
//     content:
//       "An incredibly practical guide to building better habits. The framework is simple yet powerful, and I've already started implementing the strategies in my daily life. Highly recommend for anyone looking to make positive changes.",
//     helpful: 32,
//   },
//   {
//     id: "ur3",
//     bookId: "3",
//     bookTitle: "Sapiens: A Brief History of Humankind",
//     bookAuthor: "Yuval Noah Harari",
//     bookCover: "/sapiens-book-cover.png",
//     rating: 4,
//     date: "March 5, 2024",
//     content:
//       "A fascinating exploration of human history that challenges many assumptions. Harari's writing is engaging and thought-provoking, though some sections felt a bit dense. Overall, a worthwhile read for anyone interested in understanding humanity's journey.",
//     helpful: 28,
//   },
// ]

// export default function DashboardPage() {
//    const { user, logout } = useAuth(); // get current user and logout
//   const [activeTab, setActiveTab] = useState("reviews")

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-1">
//         {/* Profile Header */}
//         <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
//               {/* Avatar */}
//               <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
//                 <AvatarImage src={mockUser.avatar || "/placeholder.svg"} alt={mockUser.name} />
//                 <AvatarFallback className="text-2xl">{mockUser.name.charAt(0)}</AvatarFallback>
//               </Avatar>

//               {/* User Info */}
//               <div className="flex-1 space-y-2">
//                 <h1 className="text-3xl md:text-4xl font-bold">{mockUser.name}</h1>
//                 <p className="text-muted-foreground">{mockUser.email}</p>
//                 <p className="text-sm text-muted-foreground">Member since {mockUser.joinedDate}</p>
//               </div>

//               {/* Edit Profile Button */}
//               <Button variant="outline" className="gap-2 bg-transparent">
//                 <Edit className="h-4 w-4" />
//                 Edit Profile
//               </Button>
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-8 border-b border-border">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <Card>
//                 <CardContent className="pt-6 text-center space-y-2">
//                   <MessageSquare className="h-6 w-6 mx-auto text-primary" />
//                   <div className="text-2xl font-bold text-primary">{mockUser.stats.reviewsWritten}</div>
//                   <p className="text-sm text-muted-foreground">Reviews Written</p>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="pt-6 text-center space-y-2">
//                   <BookOpen className="h-6 w-6 mx-auto text-accent" />
//                   <div className="text-2xl font-bold text-accent">{mockUser.stats.booksRead}</div>
//                   <p className="text-sm text-muted-foreground">Books Read</p>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="pt-6 text-center space-y-2">
//                   <TrendingUp className="h-6 w-6 mx-auto text-primary" />
//                   <div className="text-2xl font-bold text-primary">{mockUser.stats.helpfulVotes}</div>
//                   <p className="text-sm text-muted-foreground">Helpful Votes</p>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="pt-6 text-center space-y-2">
//                   <Star className="h-6 w-6 mx-auto text-accent" />
//                   <div className="text-2xl font-bold text-accent">{mockUser.stats.averageRating}</div>
//                   <p className="text-sm text-muted-foreground">Avg Rating</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* Content Tabs */}
//         <section className="py-12">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
//               <TabsList className="grid w-full max-w-md grid-cols-2">
//                 <TabsTrigger value="reviews">My Reviews</TabsTrigger>
//                 <TabsTrigger value="reading-list">Reading List</TabsTrigger>
//               </TabsList>

//               <TabsContent value="reviews" className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-2xl font-bold">My Reviews ({mockUserReviews.length})</h2>
//                   <Button>Write New Review</Button>
//                 </div>

//                 <div className="space-y-4">
//                   {mockUserReviews.map((review) => (
//                     <UserReviewCard key={review.id} {...review} />
//                   ))}
//                 </div>
//               </TabsContent>

//               <TabsContent value="reading-list" className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-2xl font-bold">Reading List</h2>
//                   <Button variant="outline">Browse Books</Button>
//                 </div>

//                 <div className="text-center py-16 space-y-4">
//                   <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto">
//                     <BookOpen className="h-8 w-8 text-muted-foreground" />
//                   </div>
//                   <div className="space-y-2">
//                     <h3 className="text-xl font-semibold">Your reading list is empty</h3>
//                     <p className="text-muted-foreground max-w-md mx-auto">
//                       Start adding books you want to read to keep track of your learning journey.
//                     </p>
//                   </div>
//                   <Button>Explore Books</Button>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserReviewCard } from "@/components/user-review-card"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Star, MessageSquare, TrendingUp, Edit } from "lucide-react"
import { useAuth } from "@/src/context/AuthContext"

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState("reviews")
  const [reviews, setReviews] = useState<any[]>([])

  // Fetch user reviews dynamically
  useEffect(() => {
    if (!user) return

    const fetchReviews = async () => {
      try {
        // const res = await fetch(`/api/reviews?userId=${user.id}`)
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
const res = await fetch("http://localhost:5000/api/reviews", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

        const data = await res.json()
        setReviews(data)
      } catch (err) {
        console.error("Failed to fetch reviews", err)
      }
    }

    fetchReviews()
  }, [user])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Please log in to access your dashboard.</p>
      </div>
    )
  }

  // Use mock stats if backend does not provide stats yet
  const stats = user.stats || {
    reviewsWritten: reviews.length,
    booksRead: 0,
    helpfulVotes: 0,
    averageRating: 0,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Profile Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Avatar */}
              <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              {/* User Info */}
              <div className="flex-1 space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-sm text-muted-foreground">
                  Member since {user.joinedDate || "N/A"}
                </p>
              </div>

              {/* Edit Profile Button */}
              <Button variant="outline" className="gap-2 bg-transparent">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6 text-center space-y-2">
                  <MessageSquare className="h-6 w-6 mx-auto text-primary" />
                  <div className="text-2xl font-bold text-primary">{stats.reviewsWritten}</div>
                  <p className="text-sm text-muted-foreground">Reviews Written</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center space-y-2">
                  <BookOpen className="h-6 w-6 mx-auto text-accent" />
                  <div className="text-2xl font-bold text-accent">{stats.booksRead}</div>
                  <p className="text-sm text-muted-foreground">Books Read</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center space-y-2">
                  <TrendingUp className="h-6 w-6 mx-auto text-primary" />
                  <div className="text-2xl font-bold text-primary">{stats.helpfulVotes}</div>
                  <p className="text-sm text-muted-foreground">Helpful Votes</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center space-y-2">
                  <Star className="h-6 w-6 mx-auto text-accent" />
                  <div className="text-2xl font-bold text-accent">{stats.averageRating}</div>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="reviews">My Reviews</TabsTrigger>
                <TabsTrigger value="reading-list">Reading List</TabsTrigger>
              </TabsList>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">My Reviews ({reviews.length})</h2>
                  <Button>Write New Review</Button>
                </div>

                <div className="space-y-4">
                  {reviews.length > 0 ? (
                    reviews.map((review) => <UserReviewCard key={review.id} {...review} />)
                  ) : (
                    <p className="text-muted-foreground">You haven't written any reviews yet.</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="reading-list" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Reading List</h2>
                  <Button variant="outline">Browse Books</Button>
                </div>

                <div className="text-center py-16 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                    <BookOpen className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Your reading list is empty</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Start adding books you want to read to keep track of your learning journey.
                    </p>
                  </div>
                  <Button>Explore Books</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
