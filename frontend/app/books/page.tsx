// "use client"

// import { useState,useEffect } from "react"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { BookCard } from "@/components/book-card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Search, SlidersHorizontal } from "lucide-react"

// // Mock data - will be replaced with API calls
// // const mockBooks = [
// //   {
// //     id: "1",
// //     title: "Educated: A Memoir",
// //     author: "Tara Westover",
// //     coverImage: "/educated-memoir-book-cover.jpg",
// //     rating: 4.8,
// //     reviewCount: 234,
// //     category: "Biography",
// //     description:
// //       "A powerful memoir about a young woman who leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
// //   },
// //   {
// //     id: "2",
// //     title: "Atomic Habits",
// //     author: "James Clear",
// //     coverImage: "/atomic-habits-cover.png",
// //     rating: 4.7,
// //     reviewCount: 456,
// //     category: "Self-Help",
// //     description:
// //       "An easy and proven way to build good habits and break bad ones through tiny changes that deliver remarkable results.",
// //   },
// //   {
// //     id: "3",
// //     title: "Sapiens: A Brief History of Humankind",
// //     author: "Yuval Noah Harari",
// //     coverImage: "/sapiens-book-cover.png",
// //     rating: 4.6,
// //     reviewCount: 389,
// //     category: "History",
// //     description:
// //       "A groundbreaking narrative of humanity's creation and evolution that explores how biology and history have defined us.",
// //   },
// //   {
// //     id: "4",
// //     title: "Thinking, Fast and Slow",
// //     author: "Daniel Kahneman",
// //     coverImage: "/thinking-fast-slow-book-cover.jpg",
// //     rating: 4.5,
// //     reviewCount: 312,
// //     category: "Psychology",
// //     description:
// //       "A comprehensive look at the two systems that drive the way we think and make choices, and how we can tap into the benefits of slow thinking.",
// //   },
// //   {
// //     id: "5",
// //     title: "The Power of Now",
// //     author: "Eckhart Tolle",
// //     coverImage: "/power-of-now-book-cover.jpg",
// //     rating: 4.4,
// //     reviewCount: 278,
// //     category: "Spirituality",
// //     description:
// //       "A guide to spiritual enlightenment that shows readers how to live in the present moment and find inner peace.",
// //   },
// //   {
// //     id: "6",
// //     title: "Mindset: The New Psychology of Success",
// //     author: "Carol S. Dweck",
// //     coverImage: "/mindset-psychology-book-cover.jpg",
// //     rating: 4.6,
// //     reviewCount: 345,
// //     category: "Psychology",
// //     description: "Explores the power of our mindset and how a growth mindset can lead to success in all areas of life.",
// //   },
// //   {
// //     id: "7",
// //     title: "The 7 Habits of Highly Effective People",
// //     author: "Stephen R. Covey",
// //     coverImage: "/7-habits-effective-people-book-cover.jpg",
// //     rating: 4.7,
// //     reviewCount: 421,
// //     category: "Self-Help",
// //     description:
// //       "A holistic approach for solving personal and professional problems through seven foundational principles.",
// //   },
// //   {
// //     id: "8",
// //     title: "Man's Search for Meaning",
// //     author: "Viktor E. Frankl",
// //     coverImage: "/mans-search-meaning-book-cover.jpg",
// //     rating: 4.9,
// //     reviewCount: 512,
// //     category: "Philosophy",
// //     description:
// //       "A psychiatrist's memoir of survival in Nazi death camps and his psychotherapeutic method of finding meaning in life.",
// //   },
// //   {
// //     id: "9",
// //     title: "The Lean Startup",
// //     author: "Eric Ries",
// //     coverImage: "/lean-startup-book-cover.jpg",
// //     rating: 4.3,
// //     reviewCount: 267,
// //     category: "Business",
// //     description:
// //       "A new approach to business that's being adopted around the world, changing the way companies are built and new products are launched.",
// //   },
// // ]
// // 🧩 Define the Book type
// interface Book {
//   id: string
//   title: string
//   author: string
//   coverImage: string
//   rating: number
//   reviewCount: number
//   category: string
//   description: string
// }
// export default function BooksPage() {
//  const [books, setBooks] = useState<Book[]>([])
//   const [searchQuery, setSearchQuery] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [sortBy, setSortBy] = useState("rating")
//  const [loading, setLoading] = useState(false)
//   //   useEffect(() => {
//   //   fetch(`http://localhost:5000/api/books/search?q=${searchQuery || "education"}`)
//   //     .then((res) => res.json())
//   //     .then((data) => setBooks(data))
//   //     .catch((err) => console.error("Error fetching books:", err))
//   // }, [searchQuery])
// useEffect(() => {
//     async function fetchBooks() {
//       try {
//         setLoading(true)
//         const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=education&maxResults=20`)
//         const data = await res.json()

