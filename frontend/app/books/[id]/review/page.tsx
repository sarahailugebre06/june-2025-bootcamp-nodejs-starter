// "use client"

// import { use } from "react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { ReviewForm } from "@/components/review-form"
// import { Button } from "@/components/ui/button"
// import { ArrowLeft } from "lucide-react"

// // Mock book data
// // const mockBooks: Record<string, { id: string; title: string; author: string }> = {
// //   "1": {
// //     id: "1",
// //     title: "Educated: A Memoir",
// //     author: "Tara Westover",
// //   },
// //   "2": {
// //     id: "2",
// //     title: "Atomic Habits",
// //     author: "James Clear",
// //   },
// // }

// export default function WriteReviewPage({ params }: { params: Promise<{ id: string }> }) {
//   const router = useRouter()
//   const { id } = use(params)
//   // const book = mockBooks[id] || mockBooks["1"]

//   // const handleSubmit = (data: { rating: number; content: string }) => {
//   //   console.log("Review submitted:", data)
//   //   // In a real app, this would make an API call
//   //   router.push(`/books/${id}`)
//   // }
// const handleSubmit = async (data: { rating: number; content: string }) => {
//   try {
//     await fetch(`/api/reviews`, {
//       method: "POST",
//       body: JSON.stringify({ bookId: book.id, ...data }),
//     });
//     router.push(`/books/${book.id}`);
//   } catch (err) {
//     console.error("Failed to submit review:", err);
//   }
// };

//   const handleCancel = () => {
//     router.back()
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-1">
//         {/* Back Button */}
//         <section className="py-6 border-b border-border">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <Button variant="ghost" asChild className="gap-2">
//               <Link href={`/books/${id}`}>
//                 <ArrowLeft className="h-4 w-4" />
//                 Back to Book
//               </Link>
//             </Button>
//           </div>
//         </section>

//         {/* Review Form */}
//         <section className="py-12">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl mx-auto space-y-6">
//               {/* Book Info */}
//               <div className="space-y-2">
//                 <h1 className="text-3xl md:text-4xl font-bold">Write a Review</h1>
//                 <p className="text-lg text-muted-foreground">
//                   for <strong>{book.title}</strong> by {book.author}
//                 </p>
//               </div>

//               {/* Review Form */}
//               <ReviewForm bookId={book.id} bookTitle={book.title} onSubmit={handleSubmit} onCancel={handleCancel} />

//               {/* Guidelines */}
//               <div className="bg-muted/30 rounded-lg p-6 space-y-4">
//                 <h3 className="font-semibold">Review Guidelines</h3>
//                 <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
//                   <li>• Be honest and constructive in your feedback</li>
//                   <li>• Focus on the book's content and how it impacted your learning</li>
//                   <li>• Avoid spoilers that might ruin the experience for others</li>
//                   <li>• Keep your review respectful and appropriate</li>
//                   <li>• Share specific examples of what you liked or didn't like</li>
//                 </ul>
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
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReviewForm } from "@/components/review-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

type Book = {
  id: string
  title: string
  author: string
}

export default function WriteReviewPage({ params }: { params: { id: string } }) {
  const id  = params.id
  const router = useRouter()
  const [book, setBook] = useState<Book | null>(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        const data = await res.json()
        setBook({
          id: data.id,
          title: data.volumeInfo.title,
          author: data.volumeInfo.authors?.join(", ") || "Unknown Author",
        })
      } catch (err) {
        console.error("Failed to fetch book:", err)
      }
    }
    fetchBook()
  }, [id])

  if (!book) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  // const handleSubmit = async (data: { rating: number; content: string }) => {
  //   try {
  //     await fetch(`/api/reviews`, {
  //       method: "POST",
  //       body: JSON.stringify({ bookId: book.id, ...data }),
  //     })
  //     router.push(`/books/${book.id}`)
  //   } catch (err) {
  //     console.error("Failed to submit review:", err)
  //   }
  // }
// const handleSubmit = async (data: { rating: number; content: string }) => {
//   try {
//     const token = localStorage.getItem('token'); // your JWT
//     const res = await fetch(`/api/reviews/${book.id}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         rating: data.rating,
//         comment: data.content,
//       }),
//     });

//     if (!res.ok) throw new Error("Failed to submit review");

//     router.push(`/books/${book.id}`);
//   } catch (err) {
//     console.error("Failed to submit review:", err);
//     alert("Failed to submit review");
//   }
// };
const handleSubmit = async (data: { rating: number; content: string }) => {
  try {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      alert("Please log in to submit a review");
      return;
    }

    const res = await fetch(`http://localhost:5000/api/reviews/${book.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        rating: data.rating,
        comment: data.content,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Failed to submit review: ${errText}`);
    }

    alert("Review submitted successfully!");
    router.push(`/books/${book.id}`);
  } catch (err) {
    console.error("Failed to submit review:", err);
    alert("Failed to submit review");
  }
};

  const handleCancel = () => router.back()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-6 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" asChild className="gap-2">
              <Link href={`/books/${book.id}`}>
                <ArrowLeft className="h-4 w-4" />
                Back to Book
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold">Write a Review</h1>
                <p className="text-lg text-muted-foreground">
                  for <strong>{book.title}</strong> by {book.author}
                </p>
              </div>

              <ReviewForm
                bookId={book.id}
                bookTitle={book.title}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold">Review Guidelines</h3>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>• Be honest and constructive in your feedback</li>
                  <li>• Focus on the book's content and how it impacted your learning</li>
                  <li>• Avoid spoilers that might ruin the experience for others</li>
                  <li>• Keep your review respectful and appropriate</li>
                  <li>• Share specific examples of what you liked or didn't like</li>
                </ul>
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
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { ReviewForm } from "@/components/review-form"
// import { Button } from "@/components/ui/button"
// import { ArrowLeft } from "lucide-react"

// export default function WriteReviewPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params)
//   const router = useRouter()
//   const [bookTitle, setBookTitle] = useState<string>("")

//   useEffect(() => {
//     const fetchBook = async () => {
//       const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
//       const data = await res.json()
//       setBookTitle(data.volumeInfo.title)
//     }
//     fetchBook()
//   }, [id])

//   const handleSubmit = (data: { rating: number; content: string }) => {
//     console.log("Review submitted:", data)
//     router.push(`/books/${id}`)
//   }

//   const handleCancel = () => router.back()

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <Button variant="ghost" asChild className="mb-6">
//           <Link href={`/books/${id}`}>
//             <ArrowLeft className="h-4 w-4" />
//             Back to Book
//           </Link>
//         </Button>

//         <div className="max-w-3xl mx-auto space-y-6">
//           <h1 className="text-3xl md:text-4xl font-bold">Write a Review</h1>
//           <p className="text-lg text-muted-foreground">
//             for <strong>{bookTitle}</strong>
//           </p>

//           <ReviewForm bookId={id} bookTitle={bookTitle} onSubmit={handleSubmit} onCancel={handleCancel} />
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }
