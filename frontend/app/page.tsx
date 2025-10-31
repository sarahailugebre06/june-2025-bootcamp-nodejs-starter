import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Users, Star, TrendingUp, Search, MessageSquare } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <BookOpen className="h-4 w-4" />
                <span>Supporting SDG 4: Quality Education</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Discover Books That <span className="text-primary">Transform Lives</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
                Join our community of learners sharing insights on educational and inspirational books. Read reviews,
                discover new perspectives, and contribute to a culture of lifelong learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/books">Explore Books</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                  <Link href="/register">Join Community</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">2,500+</div>
                  <div className="text-sm text-muted-foreground">Books Reviewed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">1,200+</div>
                  <div className="text-sm text-muted-foreground">Active Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">8,400+</div>
                  <div className="text-sm text-muted-foreground">Reviews Shared</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Why Read for Change?</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                A platform designed to make quality educational resources accessible to everyone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Discover Quality Books</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Browse curated collections of educational and inspirational books recommended by our community.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Read Honest Reviews</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get authentic insights from readers who share your passion for learning and personal growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Share Your Insights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contribute your own reviews and help others discover books that can change their lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Join a Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Connect with like-minded learners who value education and continuous self-improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Track Your Progress</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Keep a personal record of books you've read and reviews you've written.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Support SDG 4</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Be part of a global movement promoting quality education and lifelong learning opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">Start Your Learning Journey Today</h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-balance leading-relaxed">
                Join thousands of readers who are discovering life-changing books and sharing their knowledge with the
                world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                  <Link href="/register">Create Free Account</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/books">Browse Books</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