//         const mappedBooks: Book[] = data.items.map((item: any) => ({
//           id: item.id,
//           title: item.volumeInfo.title || "No title",
//           author: item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "Unknown",
//           coverImage: item.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg",
//           rating: item.volumeInfo.averageRating || 0,
//           reviewCount: item.volumeInfo.ratingsCount || 0,
//           category: item.volumeInfo.categories ? item.volumeInfo.categories[0] : "Uncategorized",
//           description: item.volumeInfo.description || "No description available",
//         }))

//         setBooks(mappedBooks)
//       } catch (error) {
//         console.error("Failed to fetch books:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchBooks()
//   }, [])
//   const categories = [
//     "all",
//     "Biography",
//     "Self-Help",
//     "History",
//     "Psychology",
//     "Spirituality",
//     "Philosophy",
//     "Business",
//   ]

//   // const filteredBooks = mockbooks
//   //   .filter((book) => {
//   //     const matchesSearch =
//   //       book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   //       book.author.toLowerCase().includes(searchQuery.toLowerCase())
//   //     const matchesCategory = selectedCategory === "all" || book.category === selectedCategory
//   //     return matchesSearch && matchesCategory
//   //   })
//   //   .sort((a, b) => {
//   //     if (sortBy === "rating") return b.rating - a.rating
//   //     if (sortBy === "reviews") return b.reviewCount - a.reviewCount
//   //     return 0
//   //   })
//   const filteredBooks = books
//     .filter((book) => {
//       const matchesSearch =
//         book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         book.author.toLowerCase().includes(searchQuery.toLowerCase())
//       const matchesCategory = selectedCategory === "all" || book.category === selectedCategory
//       return matchesSearch && matchesCategory
//     })
//     .sort((a, b) => {
//       if (sortBy === "rating") return b.rating - a.rating
//       if (sortBy === "reviews") return b.reviewCount - a.reviewCount
//       return 0
//     })

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-1">
//         {/* Page Header */}
//         <section className="py-12 md:py-16 bg-muted/30 border-b border-border">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl">
//               <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Educational Books</h1>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Discover inspiring and educational books recommended by our community of learners.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Filters Section */}
//         <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col lg:flex-row gap-4">
//               {/* Search */}
//               <div className="flex-1 relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search by title or author..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>

//               {/* Category Filter */}
//               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                 <SelectTrigger className="w-full lg:w-[200px]">
//                   <SelectValue placeholder="Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map((category) => (
//                     <SelectItem key={category} value={category}>
//                       {category === "all" ? "All Categories" : category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               {/* Sort By */}
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-full lg:w-[200px]">
//                   <SlidersHorizontal className="h-4 w-4 mr-2" />
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="rating">Highest Rated</SelectItem>
//                   <SelectItem value="reviews">Most Reviewed</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Results Count */}
//             <div className="mt-4">
//               <p className="text-sm text-muted-foreground">
//                 Showing {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Books Grid */}
//         <section className="py-12">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             {filteredBooks.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredBooks.map((book) => (
//                   <BookCard key={book.id} {...book} />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-16">
//                 <p className="text-lg text-muted-foreground mb-4">No books found matching your criteria.</p>
//                 <Button
//                   variant="outline"
//                   onClick={() => {
//                     setSearchQuery("")
//                     setSelectedCategory("all")
//                   }}
//                 >
//                   Clear Filters
//                 </Button>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   )
// }
// "use client";

