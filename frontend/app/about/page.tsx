import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <Target className="h-4 w-4" />
                <span>SDG 4: Quality Education</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">About Read for Change</h1>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                We're building a community that believes in the transformative power of education and the written word.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Read for Change is dedicated to promoting quality education through accessible book reviews and
                  recommendations. We believe that every person deserves access to knowledge and the opportunity to
                  learn from the experiences and insights shared in books.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By creating a platform where readers can discover, review, and recommend educational and inspirational
                  books, we're contributing to UN Sustainable Development Goal 4: ensuring inclusive and equitable
                  quality education and promoting lifelong learning opportunities for all.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Lifelong Learning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We champion continuous education and personal growth through reading and knowledge sharing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Community</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We foster a supportive community of learners who inspire and help each other grow.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Accessibility</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We make quality educational resources discoverable and accessible to everyone, everywhere.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We measure success by the positive change we create in people's lives through education.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* SDG 4 Info */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8 space-y-4">
                <h2 className="text-2xl font-bold">Supporting SDG 4: Quality Education</h2>
                <p className="leading-relaxed">
                  The United Nations' Sustainable Development Goal 4 aims to ensure inclusive and equitable quality
                  education and promote lifelong learning opportunities for all. Through Read for Change, we contribute
                  to this goal by:
                </p>
                <ul className="space-y-2 leading-relaxed">
                  <li>• Providing free access to book reviews and educational recommendations</li>
                  <li>• Building a community that values and promotes literacy</li>
                  <li>• Encouraging knowledge sharing and peer learning</li>
                  <li>• Making educational resources more discoverable</li>
                  <li>• Supporting self-directed learning and personal development</li>
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
