// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { BookOpen, Menu, X } from "lucide-react"
// import { useState } from "react"

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
//             <BookOpen className="h-6 w-6" />
//             <span className="hidden sm:inline">Read for Change</span>
//             <span className="sm:hidden">RFC</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/books" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
//               Browse Books
//             </Link>
//             <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
//               About SDG 4
//             </Link>
//             <Link
//               href="/dashboard"
//               className="text-sm font-medium text-foreground hover:text-primary transition-colors"
//             >
//               My Reviews
//             </Link>
//           </nav>

//           {/* Desktop Auth Buttons */}
//           <div className="hidden md:flex items-center gap-3">
//             <Button variant="ghost" asChild>
//               <Link href="/login">Log In</Link>
//             </Button>
//             <Button asChild>
//               <Link href="/register">Sign Up</Link>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-foreground"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <nav className="flex flex-col gap-4">
//               <Link
//                 href="/books"
//                 className="text-sm font-medium text-foreground hover:text-primary transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Browse Books
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-sm font-medium text-foreground hover:text-primary transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 About SDG 4
//               </Link>
//               <Link
//                 href="/dashboard"
//                 className="text-sm font-medium text-foreground hover:text-primary transition-colors"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 My Reviews
//               </Link>
//               <div className="flex flex-col gap-2 pt-2 border-t border-border">
//                 <Button variant="ghost" asChild className="w-full">
//                   <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
//                     Log In
//                   </Link>
//                 </Button>
//                 <Button asChild className="w-full">
//                   <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
//                     Sign Up
//                   </Link>
//                 </Button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }
// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { BookOpen, Menu, X } from "lucide-react"
// import { useState } from "react"
// import { User } from "@/src/type" // import the User type

// interface HeaderProps {
//   user?: User | null
//   logout?: () => void
// }

// export function Header({ user, logout }: HeaderProps) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
//             <BookOpen className="h-6 w-6" />
//             <span className="hidden sm:inline">Read for Change</span>
//             <span className="sm:hidden">RFC</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/books" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
//               Browse Books
//             </Link>
//             <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
//               About SDG 4
//             </Link>
//             <Link href="/dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
//               My Reviews
//             </Link>
//           </nav>

//           {/* Desktop Auth Buttons */}
//           <div className="hidden md:flex items-center gap-3">
//             {user ? (
//               <>
//                 <span className="text-sm font-medium text-foreground">Hello, {user.name}</span>
//                 <Button onClick={logout}>Logout</Button>
//               </>
//             ) : (
//               <>
//                 <Button variant="ghost" asChild>
//                   <Link href="/login">Log In</Link>
//                 </Button>
//                 <Button asChild>
//                   <Link href="/register">Sign Up</Link>
//                 </Button>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-foreground"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <nav className="flex flex-col gap-4">
//               <Link href="/books" className="text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
//                 Browse Books
//               </Link>
//               <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
//                 About SDG 4
//               </Link>
//               <Link href="/dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
//                 My Reviews
//               </Link>

//               <div className="flex flex-col gap-2 pt-2 border-t border-border">
//                 {user ? (
//                   <Button onClick={() => { logout?.(); setMobileMenuOpen(false) }} className="w-full">
//                     Logout
//                   </Button>
//                 ) : (
//                   <>
//                     <Button variant="ghost" asChild className="w-full">
//                       <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
//                     </Button>
//                     <Button asChild className="w-full">
//                       <Link href="/register" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
//                     </Button>
//                   </>
//                 )}
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/src/context/AuthContext"; // <-- import hook

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // <-- get user and logout function

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <BookOpen className="h-6 w-6" />
            <span className="hidden sm:inline">Read for Change</span>
            <span className="sm:hidden">RFC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/books" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Browse Books
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About SDG 4
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                My Reviews
              </Link>
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <Button variant="ghost" onClick={logout}>
                Logout
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="/books"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse Books
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About SDG 4
              </Link>
              {user && (
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Reviews
                </Link>
              )}

              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                {user ? (
                  <Button variant="ghost" className="w-full" onClick={logout}>
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" asChild className="w-full">
                      <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                        Log In
                      </Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