// import { useEffect, useState } from "react";
// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { BookCard } from "@/components/book-card";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Search, SlidersHorizontal } from "lucide-react";

// interface Book {
//   id: string;
//   title: string;
//   authors: string[];
//   coverImage: string;
//   rating: number;
//   reviewCount: number;
//   category: string;
//   description: string;
// }

// export default function BooksPage() {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("rating");

//   const categories = [
//     "all",
//     "Biography",
//     "Self-Help",
//     "History",
//     "Psychology",
//     "Spirituality",
//     "Philosophy",
//     "Business",
//     "Education",
//   ];

//   // Fetch books from Google Books API
//   const fetchBooks = async (query: string) => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
//           query || "education"
//         )}&maxResults=40`
//       );
//       const data = await res.json();

//       const mappedBooks: Book[] = data.items?.map((item: any) => ({
//         id: item.id,
//         title: item.volumeInfo.title,
//         authors: item.volumeInfo.authors || ["Unknown Author"],
//         coverImage: item.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg",
//         rating: item.volumeInfo.averageRating || 0,
//         reviewCount: item.volumeInfo.ratingsCount || 0,
//         category: item.volumeInfo.categories?.[0] || "Uncategorized",
//         description: item.volumeInfo.description || "No description available",
//       })) || [];

//       setBooks(mappedBooks);
//     } catch (err) {
//       console.error("Failed to fetch books:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks(searchQuery);
//   }, [searchQuery]);

//   // Filtered & Sorted books
//   const filteredBooks = books
//     .filter((book) => selectedCategory === "all" || book.category === selectedCategory)
//     .sort((a, b) => {
//       if (sortBy === "rating") return b.rating - a.rating;
//       if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
//       return 0;
//     });

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-1">
//         <section className="py-12 md:py-16 bg-muted/30 border-b border-border">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Educational Books</h1>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Discover inspiring and educational books recommended by our community of learners.
//             </p>
//           </div>
//         </section>

//         {/* Filters */}
//         <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search by title or author..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10"
//               />
//             </div>

//             {/* Category Filter */}
//             <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//               <SelectTrigger className="w-full lg:w-[200px]">
//                 <SelectValue placeholder="Category" />
//               </SelectTrigger>
//               <SelectContent>
//                 {categories.map((category) => (
//                   <SelectItem key={category} value={category}>
//                     {category === "all" ? "All Categories" : category}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {/* Sort By */}
//             <Select value={sortBy} onValueChange={setSortBy}>
//               <SelectTrigger className="w-full lg:w-[200px]">
//                 <SlidersHorizontal className="h-4 w-4 mr-2" />
//                 <SelectValue placeholder="Sort by" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="rating">Highest Rated</SelectItem>
//                 <SelectItem value="reviews">Most Reviewed</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </section>

//         {/* Books Grid */}
//         <section className="py-12">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             {loading ? (
//               <p className="text-center text-muted-foreground">Loading books...</p>
//             ) : filteredBooks.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredBooks.map((book) => (
//                   <BookCard
//                     key={book.id}
//                      id={book.id}  
//                     title={book.title}
//                     author={book.authors.join(", ")}
//                     coverImage={book.coverImage}
//                     rating={book.rating}
//                     reviewCount={book.reviewCount}
//                     description={book.description}
//                      category={book.category}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <p className="text-center text-muted-foreground">No books found.</p>
//             )}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { BookCard } from "@/components/book-card";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Search, SlidersHorizontal } from "lucide-react";

// // ----------------------
// // TypeScript Types
// // ----------------------
// interface Book {
//   id: string;
//   title: string;
//   authors: string[];
//   category: string;
//   description: string;
//   coverImage: string;
//   rating: number;
//   reviewCount: number;
// }

// // ----------------------
// // Component
// // ----------------------
// export default function BooksPage() {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [categories, setCategories] = useState<string[]>(["all"]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState<"rating" | "reviews">("rating");

//   // Fetch books from Google Books API
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const res = await fetch(
//           "https://www.googleapis.com/books/v1/volumes?q=subject:education&maxResults=40"
//         );
//         const data = await res.json();

//         const mappedBooks: Book[] = data.items.map((item: any) => ({
//           id: item.id,
//           title: item.volumeInfo.title,
//           authors: item.volumeInfo.authors || ["Unknown"],
//           category: item.volumeInfo.categories?.[0] || "Uncategorized",
//           description: item.volumeInfo.description || "",
//           coverImage: item.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg",
//           rating: item.volumeInfo.averageRating || 0,
//           reviewCount: item.volumeInfo.ratingsCount || 0,
//         }));

//         setBooks(mappedBooks);

//         const uniqueCategories = Array.from(new Set(mappedBooks.map(b => b.category)));
//         setCategories(["all", ...uniqueCategories]);
//       } catch (err) {
//         console.error("Failed to fetch books:", err);
//       }
//     };

//     fetchBooks();
//   }, []);

//   // Filter & sort books
//   const filteredBooks = books
//     .filter((book) => {
//       const matchesSearch =
//         book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         book.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
//       const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//     })
//     .sort((a, b) => {
//       if (sortBy === "rating") return b.rating - a.rating;
//       if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
//       return 0;
//     });

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-1">
//         {/* Page Header */}
//         <section className="py-12 md:py-16 bg-muted/30 border-b border-border">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl">
//               <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Educational Books</h1>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Discover inspiring educational books recommended by our community of learners.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Filters Section */}
//         <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col lg:flex-row gap-4">
//               {/* Search */}
//               <div className="flex-1 relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search by title or author..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>

//               {/* Category Filter */}
//               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                 <SelectTrigger className="w-full lg:w-[200px]">
//                   <SelectValue placeholder="Category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map((category) => (
//                     <SelectItem key={category} value={category}>
//                       {category === "all" ? "All Categories" : category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               {/* Sort By */}
//               <Select value={sortBy} onValueChange={(value) => setSortBy(value as "rating" | "reviews")}>
//                 <SelectTrigger className="w-full lg:w-[200px]">
//                   <SlidersHorizontal className="h-4 w-4 mr-2" />
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="rating">Highest Rated</SelectItem>
//                   <SelectItem value="reviews">Most Reviewed</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Results Count */}
//             <div className="mt-4">
//               <p className="text-sm text-muted-foreground">
//                 Showing {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Books Grid */}
//         <section className="py-12">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             {filteredBooks.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredBooks.map((book) => (
//                   <BookCard  author={book.authors.join(", ")} key={book.id} {...book} />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-16">
//                 <p className="text-lg text-muted-foreground mb-4">No books found matching your criteria.</p>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookCard } from "@/components/book-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Book = {
  id: string
  title: string
  authors: string[]
  categories: string[]
  description: string
  coverImage: string
  rating: number
  reviewCount: number
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([])
  const [category, setCategory] = useState<string>("All")
  const [categories, setCategories] = useState<string[]>(["All"])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${category === "All" ? "subject:fiction" : `subject:${category}`}&maxResults=40`
      )
      const data = await res.json()
      const items = data.items || []
      const booksData: Book[] = items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || ["Unknown"],
        categories: item.volumeInfo.categories || ["Uncategorized"],
        description: item.volumeInfo.description || "",
        coverImage: item.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg",
        rating: item.volumeInfo.averageRating || 0,
        reviewCount: item.volumeInfo.ratingsCount || 0,
      }))
      setBooks(booksData)

      // Collect unique categories dynamically
      const uniqueCategories = new Set<string>()
      booksData.forEach((book) => {
        book.categories.forEach((cat) => uniqueCategories.add(cat))
      })
      setCategories(["All", ...Array.from(uniqueCategories)])
      setLoading(false)
    }

    fetchBooks()
  }, [category])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8 flex justify-end">
          <Select value={category} onValueChange={(val) => setCategory(val)}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Books Grid */}
        {loading ? (
          <p>Loading books...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.authors.join(", ")}
                category={book.categories[0]}
                description={book.description}
                coverImage={book.coverImage}
                rating={book.rating}
                reviewCount={book.reviewCount}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
